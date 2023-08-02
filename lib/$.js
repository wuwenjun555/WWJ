/** 
 * @file WWJ Library core file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

(function (win) {
  var
    typeOf = function (o) { return Object.prototype.toString.call(o).slice(8, -1).toLowerCase(); },
    isVoid = function (o) { return typeof o == 'undefined'; },
    isNull = function (o) { return o == null; },
    isNope = function (o) { return isVoid(o) || isNull(o); },
    isBool = function (o) { return typeOf(o) == 'boolean'; },
    isStr = function (o) { return typeOf(o) == 'string'; },
    isNum = function (o) { return typeOf(o) == 'number'; },
    isFn = function (o) { return typeof o == 'function'; },
    isObj = function (o) { return typeof o == 'object'; },
    isArr = Array.isArray,
    toArr = function (o) { return isArr(o) ? o : [o]; },
    toJSON = JSON.parse,
    toJSONS = function (o, filter, spec) { var fn = isFn(filter) ? filter : null, s = spec || (isNum(filter) ? filter : null); return JSON.stringify(o, fn, s); },
    padS = function (o, l, c) { return (isStr(o) ? o : String(o)).padStart(l, c); },
    padE = function (o, l, c) { return (isStr(o) ? o : String(o)).padEnd(l, c); },
    pad0 = function (o, l) { return padS(o, l, '0') },
    now = function () { var d = new Date(); return '' + d.getFullYear() + pad0(d.getMonth() + 1, 2) + pad0(d.getDate(), 2) + pad0(d.getHours(), 2) + pad0(d.getMinutes(), 2) + pad0(d.getSeconds(), 2) + pad0(d.getMilliseconds(), 3); },
    noop = function () { },
    retrue = function () { return true },
    console = win.console,
    log = function (o, s) {
      s = isStr(o) ? o : toJSONS(o, 4);
      console && console.log && (console.log(s));
      return s;
    },
    has = function (a, o) { return (isArr(a) || isStr(a)) && (a.includes(o)); },
    min = Math.min,
    max = Math.max,

    /** 
     * @fucntion each
     * @param {(Array|Object)} o - loop target
     * @param {function} fn - loop function
     * @param {int} [l=o.length] - loop times = min(i+l, o.length)
     * @param {int} [i=0] - loop start index
     */
    each = function (o, fn, l, i) {
      if (isArr(o) || o instanceof A0) { for (i = i || 0, l = l ? min(i + l, o.length) : o.length; i < l; i++) { fn(i, o[i]); } } //if []
      else { for (i in o) { o.hasOwnProperty(i) && fn(i, o[i]); } } //if {}
    },

    /** 
     * @fucntion setORP
     * @summary Set readonly properties to target object.
     * @param {Object} o - target object
     * @param {string} p - property name
     * @param {*} v - property value
     * @param {boolean} [e=true] - property enumerable
     * @arg {Object} o - target object
     * @arg {Object.<string, *>} p - properties with values object
     * @arg {boolean} [v=true] - property enumerable
     * @example $.setORP(o, 'prop', 'val')
     * @example $.setORP(o, 'prop', 'val', false)
     * @example $.setORP(o, { prop1: 'val1', prop2: 'val2' })
     * @example $.setORP(o, { prop1: 'val1', prop2: 'val2' }, false)
     * @description javascript default value: configurable=true, enumerable=true, writable=true, value=undefined
     */
    setORP = function (o, p, v, e) {
      if (isStr(p)) { return Object.defineProperty(o, p, { configurable: false, enumerable: (isVoid(e) ? true : !!e), writable: false, value: v }); }
      var en = isVoid(v) ? true : !!v, po = {};
      each(p, function (k, v) { po[k] = { configurable: false, enumerable: en, writable: false, value: v }; });
      Object.defineProperties(o, po);
    },

    ext = function (superT, subT, p) {
      (p = function () { }).prototype = superT.prototype;
      (p = new p()).constructor = subT;
      subT.prototype = p;
    },

    /**
     * @typedef {Object} A0 - WWJ UI Core base class
     * @param {Object} o - TODO:
     */
    A0 = function (o, t) {
      t = this.$TN;
      isNum(A0OIDSEQ[t]) ? (A0OIDSEQ[t]++) : (A0OIDSEQ[t] = 1);
      setORP(this, { $ID: t + '_' + A0OIDSEQ[t] });
    },
    A0OIDSEQ = {},

    /**
     * @typedef {Object} WWJ - WWJ object
     * @param {Object} o - TODO:
     * @return {A0} - default return
     */
    WWJ = function (o, i, l, t, r) {
      if (!o.WWJ || o.WWJ !== WWJ) {
        for (i = 0, l = news.length; i < l; i++) {
          if ((t = news[i]).is(o) && !isVoid(r = t.do(o))) return r;
        }
      }
      o.WWJ === WWJ && news[o.is ? 'unshift' : 'push']({ is: (o.is || retrue), do: o.do });
      return WWJ;
    },
    news = [],

    /** 
     * Task Queue
     * @example
     * $.TQ({
     *   sleep: 100,  // reset the default value(50ms) 
     *   opt: { baseURL: $.getBaseURL(), allState: [], allErr:[] },  // cache data what can access at any tasks
     *   state: function() {},  // do something when a task is over
     *   over: function() { $.log('All tasks has over.'); },  // do something when all the tasks is over
     *   tq:[ { state: "Task01 state", opt:{ a:0 }, do:function(){}, over:function(), overState: "Task01 over state" }, {...} ]
     * })();
     * $.TQ.start();
     * $.TQ.stop();
     * $.TQ.redo();
     * $.TQ.sleep(2000);
     * $.TQ.size();
     * @todo waitUntil?bc(before chek)?goon?isGo?when(WHEN/DO/OK/NG/OVER): function(){... return true; do fn}
     * @todo $.TQ.state(); // return current state
     */
    TQ = function (o) { return (o ? TQ.opt(o) : TQ.start()); },
    tq;

  setORP(TQ, {
    clear: function () { tq = { stateFn: 0, sleep: 50, optSleep: 0, arrSleep: [], arrTask: [], curTask: 0, curRet: 0, isStop: 0, states: [], globaOpt: {}, overFn: 0, isOptTaskArr: 0 }; return TQ; },
    opt: function (o) { //o.sleep, o.opt, o.state, o.over, o.tq
      TQ.clear();
      o.state && (tq.stateFn = o.state);
      o.over && (tq.overFn = o.over);
      o.sleep && (tq.optSleep = o.sleep);
      o.tq && (TQ.add(o.tq)) && (tq.isOptTaskArr = $.isArr(o.tq));
      if (o.opt) { for (var p in o.opt) { if (o.opt.hasOwnProperty(p)) { tq.globaOpt[p] = o.opt[p]; } } }
      return TQ;
    },
    add: function (o) { for(var i = 0, a = toArr(o); i < a.length; i++) { tq.arrTask.push($.isFn(a[i]) ? {do:a[i]} : a[i]) } return TQ; },
    start: function (fn) {
      (fn = function (to) {
        if (tq.arrTask.length < 1) return TQ.clear();
        if (tq.isStop) return TQ;
        to = tq.curTask = tq.arrTask.shift();
        if (!to.hasShowState) {
          to.hasShowState = 1;
          if (tq.stateFn && (tq.isOptTaskArr || !$.isNope(to.state))) { tq.stateFn(to.state || '', tq.curRet, tq.curTask.opt, tq.globaOpt); tq.arrTask.unshift(to); return setTimeout(fn, 20); }
        }
        if (!to.hasDone) {
          if (to.do) {
            try {
              tq.curRet = to.do(tq.curRet, tq.curTask.opt, tq.globaOpt);
            } finally { to.over && (to.over()); tq.overFn && tq.overFn(tq.curRet, tq.curTask.opt, tq.globaOpt); }
          }
          to.hasDone = 1;
        }
        to.clearIsGoon && (to.clearIsGoon = to.isGoon = 0);
        !to.goon && (to.isGoon = 1);
        if (!to.isGoon) {
          try {
            to.isGoon = to.goon(tq.curRet, tq.curTask.opt, tq.globaOpt);
          } finally { to.over && (to.over()); tq.overFn && tq.overFn(tq.curRet, tq.curTask.opt, tq.globaOpt); }
          !to.isGoon && (TQ.redo(1));
        }
        to.isGoon && tq.stateFn && !$.isNope(to.overState) && (tq.stateFn(to.overState, tq.curRet, tq.curTask.opt, tq.globaOpt));
        setTimeout(fn, (tq.arrSleep.pop() || tq.optSleep || tq.sleep));
      })();
      return TQ;
    },
    stop: function () { tq.isStop = 1; return TQ; },
    redo: function (isGoonOnly) { if (!isGoonOnly) { tq.curTask.çlearIsGoon = 1; tq.curTask.hasDone = 0; } tq.arrTask.unshift(tq.curTask); return TQ; },
    sleep: function (o) { tq.arrSleep.push(o); return TQ; },
    size: function () { return tq.arrTask.length; }
  });

  setORP(WWJ, {
    isVoid: isVoid, isNull: isNull, isNope: isNope, isBool: isBool, isStr: isStr, isNum: isNum, isFn: isFn, isObj: isObj, isArr: isArr,
    toArr: toArr, toJSON: toJSON, toJSONS: toJSONS, padS: padS, padE: padE, pad0: pad0, now: now, noop: noop, console: console, log: log,
    has: has, min: min, max: max, each: each, setORP: setORP, A0: A0, ext: ext, TQ: TQ
  });

  /**
   * @lends A0.prototype
   * @readonly @property {string} $TN - class A0's type name
   */
  setORP(A0.prototype, { $TN: "A0" });

  setORP(win, { "WWJ": WWJ });
  setORP(win, { "$": WWJ });

  WWJ({ WWJ: WWJ, is: 0, do: function (o) { $.log('page init $');  /* return new A0(o); */ } });
})(window);
