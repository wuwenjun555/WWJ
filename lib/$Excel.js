/** 
 * @file WWJ Library Excel file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

(function (win) {
  var
    $ = win.WWJ, $$ = {},
    CONST = {
      WB: {
        OPEN: {
          UPDATELINKS: { YES: 3, NO: 0 },
          READONLY: { YES: 1, NO: 0 },
          IGNORE_READONLY_RECOMMENDED: 1,
          FORMAT: null, PASSWORD: null, WRITE_RES_PASSWORD: null
        },
        CLOSE: { SAVE: 1, NO_SAVE: 0 }
      },
      WS: { VISIBLE: { SHOW: -1, HIDE: 0 } }
    },
    clearEA = function (id, isSave, wb, ea) {
      var p = isSave || CONST.WB.CLOSE.NO_SAVE, o = $$[id] || {}, wb = o.wb, ea = o.ea;
      try {
        wb && (wb.Close(p));
      } catch (e) {
        $.log('Fn[clearEA][WB]: ' + e);
        p = CONST.WB.CLOSE.NO_SAVE;
      } finally {
        ea.DisplayAlerts = p;
        try {
          ea.Quit();
        } catch (e) {
          $.log('Fn[clearEA][EA]: ' + e);
        } finally {
          ea = wb = null;
          o.wb && (o.wb = null);
          o.ea && (o.ea = null);
          $$[id] && ($$[id].o = null);
          delete $$.id;
        }
      }
    },
    A0Excel = function (o) {
      $.A0.call(this);
      var ea = new ActiveXObject('Excel.Application'), id = this.$ID, p = {
        url: o.url, updatelinks: o.updatelinks || CONST.WB.OPEN.UPDATELINKS.YES,
        readonly: o.readonly || CONST.WB.OPEN.READONLY.NO,
        format: o.format || CONST.WB.OPEN.FORMAT,
        password: o.password || CONST.WB.OPEN.PASSWORD,
        writeResPassword: o.writeResPassword || CONST.WB.OPEN.WRITE_RES_PASSWORD,
        ignoreReadonlyRecommended: o.format || CONST.WB.OPEN.IGNORE_READONLY_RECOMMENDED
      }, wb;
      try {
        wb = ea.Workbooks.Open(p.url, p.updatelinks, p.readonly, p.format, p.password, p.writeResPassword, p.ignoreReadonlyRecommended);
      } catch (e) {
        try { ea.quit(); } finally { ea = wb = null; }
        throw e;
      }
      $$[id] = { o: this, ea: ea, wb: wb };
      //TODO: DEL
      //$.setORP(this, { $EA: ea, $WB: wb });
    };

  $.ext($.A0, A0Excel);
  $.setORP(A0Excel.prototype, {
    $TN: "A0Excel",
    eachSheet: function (fn) {
      //TODO:
    },
    sheetNames: function () {
      for (var sheets = this.sheets(), len = sheets.Count + 1, r = [], i = 1; i < len; i++) {
        // DEBUG: console.log(sheets(i).Name);
        r.push(sheets(i).Name);
      }
      return r;
    },
    sheets: function () { return $$[this.$ID].wb.sheets; },
    save: function () { $$[this.$ID].wb.Save(); return this; },
    delSheet: function (o) {
      var ea = $$[this.$ID].ea;
      ea.DisplayAlerts = false;
      this.sheets()(o).Delete();
      ea.DisplayAlerts = true;
      return this;
    },
    close: function (isSave) { clearEA(this.$ID, isSave); }
  });


  // excel url selector?
  $({
    WWJ: $,
    is: function (o) { // TODO: 'xlsm','xls' is ok?  other file type?
      return o && o.url && $.has(['xlsx', 'xlsm', 'xls'], $.getExtName(o.url));
    },
    do: function (o) {
      // TODO: check the same file name like open excel?
      return new A0Excel(o);
    }
  });


  $.setORP(A0Excel, {
    /**
     * @demo
     * $.A0Excel.closeAll();
     */
    closeAll: function (isSave) {
      var p = isSave || CONST.WB.CLOSE.NO_SAVE;
      $.each($$, function (id) { clearEA(id, p); });
    }
  });
  $.setORP($, { A0Excel: A0Excel });

  $(function () { $(win).on('beforeunload', function () { quitExcel(); }); });
})(window);

/* TODO:
@demo
var
  ex = $.Excel({
  });

EA=Excel.Application
WB=WORKBOOK
*/
