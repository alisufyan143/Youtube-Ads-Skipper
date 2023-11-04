chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {
    if (changeInfo.status == 'complete' && tab.url.includes('https://www.youtube.com')) {
      chrome.tabs.executeScript(tabId, {file: 'yourScript.js'});
    }
  });