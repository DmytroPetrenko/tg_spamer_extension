window.onload = function () {
  var activeTab;
  getCurrentTab(function (tab) {
    activeTab = tab;
  });
};

function getCurrentTab(tabCallback) {
  var activeTabId;
  doInCurrentTab(function (tab) {
    activeTabId = tab.id;
  });

  chrome.tabs.get(activeTabId, function (tab) {
    tabCallback(tab);
  });
}

function doInCurrentTab(tabCallback) {
  chrome.tabs.query({ currentWindow: true, active: true }, function (tabArray) {
    tabCallback(tabArray[0]);
  });
}
