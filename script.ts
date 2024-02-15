function redirectToCooked() {
  chrome.tabs.query({ active: true, lastFocusedWindow: true }, (tabs) => {
    const URL = tabs[0].url;
    chrome.tabs.create({ url: `https://cooked.wiki/${URL}` });
  });
}

const buttonRedirect = document.getElementById("button-redirect");
if (buttonRedirect) {
  buttonRedirect.addEventListener("click", redirectToCooked);
}
