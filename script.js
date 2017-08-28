window.doItNow();
sleep(5000);
window.doItNow();

function doItNow() {
	chrome.tabs.executeScript({code: 'document.getElementById(\'sgE-1396841-3-2-10004\').checked=true;'});
	chrome.tabs.executeScript({code: 'document.getElementById(\'sg_SubmitButton\').click();'});
	chrome.tabs.create({url: 'http://www.clickondetroit.com/sports/4frenzy'});
}


function sleep(milliseconds) {
var start = new Date().getTime();
while ((new Date().getTime() - start) < milliseconds){
// Do nothing
}
}