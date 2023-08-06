/** 
 * @file WWJ Library UIButton file for ES Module.
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
    // if (ce) {
    //   ce.define('a0-btn', win.import('$UIButton.mjs'));
    // } else {
    //   // TODO: ES5 createElement ?
    // }
    class A0UIButton extends HTMLElement {
      constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: "closed" });
        this._shadowRoot.appendChild($.html(tpl).content.cloneNode(true));
        this.$btn = this._shadowRoot.querySelector('button');
      }

      get txt() { return this.getAttribute('txt'); }
      set txt(v) { this.setAttribute('txt', v); }

      static get observedAttributes() { return ['txt']; }
      attributeChangedCallback(name, oldVal, newVal) {
        //this[name]=newVal;
        this.render();
      }

      render() {
        this.$btn.innerHTML = this.txt;
      }

      connectedCallback() {
        //TODO: when this inserted into DOM, then do
      }

      disconnectedCallback() {
        //TODO: when this removed from DOM, then do
      }
    }
    ce.define('a0-btn', A0UIButton);
  });
})(window);