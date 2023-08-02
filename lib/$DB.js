/** 
 * @file WWJ Library HTA file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */
(function (win) {
  // TODO: dbRootURL can change by config.js 
  var
    $ = win.WWJ, dbRootURL = $.appURL + 'db\\',
    DB = function (dbID) {
      // TODO: when has not, newDB?  getDB only?  class ext from WWJ?
    };

  $.setORP(DB, {
    hasDB: function (dbID) {
      return $.hasFile(dbRootURL + dbID + '.json')
    },
    newDB: function (dbID) {
      var url = dbRootURL + dbID + '.json';
      !$.hasFile(url) && ($.writeFile({ url: url, val: '{}' }));
    },
    getDB: function (dbID) {
      $.DB.newDB(dbID);
      return JSON.parse($.readFile({ url: dbRootURL + dbID + '.json' }));
    },
    setDB: function (dbID, dbV) {
      $.writeFile({ url: dbRootURL + dbID + '.json', val: JSON.stringify(dbV) });
    },
    bkDB: function (dbID) {
      if ($.DB.hasDB(dbID)) {
        $.writeFile({ url: dbRootURL + 'zzzBK_' + dbID + '_' + $.getNow() + '.json', val: $.readFile({ url: dbRootURL + dbID + '.json' }) });
      } else {
        $.DB.newDB(dbID);
      }
    },
    getDBIDs: function () {
      $.log(dbRootURL);window.a = dbRootURL;
      return $.getAllFileMainNames(dbRootURL);
    },
    hasTB: function (dbID, tbID) {
      $.DB.newDB(dbID);
      return !!$.DB.getTB(dbID, tbID);
    },
    getTB: function (dbID, tbID) {
      return $.DB.getDB(dbID)[tbID];
    },
    getTBIDNMs: function (dbID) {
      var dbo = $.DB.getDB(dbID), r = [], tbID;
      for (tbID in dbo) { r.push([tbID, dbo[tbID].name]); }
      return r;
    },
    R: function (o) {
      var db = JSON.parse($.readFile({ url: dbRootURL + o.dbID + '.json' })),
        ret = o.tbID ? db[o.tbID] : db;
      //TODO:
      return ret;
    }
  });

  $.setORP($, { dbURL: dbRootURL, DB: DB });
})(window);
