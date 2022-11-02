(function (win) {
  var
    html = function (o) { return document.createRange().createContextualFragment(o).firstChild; },
    add = function (a) { for (var i = 0; i < a.length; i++) { a[i][0].appendChild(a[i][1]); } },
    box = html('<div style="width:100%;color:#000;font-family:Consolas;font-size:14px;padding:3px 0;position:fixed;bottom:-4px;left:0;opacity:1;display:block;z-index:9999999"></div>'),
    dragbar = html('<div style="border-top:3px solid #EDEDED;border-bottom:1px solid #CCC;width:100%;cursor:row-resize"></div>'),
    head = html('<div style="height:24px;background:#EDEDED;border-top:1px solid #FFF;border-bottom:1px solid #CACACA;font-family:Arial"><span style="padding-left:5px;font-weight:700;color:#555">Console</span><span style="float:right;margin-right:8px;cursor:pointer;color:grey" onclick="htaConsole.toggle()">&#10006;</span></div>'),
    btnMin = html('<span style="float:right;margin-top:1px;margin-right:10px;cursor:pointer;color:grey" onclick="htaConsole.minimize()">&#9660;</span>'),
    pmain = html('<div style="background:#FFF"></div>'),
    csl = html('<div style="overflow:auto;height:150px;padding:0 5px;display:block;background:#FFF"></div>'),
    cmdFlag = html('<span style="padding-left:4px;font-weight:700;font-size:16px;color:#62ADEA">&#62;</span>'),
    cmdl = html('<input style="width:97%;border:none;padding-left:6px;outline-width:0">'),
    nav = html('<div style="height:21px;width:100%;padding-left:4px;line-height:1;font-size:18px;font-weight:700;background:#EDEDED;border-top:1px solid #cacaca;color:grey"><span style="cursor:pointer" onclick="htaConsole.clear()">&#10680;</span></div>'),
    btnTran = html('<span style="cursor:pointer" onclick="htaConsole.transparent()">&#9680;</span>'),
    cmdHistory = [], cmdHistoryPos = 0, doc = win.document,

    censor = function (censor) {
      var i = 0;
      return function (k, v) {
        if (i != 0 && typeof censor == 'object' && typeof v == 'object' && censor == v)
          return '[Circular]';
        if (i >= 29)
          return '[Unknown]';
        ++i;
        return v;
      };
    },
    htaConsole = {
      log: function (s) {
        csl.appendChild(html('<div>' + s + '<br></div>'));
        this.consoleresize();
      },
      consoleresize: function () { csl.scrollTop = csl.scrollHeight; },
      clear: function () { csl.innerHTML = ''; },
      transparent: function () {
        var b = box.style.opacity === '0.5';
        box.style.opacity = b ? '1.0' : '0.5';
        btnTran.innerHTML = b ? '&#9680;' : '&#9899;';
      },
      minimize: function () {
        var b = csl.style.display === 'block', c = csl.style;
        b && (this.panelConsoleHeight = c.height);
        c.height = b ? 0 : this.panelConsoleHeight;
        c.display = b ? 'none' : 'block';
        btnMin.innerHTML = b ? '&#9650;' : '&#9660;';
        !b && (this.consoleresize());
      },
      toggle: function () {
        var b = box.style.display === 'block';
        box.style.display = b ? 'none' : 'block';
        !b && (this.consoleresize());
      },
      init: function () {
        var on = function (o, t, f, p) { o.addEventListener(t, f, !!p); },
          dragFn = function (e) { csl.style.height = (win.innerHeight - 69 - e.clientY) + 'px'; };
        on(dragbar, 'mousedown', function (e) { e.preventDefault(); on(document, 'mousemove', dragFn); });
        on(document, 'mouseup', function () { document.removeEventListener('mousemove', dragFn); });
        on(document, 'keydown', function (e) { e.key == 'F12' && (htaConsole.toggle()); }, true);
        on(csl, 'click', function () { cmdl.focus(); });
        on(cmdl, 'keypress', function (e) {
          if (e.keyCode === 13) {
            var sCmd = this.value;
            if (sCmd === "clear") {
              htaConsole.clear();
              this.value = '';
            } else if (sCmd === "history") {
              for (var x = 0; x < cmdHistory.length; x++) console.log(cmdHistory[x]);
              this.value = '';
            } else if (sCmd) {
              htaConsole.log('<span style="color:#777; font-weight:700">&#62;</span> <span>' + sCmd + '</span>');
              cmdHistory.push(sCmd);
              try {
                var evalCmd = eval(sCmd);
                if (typeof evalCmd === "object") {
                  try { console.log(JSON.stringify(evalCmd)); }
                  catch (e) {
                    try { console.log(JSON.stringify(evalCmd, censor(evalCmd))); } catch (e) { throw e; }
                  }
                } else {
                  console.log(evalCmd);
                }
              } catch (e) {
                throw e;
              } finally { this.value = ''; }
            }
            cmdHistoryPos = cmdHistory.length;
          }
        });

        on(cmdl, 'keydown', function (e) {
          if (e.keyCode == 38) {
            cmdHistoryPos--;
            if (cmdHistoryPos < 0) cmdHistoryPos = 0;
            if (cmdHistory[cmdHistoryPos] !== undefined && cmdHistory[cmdHistoryPos] !== '') {
              this.value = cmdHistory[cmdHistoryPos];
              return false;
            } else if (cmdHistoryPos == cmdHistory.length) {
              this.value = '';
              return false;
            }
          }

          if (e.keyCode == 40) {
            cmdHistoryPos++;
            if (cmdHistoryPos >= cmdHistory.length) cmdHistoryPos = cmdHistory.length;
            if (cmdHistory[cmdHistoryPos] !== undefined && cmdHistory[cmdHistoryPos] !== '') {
              this.value = cmdHistory[cmdHistoryPos];
              return false;
            } else if (cmdHistoryPos === cmdHistory.length) {
              this.value = '';
              return false;
            }
          }
        });

        document.body.appendChild(box);
        console = win || win.console;
        var method = ["log", "info", "warn", "onerror", "debug", "trace", "dir", "group", "groupCollapsed", "groupEnd", "time",
          "timeEnd", "profile", "profileEnd", "dirxml", "assert", "count", "markTimeline", "timeStamp", "clear", "cmd"];
        //define undefined methods as noops to prevent errors
        for (var i = 0; i < method.length; i++) {
          if (!win.console[method[i]]) {
            if (method[i] === 'onerror') {
              console[method[i]] = function () {
                var arg = arguments;
                htaConsole.log('<span style="color:red">&otimes;<span>' + arg[0] + '</span><span style="cursor:pointer;color:blue" onclick="window.open(\'' + arg[1] + '\')">' + arg[1].split('/').pop() + ":" + arg[2] + '</span></span>');
                return true;
              }
            } else {
              console[method[i]] = function () { return true; }
            }
          }
        }

        console = {
          clear: htaConsole.clear,
          cmd: function (arg) { htaConsole.log('<span style="color:#777;font-weight:700">&#62;</span> <span>' + arg + '</span>'); },
          info: function (arg) { htaConsole.log('<span style="color:RoyalBlue">&#9432;</span> <span>' + arg + '</span>'); },
          log: function (arg) { htaConsole.log('<span style="padding-left:2px">' + arg + '</span>'); },
          warn: function (arg) { htaConsole.log('<span style="color:orange">&#9888;</span> <span>' + arg + '</span>'); },
          error: function (e) { throw e; }
        };
      }
    };

  add([[head, btnMin], [pmain, csl], [pmain, cmdFlag], [pmain, cmdl], [nav, btnTran], [box, dragbar], [box, head], [box, pmain], [box, nav]]);
  (win.htaConsole = htaConsole).init();
})(window);

window.htaConsole.toggle();
