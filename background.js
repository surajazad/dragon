console.log("Hi from background Script file")

chrome.runtime.onMessage.addListener( function (request, sender, sendResponse) {
    console.log("Got message from content Script: ", request);
    sendResponse('OK');
})
