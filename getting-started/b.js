var i=0;
chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (changeInfo.status === 'complete') {
        chrome.scripting.insertCSS({
            target: { tabId: tabId },
            files: ["./foreground.js"],

        })
      

    }
});
