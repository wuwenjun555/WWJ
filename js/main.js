$(function () {
  // $.log('page init main');
  $$.getCfg = function () {
    var cfg = $.toJSON($.readFile({ url: $.appURL + 'package.json' }));
    $$.webIP = cfg.wwj.swsIP;
    $$.webPort = cfg.wwj.swsPort;
    $$.appURL = 'http://' + $$.webIP + ':' + $$.webPort;
    return cfg;
  };

  $$.btnStartSWS.click(function () {
    var cmd = 'node ' + $.appURL + 'lib\\$HTTPServer.js'
    $$.btnStartSWS.dis();
    $$.lblSWSState.val('SWS is starting...');
    $.runCMD(cmd, 0);
    setTimeout(function () { $$.btnCheckSWSState.click() }, 900);
  });

  $$.btnStopSWS.click(function () {
    $$.btnStopSWS.dis();
    $$.btnOpenSWSHomePage.dis();
    $$.lblSWSState.val('SWS is stoping...');
    $$.ifrWatchSWSState.o[0].src = $$.appURL + '/stopserver';
    setTimeout(function () { $$.btnCheckSWSState.click() }, 900);
  });

  $$.btnOpenSWSHomePage.click(function () {
    $$.getCfg();
    $.openWeb($$.appURL);
  });

  $$.btnCheckSWSState.click(function () {
    var ifr = $$.ifrWatchSWSState.o[0];
    $$.getCfg();
    ifr.onload = function () {
      var txt = ifr.contentDocument.body.innerText, cfgTxt, isSWSOK;
      try {
        cfgTxt = $.toJSON(txt);
        isSWSOK = cfgTxt.wwj && cfgTxt.wwj.swsIP === $$.webIP;
      } catch (e) {
        isSWSOK = 0;
      } finally {
        msg = 'SWS is ' + (isSWSOK ? 'running' : 'stoped');
        $$.lblSWSState.val(msg);
        $$.btnStartSWS[isSWSOK ? 'dis' : 'ena']();
        $$.btnStopSWS[isSWSOK ? 'ena' : 'dis']();
        $$.btnOpenSWSHomePage[isSWSOK ? 'ena' : 'dis']();
      }
    };
    ifr.src = $$.appURL + '/package.json';
  });

  $$.btnBuildCfgSave.click(function () {
    // TODO:
  });

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

    if ($.isHTA) {
      $.bkFolder(dst);
      $.newFolder(dst);
      $.copyFolder(tpl, dst);
      $.copyFolder(src, dst);

      // 替换文件A.html中的title变量 TODO: 共通化？
      pjID = src.split('\\').pop();
      s = $.readFile({ url: aHtmlURL });
      s = s.replace('{0}', pjID);
      s = s.replace('{1}', cfg.wwj.swsIP);
      s = s.replace('{2}', cfg.wwj.swsPort);
      s = s.replace('{3}', pjID);
      s = s.replace('{4}', cfg.wwj.index);
      $.writeFile({ url: aHtmlURL, val: s });
    }

    // parse pj main.html to AST
    var
      aTagA = ['!---', 'a0', 'a1', 'a2', 'a3', 'btn', 'b', 'c', 'lbl', 'z'],
      cusA = [],  // cannot parse tags
      errA = [],  // parse err
      blankSA = [' ', '\n', '\r', '\t', '　'],  //blank char
      sta = 0,  //current status 
      staA = [],  //status stack
      ast = {
        subA: [], rnb: 1, cnb: 1, rne: -1, cne: -1,
        rnc: 0  //file line count
      },
      ctO = ast, //current object
      ptO = null, //parent object
      ptOA = [], //parent object stack
      rn = 1,  //row num 1~
      cn = 1,  //col num 1~
      i = 0,  //char index 0~
      c,  //current char
      ss,  //src str
      l,  //src str length
      sss,  //tmp str
      isSsOver, //is string has over
      tmp,  //tmp anything
      tmpB,  //tmp anything begin
      tmpE,  //tmp anything end
      isSCmt, //is super comment
      isSCmtEnd,
      isCmtEnd,
      isInStr,
      isInStr1,
      isInStr2,
      caO, //current attribute object
      vrFn;  //validRetFn return from 44:error or 77:custom
    // TODO: ds = '',  //dst str
    if ($.isHTA) {
      ss = $.readFile({ url: mainHtmlURL });
    } else {
      ss = $$.txaTestAstIn.val();
    }

    l = ss.length;
    for (s = ''; i < l; i++, cn++) {
      c = ss[i];

      //case 0:waitTagOrTextOrComment || case 1:tagInner
      if (sta < 2) {
        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          continue;
        }

        //case tagEnd
        if (c == '<') {
          if (ss[i + 1] == '/') {
            tmp = ctO.t + '>';
            if (ss.substr((i + 2), ctO.t.length + 1) == tmp) {
              i = i + ctO.t.length + 2;
              cn = cn + ctO.t.length + 2;
              ctO.rne = rn;
              ctO.cne = cn;
              ctO = ptO;
              ptO = ptOA.pop();
              // sta = staA.pop();
              continue;
            }
            throw Error('row: ' + ctO.rnb + ' col: ' + ctO.cnb + ' tag: [' + ctO.t + '] is not closed.'
              + ss.substr((i + 2), ctO.t.length + 1) + ', ' + tmp);
          }
        }

        staA.push(sta);
        ptO && (ptOA.push(ptO));  //bk ptO
        ptO = ctO;

        //case tag or comment
        if (c == '<') {
          sss = '';
          //case comment (comment:wwj or comment:html) TODO: fn001
          if (ss[i + 1] == '!' && ss[i + 2] == '-' && ss[i + 3] == '-') {
            isSCmt = (ss[i + 4] == '-') && ((ss[i + 5] + ss[i + 6]) != '->');
            ctO = { isCmt: 1, isSCmt: isSCmt, rnb: rn, cnb: cn };
            ptO.subA.push(ctO);
            i = i + (isSCmt ? 4 : 3);
            cn = cn + (isSCmt ? 4 : 3);
            sta = 88;  //goto 88:waitCommentEnd
            continue;
          }

          //case tag TODO: fn002
          ctO = { isTag: 1, rnb: rn, cnb: cn, attrA: [], subA: [] };
          ptO.subA.push(ctO);
          sta = 11;  //goto 11:waitTagName
          continue;
        }

        //case text
        ctO = { isTxt: 1, rnb: rn, cnb: cn };
        ptO.subA.push(ctO);
        sss = c;
        sta = 55;  //goto 55:waitTextEnd
        continue;
      }

      //case 88:waitCommentEnd
      if (sta == 88) {
        if (c == '-') {
          isSsOver = i + (isSCmt ? 4 : 3) > l;
          isSCmtEnd = (isSCmt && ss[i + 1] == '-' && ss[i + 2] == '-' && ss[i + 3] == '>');
          isCmtEnd = (!isSCmt && ss[i + 1] == '-' && ss[i + 2] == '>');
          //case CommentEnd
          if (isSsOver || isSCmtEnd || isCmtEnd) {
            i = i + (isSsOver ? (l - i - 1) : (isSCmt ? 3 : 2));
            cn = cn + (isSsOver ? (l - i - 1) : (isSCmt ? 3 : 2));
            ctO.sss = sss;
            ctO.rne = isSsOver ? (rn + ss.substr(i).split('\n').length - 1) : rn;
            ctO.cne = cn;
            ctO = ptO;
            ptO = ptOA.length > 0 ? ptOA.pop() : null;
            sta = staA.pop();
            continue;
          }
        }

        //case Comment not End
        (c == '\n') && (rn++) && (cn = 0);  //case '\n'
        sss = sss + c;
        continue;
      }

      //case 11:waitTagName
      if (sta == 11) {
        //case tag name end, goto tag attr - '<tag ' - ' '; '\n'; '\r'; '\t'; '　'; ... 
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          ctO.t = sss;
          sta = 20;  //goto 20:waitTagAttr
          continue;
        }

        //case tag name end, tag begin over, goto tag inner - '<tag>'
        if (c == '>') {
          ctO.t = sss;
          // ptO = ctO;
          sta = 1;  //goto 1: tagInner
          continue;
        }

        //case tag name end, tag end over, return bk state - '<tag/>'
        if (c == '/' && ss[i + 1] == '>') {
          i++;
          cn++;
          ctO.t = sss;
          ctO.rne = rn;
          ctO.cne = cn;
          ptO.subA.push(ctO);
          ctO = ptO;
          ptO = ptOA.pop();
          sta = staA.pop();
          continue;
        }

        //case tag name goon - '<ta'
        sss = sss + c;
        continue;
      }

      //case 55:waitTextEnd
      if (sta == 55) {
        //case tag or comment
        if (c == '<') {
          i--;
          cn--;
          ctO.sss = sss;  //over now text ctO
          ctO.rne = rn;  //over now text ctO
          ctO.cne = cn;  //over now text ctO
          ctO = ptO;
          ptO = ptOA.pop();
          sta = staA.pop();
          continue;

          // //case comment (comment:wwj or comment:html) TODO: fn001
          // if (ss[i + 1] == '!' && ss[i + 2] == '-' && ss[i + 3] == '-') {
          //   isSCmt = (ss[i + 4] == '-') && ((ss[i + 5] + ss[i + 6]) != '->');
          //   ctO = { isCmt: 1, isSCmt: isSCmt, rnb: rn, cnb: cn };
          //   i = i + (isSCmt ? 4 : 3);
          //   cn = cn + (isSCmt ? 4 : 3);
          //   sta = 88;  //goto 88:waitCommentEnd
          //   continue;
          // }

          // //case tag TODO: fn002
          // ctO = { isTag: 1, rnb: rn, cnb: cn, attrA: [], subA: [] };
          // sss = '';  //clear cache str
          // sta = 11;  //goto 11:waitTagName
          // continue;
        }

        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
        }

        //case now text is not end
        sss = sss + c;
        continue;
      }

      //20:waitTagAttr
      if (sta == 20) {
        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          continue;
        }

        //case '<tag ...>'
        if (c == '>') {
          sta = 1;  //goto 1:tagInner
          continue;
        }

        //case '<tag .../>'
        if (c == '/' && ss[i + 1] == '>') {
          i++;
          cn++;
          ctO.rne = rn;
          ctO.cne = cn;
          ctO = ptO;
          ptO = ptOA.pop();
          sta = staA.pop();
          continue;
        }

        //case '<tag a'
        caO = { rnb: rn, cnb: cn };
        ctO.attrA.push(caO);
        sss = c;
        sta = 21;  //goto 21:waitTagAttrName
        continue;
      }

      //21:waitTagAttrName
      if (sta == 21) {
        //case '='
        if (c == '=') {
          if (sss.length > 2) {
            tmpB = sss[0];
            tmpE = sss[sss.length - 1];
            (tmpB == '\'' || tmpB == '\"') && (tmpB == tmpE) && (sss = sss.substr(1, sss.length - 2));
          }
          caO.t = sss;
          sta = 23;  //goto 23:waitTagAttrVal
          continue;
        }

        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          if (sss.length > 2) {
            tmpB = sss[0];
            tmpE = sss[sss.length - 1];
            (tmpB == '\'' || tmpB == '\"') && (tmpB == tmpE) && (sss = sss.substr(1, sss.length - 2));
          }
          caO.t = sss;
          sta = 22;  //goto 22:waitTagAttrEq
          continue;
        }

        //case attr name goon - '<tag at'
        sss = sss + c;
        continue;
      }

      //22:waitTagAttrEq
      if (sta == 22) {
        //case '='
        if (c == '=') {
          sta = 23;  //goto 23:waitTagAttrVal
          continue;
        }

        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          continue;
        }

        //case '<tag "disabled">'
        if (c == '>') {
          caO.rne = rn;
          caO.cne = cn - 1;
          sta = 1;  //goto 1: tagInner
          continue;
        }

        //case '<tag "disabled"/>'
        if (c == '\/' && ss[i + 1] == '>') {
          caO.rne = rn;
          caO.cne = cn - 1;
          i++;
          cn++;
          ctO.rne = rn;
          ctO.cne = cn;
          ctO = ptO;
          ptO = ptOA.pop();
          sta = staA.pop();
          continue;
        }

        //case next attribute
        caO = { rnb: rn, cnb: cn };
        ctO.attrA.push(caO);
        sss = c;
        sta = 21;  //goto 21:waitTagAttrName
        continue;
      }

      //23:waitTagAttrVal
      if (sta == 23) {
        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          c == '\n' && (rn++) && (cn = 0);
          continue;
        }

        //case '<tag attr = v'
        sss = c;
        isInStr1 = (c == '\'');
        isInStr2 = (c == '\"');
        isInStr = (isInStr1 || isInStr2);
        sta = 24;  //goto 24:waitTagAttrValEnd
        continue;
      }

      //24:waitTagAttrValEnd
      if (sta == 24) {
        //case '<tag attr = "val"' or '<tag attr = 'val''
        if (isInStr) {
          if (isInStr1 && c == '\'' || isInStr2 && c == '\"') {
            isInStr = false;
          }
          sss = sss + c;
          continue;
        }

        //case ' '; '\n'; '\r'; '\t'; '　'; ...
        if (c.trim() == '') {
          if (sss.length > 2) {
            tmpB = sss[0];
            tmpE = sss[sss.length - 1];
            (tmpB == '\'' || tmpB == '\"') && (tmpB == tmpE) && (sss = sss.substr(1, sss.length - 2));
          }
          caO.v = sss;
          caO.rne = rn;
          caO.cne = cn - 1;
          c == '\n' && (rn++) && (cn = 0);
          sta = 20;  //goto 20:waitTagAttr
          continue;
        }

        //case '<tag attr = val>'
        if (c == '>') {
          if (sss.length > 2) {
            tmpB = sss[0];
            tmpE = sss[sss.length - 1];
            (tmpB == '\'' || tmpB == '\"') && (tmpB == tmpE) && (sss = sss.substr(1, sss.length - 2));
          }
          caO.v = sss;
          caO.rne = rn;
          caO.cne = cn - 1;
          // ptOA.push(ptO);
          // ptO = ctO;
          sta = 1;  //goto 1: tagInner
          continue;
        }

        //case '<tag attr = val/>'
        if (c == '\/' && ss[i + 1] == '>') {
          if (sss.length > 2) {
            tmpB = sss[0];
            tmpE = sss[sss.length - 1];
            (tmpB == '\'' || tmpB == '\"') && (tmpB == tmpE) && (sss = sss.substr(1, sss.length - 2));
          }
          caO.v = sss;
          caO.rne = rn;
          caO.cne = cn - 1;
          i++;
          cn++;
          ctO.rne = rn;
          ctO.cne = cn;
          ctO = ptO;
          ptO = ptOA.pop();
          sta = staA.pop();
          continue;
        }

        //case '<tag attr = va'
        sss = sss + c;
        continue;
      }
    }

    ast.rne = rn;
    ast.cne = cn - 1;

    if (ctO.isTxt) {
      ctO.sss = sss;  //over now text ctO
      ctO.rne = rn;  //over now text ctO
      ctO.cne = cn - 1;  //over now text ctO
      ptO.subA.push(ctO);  //add now text to ptO
    }

    $$.txaTestAstOut.val($.toJSONS(ast));

    if (staA.length > 0) {
      //TODO: check all stack has over or not
      $.err('AST check all stack has over or not TODO: ...');
    }

    // TODO: ???
    // TODO: (new DOMParser()).parseFromString('<o>'+s+'</o>', 'text/xml')
  });

  $$.selBuildSrc.change(function () {
    var
      pjNM = $$.selBuildSrc.val().split('\\').pop(),
      dstB = $.appURL + 'www\\' + pjNM,
      dstD = ($.hasFolder('D:\\') ? 'D' : 'C') + ':\\ASoftRun\\A\\' + pjNM;
    $$.txtBuildDst.val(dstB);
    $$.txtDeployDst.val(dstD);
  });

  $$.btnSWS.click(function () {
    $('.mainer').hide();
    $$.fdsSWS.show();
    $$.btnCheckSWSState.click();
  });

  $$.btnBuilder.click(function () {
    $('.mainer').hide();
    $$.fdsBuilder.show();
    /* TODO: DEL
    var s = $.readFile({ url: $.appURL + 'cfg\builder.json' })
    $.log(s); */
    var a = [];
    $.eachFolder($.appURL + '\\pj', function (folder, i) {
      a.push('<option value="' + folder.Path + '">' + folder.Name + ' ( ' + folder.Path + ' ) </option>');
    }, 0, 1);
    $$.selBuildSrc.html(a.join(''));
    $$.selBuildSrc.change();
  }).click();

  $$.btnUIEditor.click(function () {
    $('.mainer').hide();
    $$.fdsUIE.show();
  });

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
      over: function (rV, tO, gO) { },
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

  $$.btnTryNVM.click(function () {
    $('.mainer').hide();
    $$.nvm.show();
  });
});