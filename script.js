let API_KEY;

if (typeof window.weapi === "string" && window.weapi.length > 5) {
  API_KEY = window.weapi;
} else {

  import("./config.js")
    .then(module => {
      API_KEY = module.api;

    })
    .catch(err => {
      console.error("Failed to load config.js:", err);
    });
}

