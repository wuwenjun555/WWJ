$(function () {
  $$.btnOpenGridEditor.click(function () {
    $('.toolPart').hide();
    $$.gE.show();
  });

  $$.btnOpenDBEditor.click(function () {
    $('.toolPart').hide();
    $$.dbE.show();
  });

  $$.btnOpenExcelEditor.click(function () {
    $('.toolPart').hide();
    $$.xlsE.show();
  });

  $$.btnOpenWordEditor.click(function () {
    $('.toolPart').hide();
    $$.docE.show();
  });

  $$.btnOpenComIframe.click(function () {
    $('.toolPart').hide();
    $$.fsComIframe.show();
  });


  $$.btnTryTQ.click(function () {
    $.TQ({
      opt: { url: 'https://www.test.org', uID: 'testUserID', uPW: 'testPassword' },
      state: function (s, rV, tO, gO) { $.log(s); },
      over: function (rV, tO, gO) {  },
      tq: [
        {
          state: "1.open ie begin",
          overState: "1.open ie end",
          do: function (rV, tO, gO) {
            //TODO: do something with file
          },
          goon: function (rV, tO, gO) { window.ie=gO.ie; $.log(gO.ie.busy); return !gO.ie.busy; }
        },
        {
          state: "2.login vpn begin",
          overState: "2.login vpn end",
          do: function (rV, tO, gO) {
            $.log(gO.ie);
            window.ie=gO.ie;
            gO.ie.visible = 1;
            $.log(gO.ie.window);
            try{
            $.log(gO.ie.document);
            $.log(gO.ie.document.getElementById);
            } catch(e){
              $.log(e.message);
            }

            var ieDoc = gO.ie.document;
            //gO.ie.visible = 1;
            if (!ieDoc.getElementById('logout')) {
              ieDoc.getElementById('default_focus').value = gO.uID;
              ieDoc.getElementsByName("pwd")[0].value = gO.uPW;
              ieDoc.getElementsByName("submitbutton")[0].click();
            }
          },
          goon: function (rV, tO, gO) { return !gO.ie.busy && gO.ie.document.getElementById('logout'); }
        },
        {
          state: "3.open mail url begin",
          overState: "3.open mail url end",
          do: function (rV, tO, gO) { $$.ifrCom[0].src = 'https://172.16.25.65/owa/'; },
          goon: function (rV, tO, gO) { return $$.ifrCom[0].contentDocument.getElementById('username'); }
        },
        {
          state: "4.mail login begin",
          overState: "4.mail login end",
          do: function (rV, tO, gO) {
            var ifrDoc = $$.ifrCom[0].contentDocument;
            ifrDoc.getElementById('username').value = gC.uID;
            ifrDoc.getElementById('password').value = gC.uPW;
            ifrDoc.querySelector('.signinbutton').click();
          },
          goon: function (rV, tO, gO) { return $$.ifrCom[0].contentDocument.getElementById('preloadDiv'); }
        }
      ]
    })();
  });

  $$.btnTryStopTQ.click($.TQ.stop);
});