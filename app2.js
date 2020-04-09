var main = function () {
"use strict";
// create and hide our content as a div
var $content = $("<div>Hello World!</div>").hide();
// append the content to the body element
$("body").append($content);
// slide the content down for 2 seconds
$content.slideDown(2000);
};
$(document).ready(main);
