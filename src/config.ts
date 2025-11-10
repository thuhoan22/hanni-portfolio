const hostname = window.location.hostname;

// Nếu có .env thì dùng, nếu không có thì fallback sang hostname
export const BASE_URL =
  process.env.REACT_APP_API_URL || `http://${hostname}:5000`;