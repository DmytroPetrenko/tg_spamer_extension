let changeColor = document.getElementById('id1');

changeColor.onclick = function(element) {
  let color = element.target.value;
  chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
    chrome.tabs.executeScript(
        tabs[0].id, 
        {code: 'document.body.style.backgroundColor = "green";'});
  });
};