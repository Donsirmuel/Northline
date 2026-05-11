import { createContext, useContext, useEffect, useMemo, useState } from "react";
import type { ReactNode } from "react";
import { products } from "@/lib/catalog";

type CartLine = {
  productId: string;
  quantity: number;
  size: string;
};

type CartItem = CartLine & {
  name: string;
  slug: string;
  price: number;
  image: string;
};

type StoredCart = {
  version: 1;
  savedAt: number;
  expiresAt: number;
  lines: CartLine[];
};

type CartContextValue = {
  items: CartItem[];
  subtotal: number;
  itemCount: number;
  addItem: (productId: string, size: string) => void;
  removeItem: (productId: string, size: string) => void;
  updateQuantity: (productId: string, size: string, quantity: number) => void;
  clearCart: () => void;
};

const CART_STORAGE_KEY = "northline-cart";
const CART_STORAGE_TTL_MS = 1000 * 60 * 60 * 24 * 30;
const CartContext = createContext<CartContextValue | undefined>(undefined);

function mapLinesToItems(lines: CartLine[]): CartItem[] {
  return lines
    .map((line) => {
      const product = products.find((item) => item.id === line.productId);
      if (!product) return null;

      return {
        ...line,
        name: product.name,
        slug: product.slug,
        price: product.price,
        image: product.image,
      };
    })
    .filter((line): line is CartItem => line !== null);
}

  function isCartLine(value: unknown): value is CartLine {
    if (!value || typeof value !== "object") return false;

    const candidate = value as CartLine;

    return (
      typeof candidate.productId === "string" &&
      typeof candidate.size === "string" &&
      Number.isInteger(candidate.quantity) &&
      candidate.quantity > 0
    );
  }

  function readStoredCart(): CartLine[] | null {
    if (typeof window === "undefined") return null;

    const raw = window.localStorage.getItem(CART_STORAGE_KEY);
    if (!raw) return null;

    try {
      const parsed = JSON.parse(raw) as Partial<StoredCart>;
      if (parsed.expiresAt && Date.now() > parsed.expiresAt) {
        window.localStorage.removeItem(CART_STORAGE_KEY);
        return null;
      }

      if (!Array.isArray(parsed.lines) || !parsed.lines.every(isCartLine)) {
        window.localStorage.removeItem(CART_STORAGE_KEY);
        return null;
      }

      return parsed.lines;
    } catch {
      window.localStorage.removeItem(CART_STORAGE_KEY);
      return null;
    }
  }

  function writeStoredCart(lines: CartLine[]) {
    if (typeof window === "undefined") return;

    const now = Date.now();
    const payload: StoredCart = {
      version: 1,
      savedAt: now,
      expiresAt: now + CART_STORAGE_TTL_MS,
      lines,
    };

    window.localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(payload));
  }

export function CartProvider({ children }: { children: ReactNode }) {
  const [lines, setLines] = useState<CartLine[]>([]);

  useEffect(() => {
      const stored = readStoredCart();
      if (stored) {
        setLines(stored);
      }
  }, []);

  useEffect(() => {
      writeStoredCart(lines);
  }, [lines]);

    useEffect(() => {
      const handleStorage = (event: StorageEvent) => {
        if (event.key !== CART_STORAGE_KEY) return;

        const stored = readStoredCart();
        setLines(stored ?? []);
      };

      window.addEventListener("storage", handleStorage);

      return () => window.removeEventListener("storage", handleStorage);
    }, []);

  const items = useMemo(() => mapLinesToItems(lines), [lines]);

  const value = useMemo<CartContextValue>(() => {
    const subtotal = items.reduce((total, item) => total + item.price * item.quantity, 0);
    const itemCount = items.reduce((count, item) => count + item.quantity, 0);

    return {
      items,
      subtotal,
      itemCount,
      addItem: (productId: string, size: string) => {
        setLines((current) => {
          const existing = current.find((item) => item.productId === productId && item.size === size);
          if (existing) {
            return current.map((item) =>
              item.productId === productId && item.size === size
                ? { ...item, quantity: item.quantity + 1 }
                : item,
            );
          }

          return [...current, { productId, quantity: 1, size }];
        });
      },
      removeItem: (productId: string, size: string) => {
        setLines((current) => current.filter((item) => !(item.productId === productId && item.size === size)));
      },
      updateQuantity: (productId: string, size: string, quantity: number) => {
        if (quantity <= 0) {
          setLines((current) => current.filter((item) => !(item.productId === productId && item.size === size)));
          return;
        }

        setLines((current) =>
          current.map((item) =>
            item.productId === productId && item.size === size ? { ...item, quantity } : item,
          ),
        );
      },
      clearCart: () => setLines([]),
    };
  }, [items]);

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }

  return context;
}
