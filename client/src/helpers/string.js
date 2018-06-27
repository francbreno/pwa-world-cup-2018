function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

function formatStatsKeyName(keyName) {
  return capitalize(keyName.replace(/_/g, ' '));
}

export default {
  capitalize,
  formatStatsKeyName
}