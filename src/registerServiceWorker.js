export default function registerServiceWorker() {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register("./service-worker.js")
      .then(registration => {
        console.log(`SW registered with scope: ${registration.scope}`);
      }).catch(err => console.error(`SW registration failed: ${err}`));
  }
};