/** 
 * @file WWJ Library util file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */
(function (win) {
  var
    $ = win.WWJ,
    hyphen = function (o) {  //panelHead => panel-head
      return o.replace(/([a-z][A-Z])/g, function (w) { return w[0] + '-' + w[1].toLowerCase(); });
    },
    camelCase = function (o) {  //panel-head-BAR-YP => panelHeadBarYp
      return o.toLowerCase().replace(/-(.)/g, function (m, w1) { return w1.toUpperCase(); });
    },
    html = function (o) {  //html string => html dom object
      return document.createRange().createContextualFragment(o).firstChild;
    };

  $.setORP($, {
    html: html,
    hyphen: hyphen, camelCase: camelCase
  });
})(window);