
document.domain="localhost"

var createNewIframe = function(name, id, width, height) {
  var newIframe = document.createElement("iframe");
  newIframe.setAttribute("width", width);
  newIframe.setAttribute("height", height);
  newIframe.name = name;
  newIframe.id = id;
  return newIframe;
};

var insertFrameInDivision = function(iframe, divId) {
  divElem = document.getElementById(divId);
  divElem.appendChild(iframe);
};

var deleteFrameInDivision = function(frameId, divId) {
  if (document.getElementById(divId).hasChildNodes()) {
    frameElem = document.getElementById(frameId);
    if (frameElem !== null) {
      frameElem.parentNode.removeChild(frameElem);
    }
  }
};

var insertFrame = function() {
  newFrame = createNewIframe("iframe1", "iframe1", "100%", "30%");
  division = document.getElementById('div_iframe');
  insertFrameInDivision(newFrame, division.id);
};

var deleteFrame = function() {
  frame = document.getElementById('iframe1');
  division = document.getElementById('div_iframe');
  deleteFrameInDivision(frame.id, division.id);
};

var setWebAppInIframe = function() {
  var iframe = document.getElementById("iframe1");
  iframe.src = "http://dev.vlabs.ac.in";
};

var setWebAppInSandBoxedIframe = function() {
  deleteFrame();
  insertFrame();
  var iframe = document.getElementById("iframe1");
  iframe.sandbox = 'allow-forms allow-scripts allow-same-origin';
  iframe.src = "https://vlabs.ac.in";
};

var setContent = function() {
  var iframe = document.getElementById("iframe1");
  var content = iframe.contentWindow.document;
  var elem = content.getElementById('template-div');
  // elem.innerHTML = "<p>Hello world</p>";
};

var setContentInIframe = function() {
  deleteFrame();
  insertFrame();
  var iframe = document.getElementById("iframe1");
  iframe.src = "./iframe_template.html";
  setTimeout(setContent, 100);
};

var resetContentInIframe = function() {
  var iframe = document.getElementById("iframe1");
  var content = iframe.contentWindow.document;
  var elem = content.getElementById('template-div');
  elem.innerHTML = "<p>Resetting Hello world</p>";
};

setInterval(function(){
  search();
}, 1000);

var search = function () {
  var elem = content.getElementById('template-div');
  var srch = elem.search("MyCourses");
  if(srch){
    alert("user logged in!");
  }
};
