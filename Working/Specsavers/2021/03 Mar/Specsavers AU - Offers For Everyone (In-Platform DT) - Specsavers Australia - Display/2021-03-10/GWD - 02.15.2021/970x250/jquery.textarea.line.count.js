/*!
 * jquery-textarea-line-count v1.0.0 - A jQuery plugin that counts the visual number of lines in a textarea.
 * Copyright (c) 2018 H&H Digital - http://github.com/hnhdigital/jquery-textarea-line-count/
 * Sourced: https://stackoverflow.com/questions/3697096/finding-number-of-lines-in-an-html-textarea
 * Author Kin - https://stackoverflow.com/users/715857/kin
 * License: MIT
 */

(function (factory) {
  if (typeof exports === "object" && exports &&
    typeof module === "object" && module && module.exports === exports) {
    // Browserify. Attach to jQuery module.
    factory(require("jquery"));
  } else if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['jquery'], factory);
  } else {
    // Browser globals.
    factory(jQuery);
  }
}(function ($) {

  /** @type {HTMLTextAreaElement} */
  var _buffer;

  // Plugin entry
  $.fn.countLines = function()
  {
    if ($(this).val() == 0) return 1;
    if ($(this).prop('type') != 'textarea') return 1;

    // Get the {HTMLTextAreaElement}
    textarea = $(this).get(0);

    if (_buffer == null) {
      _buffer = document.createElement('textarea');
      _buffer.style.border = 'none';
      _buffer.style.height = '0';
      _buffer.style.overflow = 'hidden';
      _buffer.style.padding = '0';
      _buffer.style.position = 'absolute';
      _buffer.style.left = '0';
      _buffer.style.top = '0';
      _buffer.style.zIndex = '-1';
      document.body.appendChild(_buffer);
    }

    var cs = window.getComputedStyle(textarea);
    var pl = parseInt(cs.paddingLeft);
    var pr = parseInt(cs.paddingRight);
    var lh = parseInt(cs.lineHeight);

    // [cs.lineHeight] may return 'normal', which means line height = font size.
    if (isNaN(lh)) lh = parseInt(cs.fontSize);

    // Copy content width.
    _buffer.style.width = (textarea.clientWidth - pl - pr) + 'px';

    // Copy text properties.
    _buffer.style.font = cs.font;
    _buffer.style.letterSpacing = cs.letterSpacing;
    _buffer.style.whiteSpace = cs.whiteSpace;
    _buffer.style.wordBreak = cs.wordBreak;
    _buffer.style.wordSpacing = cs.wordSpacing;
    _buffer.style.wordWrap = cs.wordWrap;

    // Copy value.
    _buffer.value = textarea.value;

    var lines = Math.floor(_buffer.scrollHeight / lh);
    if (lines == 0) lines = 1;

    return lines;
  }

}));