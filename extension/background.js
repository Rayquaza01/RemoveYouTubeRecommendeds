browser.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
    if (tab.url.match(/https?:\/\/www.youtube.com\/watch.*/)) {
        browser.pageAction.show(tab.id);
    }
});
browser.pageAction.onClicked.addListener((tab) => {
    browser.pageAction.getTitle({tabId: tab.id}, (title) => {
        if (title === "Hide Recommendeds") {
            browser.tabs.executeScript(tab.id, {code: "hide(\"none\");"});
            browser.pageAction.setTitle({tabId: tab.id, title: "Show Recommendeds"});
            browser.pageAction.setIcon({tabId: tab.id, path: "icons/show.svg"});
        } else if (title === "Show Recommendeds") {
            browser.tabs.executeScript(tab.id, {code: "hide(\"list-item\");"});
            browser.pageAction.setTitle({tabId: tab.id, title: "Hide Recommendeds"});
            browser.pageAction.setIcon({tabId: tab.id, path: "icons/hide.svg"});
        }
    });
});
