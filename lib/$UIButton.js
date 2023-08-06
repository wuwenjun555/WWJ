/** 
 * @file WWJ Library UIButton file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2023
 * @license MIT
 * @version 0.0.1
 */
(function (win) {
  var
    $ = win.WWJ, ce = win.customElements,
    A0UIButton = function (o) { $.A0UI.call(this); },
    tpl = '<template id="tplA0UIButton"><button></button></template>';

  $.ext($.A0UI, A0UIButton);
  $.setORP(A0UIButton.prototype, {
    $TN: "A0UIButton"
  });

  $.setORP($, { A0UIButton: A0UIButton });

  // Web Component
  $(function () {
    if (ce) {
      ce.define('a0-btn', win.import('$UIButton.mjs'));
    } else {
      // TODO: ES5 createElement ?
    }
  });
})(window);
