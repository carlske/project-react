// Environment configuration for the house rental app
export const env = {
  // Base URL for API requests (currently using mock adapter)
  BASE_URL: "http://localhost:3000",

  // LocalStorage key for storing mock database data
  DB_KEY: "house-rental-db",

  // Toggle authentication on/off for development
  USE_AUTH: true,
} as const;
