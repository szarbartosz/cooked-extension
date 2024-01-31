chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
  const URL = tabs[0].url;
  chrome.tabs.create({ url: `https://cooked.wiki/${URL}` });
});
