if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(registration => {
      console.log(`SW registered with scope: ${registration.scope}`);
    }).catch(err => console.err(`SW registration failed: ${registration}`));
}