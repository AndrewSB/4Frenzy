window.doItNow();
setTimeout(function(){chrome.tabs.reload();},3000);
function doItNow() {
	chrome.tabs.executeScript({code: 'document.getElementById(\'sgE-1396841-3-2-10004\').checked=true;'});
	chrome.tabs.executeScript({code: 'document.getElementById(\'sg_SubmitButton\').click();'});
}