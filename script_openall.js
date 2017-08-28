chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});
chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});
chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});
chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});
chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});

sleep(10);
window.doItNow();
sleep(5)
window.doItNow();

chrome.tabs.remove(0);

function sleep (seconds) {
    var start = new Date().getTime();
    while (new Date() < start + seconds*1000) {}
    return 0;
    alert("Im here");
}


function doItNow() {
	chrome.tabs.executeScript({code: 'document.getElementById(\'sgE-1396841-3-2-10004\').checked=true;'});
	chrome.tabs.executeScript({code: 'document.getElementById(\'sg_SubmitButton\').click();'});
	chrome.tabs.remove();
}