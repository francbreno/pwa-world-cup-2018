// Verify service worker is supported
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register("./sw.js")
    .then(registration => {
      console.log(`SW registered with scope: ${registration.scope}`);
    }).catch(err => console.err(`SW registration failed: ${registration}`));
}

function getCurrentMatch() {
  return fetch('http://worldcup.sfg.io/matches/today')
    .then(matches => {
      return matches
        .map(match => `
          <div class="match-line">
            <h2>Today's Match</h2>
            <h3>${match.home_team} x ${match.away_team}</h3>
          </div>
        `)
        .reduce((acc, curr) => {
          acc + curr
        }, '');
    }).then(result => document.getElementById.innerHTML = result);
};

getCurrentMatch();