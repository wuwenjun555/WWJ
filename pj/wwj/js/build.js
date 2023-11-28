/* textStatus = success | error
  fnGet('getCfg', function (retJSON, textStatus, jqXHR) { $$$.cfg = retJSON; });
  fnGet('getCfg', function (retJSON) { $$$.cfg = retJSON; });
*/
(function (win) {
  //page init
  $(function () {
    // init var
    var
      fnAjaxComFail = function (jqXHR, textStatus, errMsg) { console.log(errMsg); },  //textStatus = error
      fnAjaxComAlways = function (deferred, textStatus, jqXHR) { console.log('Ajax final: ' + textStatus); },
      fnGet = function (act, ok, ng, ov) { $.get(act).done(ok).fail(ng || fnAjaxComFail).always(ov || fnAjaxComAlways); },
      $$$ = {};
    win.$$$ = $$$;

    // init base ajax
    fnGet('getAppURL', function (retJSON) { $.appURL = retJSON.appURL; });
    fnGet('getCfg', function (retJSON) { $$$.cfg = retJSON; });

    // init web fn instead of HTA fn
    $$.getCfg = () => { return $$$.cfg; };

    //init event bind
    $$.btnBuild.click(function () {
      var
        C_PAGE_TOP = '<!DOCTYPE html>\n<html>\n\n<head>\n  <meta charset="utf-8">\n  <title>{0}</title>',
        C_CSS = '  <link rel="stylesheet" href="../{0}.css" />',
        C_PAGE_BODY = '</head>\n\n<body>',
        C_JS = '<script src="../{0}.js"></script>',
        C_PAGE_END = '\n</body>\n\n</html>',
        tpl = $.appURL + '\\pj\\tpl',
        src = $$.selBuildSrc.val(),
        dst = $$.txtBuildDst.val(),
        aHtmlURL = dst + '\\A.html',
        mainHtmlURL = dst + '\\html\\main.html',
        cfg = $$.getCfg(),
        pjID, s;

      //TODO: 
    });

    $$.selBuildSrc.change(function () {
      var
        pjID = $$.selBuildSrc.val().split('\\').pop(),
        a = $$.txtBuildDst.val().split('\\');
      a.pop();
      a.push(pjID);
      $$.txtBuildDst.val(a.join('\\'));
      // TODO: $$.txtDeployDst.val(dstD);
    });

    //init biz ajax
    fnGet('getAllPJPath', function (retJSON, textStatus, jqXHR) {  //textStatus = success
      var a = [];
      $.each(retJSON.pjIDs, function (i, pjID) {
        var pjVal = retJSON.pjPath + pjID;
        a.push('<option value="' + pjVal + '">' + pjID + ' ( ' + pjVal + ' ) </option>');
      });
      $$.selBuildSrc.html(a.join(''));
      $$.txtBuildDst.val(retJSON.dstPath + '???');
      $$.selBuildSrc.change();
    });
  });

})(window);