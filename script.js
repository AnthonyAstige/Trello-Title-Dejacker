// ==UserScript==
// @name         Trello Title Dejacker
// @namespace    http://tampermonkey.net/
// @version      0.1
// @description  Stops Trello from putting unread count in the title.
// @author       Anthony Astige
// @match        https://trello.com/
// @grant        none
// ==/UserScript==

// Set starting title
document.title = 'Trello';

window.onload = function() {
	'use strict';
	// Kick it harder into place
	document.title = 'Trello';

	// Hijack title changes: Inspiration from https://stackoverflow.com/questions/2497200/how-to-listen-for-changes-to-the-title-element
	var titleEl = document.getElementsByTagName('title')[0];
	var docEl = document.documentElement;
	docEl.addEventListener(
		'DOMSubtreeModified',
		function(evt) {
			var t = evt.target;
			if (
				(document.title !== 'Trello') &&
				(t === titleEl || (t.parentNode && t.parentNode === titleEl))
			) {
				document.title = 'Trello';
			}
		},
		false
	);
};
