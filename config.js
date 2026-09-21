window.GWC_CONFIG = Object.freeze({
  API_BASE: window.__GWC_API_BASE__ || (location.hostname === "localhost" || location.hostname === "127.0.0.1"
    ? "http://localhost:8080/api"
    : "/api")
});
