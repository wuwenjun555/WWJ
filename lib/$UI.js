/** 
 * @file WWJ Library UI file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */
(function (win) {
  var
    doc = win.document, $ = win.WWJ, arrPageInit = [], $$ = {},
    isDOM = function (o) { return o instanceof HTMLElement || o instanceof Element || o instanceof Window || o instanceof Document; },
    eachA0UI = function (o, fn) { $.each(o.o, fn); return o; },
    A0UI = function (o) { $.A0.call(this); };

  $.ext($.A0, A0UI);
  $.setORP(A0UI.prototype, {
    $TN: "A0UI",
    //TODO: on: function (t, delegate, data, fn) { },
    //TODO: on: function (t, delegate, fn) { },
    //TODO: on: function (t, data, fn) { },
    //TODO: on: function (t, fn) { }, => Over!
    //TODO: on: function (t, ddf, df, f) { },
    on: function (t, fn) { return eachA0UI(this, function (i, v) { v.addEventListener(t, fn); }); },
    click: function (fn) { return fn ? this.on('click', fn) : this[0].click(); },
    change: function (fn) {
      if (fn) { return this.on('change', fn) }
      var e = $.isHTA ? doc.createEvent('HTMLEvents') : (new Event('change'));
      $.isHTA && (e.initEvent('change', false, true));
      return this[0].dispatchEvent(e);
    },
    hide: function () { return eachA0UI(this, function (i, v) { v.style.display = 'none'; }); },
    show: function () {
      return eachA0UI(this, function (i, v) {
        v.style.display = 'block';
      });
    },
    val: function (v, p) {
      p = ['INPUT', 'SELECT', 'TEXTAREA'].includes(this[0].tagName) ? 'value' : 'innerText';
      if ($.isVoid(v)) {
        return this[0][p];
      } else {
        return eachA0UI(this, function (i, e) { e[p] = v; });
      }
    },
    attr: function (p, v) {
      if ($.isVoid(v)) {
        return this[0].getAttribute(p);
      } else {
        return eachA0UI(this, function (i, e) { e.setAttribute(v); });
      }
    },
    html: function (o) {
      $.isStr(o) ? (this[0].innerHTML = o) : (this[0].appendChild(o));
      return o ? this : this[0].innerHTML;
    }
  });
  $({ WWJ: $, is: $.isFn, do: function (o) { arrPageInit.push(o); return $; } });  // page init
  $({  // DOM
    WWJ: $, is: isDOM, do: function (o, r) {
      $.setORP((r = new A0UI()), { selector: '', o: [o], length: 1 });
      $.setORP(r, { 0: o }, 0);
      return r;
    }
  });
  $({  // selector
    WWJ: $, is: $.isStr, do: function (o, d, l, i, p, r) {
      for (d = doc.querySelectorAll(o), p = {}, l = d.length, i = 0; i < l; i++) { p[i] = d[i]; }
      if (l < 1) return;
      $.setORP((r = new A0UI()), { selector: o, o: d, length: l });
      $.setORP(r, p, 0);
      return r;
    }
  });

  $.setORP($, { isDOM: isDOM, A0UI: A0UI });

  doc.addEventListener('DOMContentLoaded', function () { $.each(arrPageInit, function (i, fn) { fn(); }); });

  $(function () {
    $.log('page init $UI');
    $.each($('[id]'), function (i, v) { $$[v.id] = $('#' + v.id); });
    $$.btnRefresh && ($$.btnRefresh.click(function () { win.location.reload(); }));
  });
  win.$$ = $$;
})(window);
