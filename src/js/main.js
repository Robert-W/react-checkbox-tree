/** @jsx React.DOM */
(function (win, doc) {
	// Bring in the base css right away
	require('css/app.css');
	// Start The Demo Application Here
	var launch = function () {
		var React = require('react');
		var Tree = require('js/Tree');
		var data = require('js/TreeData'); 

		/* jshint ignore:start */
		React.render(<Tree data={data} />, doc.getElementById('react-root'));
		/* jshint ignore:end */
	};

	win.requestAnimationFrame = (function () {
  	return win.requestAnimationFrame ||
      win.webkitRequestAnimationFrame ||
      win.mozRequestAnimationFrame ||
      win.oRequestAnimationFrame ||
  		win.msRequestAnimationFrame;
  })();

  if (win.requestAnimationFrame) {
    win.requestAnimationFrame(launch);
  } else if (doc.readyState === "loaded") {
    launch();
  } else {
    win.onload = launch;
  }


})(window, document);