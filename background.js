// function that injects code to a specific tab
function injectScript(tabId) {

    chrome.scripting.executeScript(
        {
            target: {tabId: tabId},
            files: ['script.js'],
        }
    );

}

// To handle youtube video page
chrome.webNavigation.onHistoryStateUpdated.addListener(function (details) {

    if (details.frameId === 0) {

        // Fires only when details.url === currentTab.url
        chrome.tabs.get(details.tabId, function (tab) {
            if (tab.url === details.url) {
                injectScript(details.tabId);
            }
        });
    }
});