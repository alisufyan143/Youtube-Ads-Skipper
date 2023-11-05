let isExtensionActive = true; // Variable to hold the state of the extension

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    if (request.message === "toggle") {
      isExtensionActive = !isExtensionActive; // Toggle the state of the extension
    }
    sendResponse({isActive: isExtensionActive});
  }
);

chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
  if (changeInfo.status == 'complete' && tab.url.includes('https://www.youtube.com') && isExtensionActive) {
    chrome.tabs.executeScript(tabId, {file: 'yourScript.js'});
  }
});
