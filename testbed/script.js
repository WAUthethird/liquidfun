var favIcon = "\
iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABrUlEQVR42mNkwAOepOgxMTD9mwhk\
[...truncated for brevity...]
IALgNIBUQBUDAFi2whGNUZ3eAAAAAElFTkSuQmCC";

var docHead = document.getElementsByTagName('head')[0];       
var newLink = document.createElement('link');
newLink.rel = 'shortcut icon';
newLink.href = 'data:/testbed/favicon.ico;base64,'+favIcon;
docHead.appendChild(newLink);
