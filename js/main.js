$(function () {
  $.log('page init main');
  $$.btnOpenGridEditor.click(function () {
    $('.mainer').hide();
    $$.gE.show();
  });

  $$.btnOpenDBEditor.click(function () {
    $('.mainer').hide();
    $$.dbE.show();
  });

  $$.btnOpenExcelEditor.click(function () {
    $('.mainer').hide();
    $$.xlsE.show();
  });

  $$.btnOpenWordEditor.click(function () {
    $('.mainer').hide();
    $$.docE.show();
  });

  $$.btnOpenComIframe.click(function () {
    $('.mainer').hide();
    $$.fsComIframe.show();
  });


  $$.btnTryTQ.click(function () {
    $.TQ({
      opt: { url: 'https://www.test.org', uID: 'testUserID', uPW: 'testPassword' },
      state: function (s, rV, tO, gO) { $.log(s); },
      over: function (rV, tO, gO) {  },
      tq: [
        {
          state: "1.open url begin",
          overState: "2.open url end",
          do: function (rV, tO, gO) { //$$.ifrCom[0].onerror = function (e) { console.log('aa:' + e); }; $$.ifrCom[0].src = 'https://code.visualstudio.com/Download'; 
            var ie = new ActiveXObject('InternetExplorer.Application');
            gO.ie = ie;
            ie.Visible = true;
            ie.Navigate('https://code.visualstudio.com/Download');
          },
          goon: function (rV, tO, gO) { //var isGoon = $$.ifrCom[0].contentDocument.getElementById('download-alt-winzip'); $.log(isGoon); return isGoon; 
            $.log('' + gO.ie.busy + '|' + gO.ie.readyState)
            return !gO.ie.busy && gO.ie.readyState == 4;
          }
        },
        {
          state: "3. begin",
          overState: "4. end",
          do: function (rV, tO, gO) {
            // var
            //   ifrDoc = $$.ifrCom[0].contentDocument,
            //   btn = ifrDoc.getElementById('download-alt-winzip');

            // $.log(btn.id);
            // $.log(btn.name);
            // $.log(btn.value);
            $.log(gO.ie.window);
            //$.log(gO.ie.document.getElementById('download-alt-winzip'));
            //btn.click();
            $.log('est over');
            window.ie = gO.ie;

            var ie = gO.ie;
            ie.resizable = 0; // read true
            ie.toolbar = 0;  // read 1
            ie.top = 200;
            ie.left = 170;
            ie.height = 500;
            ie.width = 1000;
            ie.statusBar = 0; // read true
            ie.addressbar = 0; // read true
            ie.document.title;
            ie.quit();
          },
          goon: function (rV, tO, gO) { return $$.ifrCom[0].contentDocument.getElementById('preloadDiv'); }
        }
      ]
    })();
  });

  $$.btnTryStopTQ.click($.TQ.stop);

  $$.btnTryNVM.click(function(){
    $('.mainer').hide();
    $$.nvm.show();
  });
});