const testButton = document.getElementById('testButton');

function sendToContent() {

    chrome.tabs.query({
        active: true,
        currentWindow: true
    }, function (tabs) {
        chrome.tabs.sendMessage(tabs[0].id, {
            mail:'message'
        }, function (response) {
            console.log(response);
        });
    });
}



testButton && testButton.addEventListener('click', sendToContent)