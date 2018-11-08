chrome.tabs.onUpdated.addListener(function (tabId, changeInfo, tab) {
	if (changeInfo.status === 'complete') {
		// alert("Completed");
	    chrome.tabs.sendMessage(tabId, {type: 'tabUpdate'}, function (doc) {
	    	console.log(doc);
	    });
	}
});