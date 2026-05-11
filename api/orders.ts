type OrderItem = {
  productId: string;
  slug: string;
  name: string;
  size: string;
  quantity: number;
  price: number;
};

type OrderRequest = {
  customer?: {
    fullName?: string;
    email?: string;
    phone?: string;
  };
  shippingAddress?: {
    addressLine1?: string;
    addressLine2?: string;
    city?: string;
    region?: string;
    postalCode?: string;
    country?: string;
  };
  notes?: string;
  subtotal?: number;
  shipping?: number;
  total?: number;
  items?: OrderItem[];
};

function createOrderId() {
  return `ORD-${Math.random().toString(36).slice(2, 6).toUpperCase()}${Date.now().toString().slice(-6)}`;
}

function isValidString(value: unknown) {
  return typeof value === "string" && value.trim().length > 0;
}

function isValidItems(items: unknown): items is OrderItem[] {
  if (!Array.isArray(items) || items.length === 0) return false;

  return items.every((item) => {
    if (!item || typeof item !== "object") return false;
    const candidate = item as OrderItem;

    return (
      isValidString(candidate.productId) &&
      isValidString(candidate.slug) &&
      isValidString(candidate.name) &&
      isValidString(candidate.size) &&
      Number.isInteger(candidate.quantity) &&
      candidate.quantity > 0 &&
      typeof candidate.price === "number" &&
      candidate.price >= 0
    );
  });
}

export default async function handler(request: Request) {
  if (request.method !== "POST") {
    return new Response(JSON.stringify({ error: "Method not allowed" }), {
      status: 405,
      headers: { "content-type": "application/json" },
    });
  }

  try {
    const payload = (await request.json()) as OrderRequest;

    const customer = payload.customer ?? {};
    const shippingAddress = payload.shippingAddress ?? {};

    const requiredFields = [
      customer.fullName,
      customer.email,
      shippingAddress.addressLine1,
      shippingAddress.city,
      shippingAddress.country,
      shippingAddress.postalCode,
    ];

    if (!requiredFields.every(isValidString) || !isValidItems(payload.items)) {
      return new Response(JSON.stringify({ error: "Invalid order payload" }), {
        status: 400,
        headers: { "content-type": "application/json" },
      });
    }

    const orderId = createOrderId();
    const subtotal = typeof payload.subtotal === "number" ? payload.subtotal : 0;
    const shipping = typeof payload.shipping === "number" ? payload.shipping : 0;
    const total = typeof payload.total === "number" ? payload.total : subtotal + shipping;

    const order = {
      orderId,
      createdAt: new Date().toISOString(),
      customer,
      shippingAddress,
      notes: payload.notes ?? "",
      subtotal,
      shipping,
      total,
      items: payload.items,
      status: "pending",
    };

    // Replace this section with your database, webhook, or email provider integration.
    console.info("Guest order received", order);

    return new Response(
      JSON.stringify({
        orderId,
        message: "Order received. Confirmation email workflow should be connected next.",
      }),
      {
        status: 201,
        headers: { "content-type": "application/json" },
      },
    );
  } catch {
    return new Response(JSON.stringify({ error: "Unable to process order" }), {
      status: 500,
      headers: { "content-type": "application/json" },
    });
  }
}