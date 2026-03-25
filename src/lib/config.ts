/**
 * Runtime app settings for environment-dependent behavior.
 */
export const appConfig = {
  appUrl: import.meta.env.VITE_APP_URL || "http://localhost:8080",
  apiBaseUrl: import.meta.env.VITE_API_BASE_URL || "https://api.example.com",
  enableAnalytics: import.meta.env.VITE_ENABLE_ANALYTICS === "true",
} as const;
