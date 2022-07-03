export const Config = {
    appName: import.meta.env.VITE_REACT_APP_NAME || "Untitled",
    baseURL: import.meta.env.VITE_BASE_URL || "",
} as const