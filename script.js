async function getCurrentTab() {
  const queryOptions = { active: true, lastFocusedWindow: true };
  const [tab] = await chrome.tabs.query(queryOptions);

  return tab;
}

async function copyToClipBoard() {
  const tab = await getCurrentTab();

  const URL = tab.url;
  const cookedURL = !URL.includes("cooked.wiki")
    ? `https://cooked.wiki/${URL}`
    : URL;

  try {
    await navigator.clipboard.writeText(cookedURL);
    alert("Copied cooked URL to clipboard! \u{1F374}");
  } catch (err) {
    alert("Error occurred when copying to clipboard! \u{1F9C2}");
  }
}

const buttonRedirect = document.getElementById("button-redirect");
buttonRedirect.addEventListener("click", function () {
  copyToClipBoard();
});
