/** 
 * @file WWJ Library HTA file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */
(function (win) {
  var $ = win.WWJ, a = win.location.href.split('?')[1].split('&'), fso, afs, shell, ws;

  $.setORP($, {
    isHTA: a[0].split('=')[1],
    appURL: decodeURIComponent(a[1].split('=')[1]),
    // TODO: getFSO -> FSO like DB,Excel etc.
    getFSO: function () { return fso = fso || new ActiveXObject('Scripting.FileSystemObject'); },
    // TODO: getAFS -> ADS like DB,Excel etc.
    getAFS: function (o) {
      afs = afs || new ActiveXObject('ADODB.Stream');
      o = o || {};
      afs.Type = o.type || 2;  //adTypeBinary=1, adTypetext=2
      afs.Charset = o.charset || 'UTF-8';  //default:Unicode,Shift_JIS,EUC
      afs.LineSeparator = o.lineEndChar || -1;  //adCR=13,adCRLF=-1,adLF=10
      return afs;
    },
    // TODO: getShell -> Shell like DB,Excel etc.
    getShell: function () { return shell = shell || new ActiveXObject('Shell.Application'); },
    getWS: function() { return ws = ws || new ActiveXObject('WScript.Shell'); },
    // TODO: getNet -> Net like DB,Excel etc.
    getNet: function () { return net = net || new ActiveXObject('WScript.Network'); },

    // advance use
    eachLine: function (fn, filePath, fileFolder, fileName, Charset) {  //[filePath],[fileFolder, fileName]
      var afs = getAFS({ Charset: Charset }), //TODO:DEL: getAFS({ lineEndChar: o.lineEndChar || 10 }),
        filePath = filePath || (fileFolder + '\\' + fileName),
        fileInfo = { path: filePath, key: filePath.replace(/\\/g, '__') }, i, arr, s;
      if (!fileName) {
        arr = filePath.split('\\');
        fileName = arr.pop();
        fileFolder = arr.join('\\');
      }
      fileInfo.name = fileName;
      fileInfo.folder = fileFolder;
      fileInfo.ext = $.getExtName(fileName);
      try {
        afs.Open();
        afs.LoadFromFile(filePath);
        //TODO: for (i = 0;   ?????????  !afs.EOS; i++) {
        for (i = 1; !afs.EOS; i++) {
          s = afs.ReadText(-2)
          fn(s, i, fileInfo);
        }
      } catch (e) {
        console.log(e.Message);
        console.log(i + ':' + s);
        throw e;
      } finally { afs.Close(); }
    },

    // file
    // TODO: use TQ rewrite
    eachFile: function (url, fn, cpFn, cpLen, cbFn) {
      var i = 0, arr, allLen, pLen, nextLen, pFn;
      if (!cpFn) {
        for (arr = [$.getFolder(url)]; i < arr.length; i++) {
          $.eachFSO(arr[i].Files, fn);
          $.eachFSO(arr[i].SubFolders, function (subFd) { arr.push(subFd); });
        }
        return;
      }
      cpFn(-1);
      setTimeout(function () {
        pLen = pLen || 100;
        arr = $.getAllFile(url);
        allLen = arr.length;
        nextLen = pLen < allLen ? pLen : allLen;
        pFn = function () {
          for (; i < nextLen; i++) { fn(arr[i], i); }
          if (nextLen < allLen) {
            nextLen = nextLen + pLen;
            nextLen = nextLen < allLen ? nextLen : allLen;
            cpFn(i, allLen, parseInt(i * 100 / allLen, 10) + '%');
            setTimeout(pFn, 50);
          } else {
            cpFn(allLen, allLen, '100%');
            if ($.isFn(cbFn)) { setTimeout(cbFn, 50); }
          }
        };
        cpFn(0, allLen, '0%');
        setTimeout(pFn, 50);
      }, 50);
    },
    getFile: function (url) {  //Attributes,DateCreated,DateLastAccessed,DateLastModified,Drive,Name,ParentFolder,Path,ShortName,ShortPath,Size,Type
      return $.getFSO().GetFile(url);
    },
    getAllFile: function (o) {
      var fds = $.getAllFolders(o), arr = [], i = 0;
      for (; i < fds.length; i++) {
        $.eachFSO(fds[i].Files, function (f) { arr.push(f); });
      }
      return arr;
    },
    hasFile: function (url) {
      return $.getFSO().FileExists(url);
    },
    copyFile: function (src, dst, overwrite) {
      $.isNope(overwrite) && (overwrite = true);
      return $.getFSO().CopyFile(src, dst, overwrite);
    },
    delFile: function (url, force) {
      $.isNope(force) && (force = true);
      return $.getFSO().DeleteFile(url, force);
    },
    readFile: function (o) {
      var ret; getAFS();
      try {
        afs.Open();
        afs.LoadFromFile(o.url);
        ret = afs.ReadText(-1);
      } finally { afs.Close(); }
      return ret;
    },
    writeFile: function (o) {
      var ret; getAFS();
      try {
        afs.Open();
        afs.WriteText(o.val, 1);
        ret = afs.SaveToFile(o.url, 2);
      } finally { afs.Close(); }
      return ret;
    },
    getMainName: function (o) {
      var arr = o.split('.'), len = arr.length;
      return len > 1 ? o.substr(0, o.length - arr[len - 1].length - 1) : o;
    },
    getAllFileMainNames: function (o) {
      var ret = [];
      $.eachFile(o, function (f) { ret.push($.getMainName(f.Name)); });
      return ret;
    },
    /** 
     * @fucntion getExtName
     * @param {string} fNM - file name
     * @return {string} - file extention name
     */
    getExtName: function (fNM) {
      var a = fNM.split('.');
      return (a.length > 1 ? a.pop() : fNM).toLowerCase();
    },

    // folder
    // TODO: use TQ rewrite
    eachFolder: function (url, fn) {
      var arr = [$.getFolder(url)], i;
      for (i = 0; i < arr.length; i++) {
        $.eachFSO(arr[i].SubFolders, function (subFd) { arr.push(subFd); });
        fn(arr[i]);
      }
    },
    getFolder: function (o) {
      var actPath = $.fmtURL(o), folder = $.getFSO().GetFolder(actPath);
      if (!folder) { throw new Error('The folder [' + o + '] is not exist!'); }
      return folder;
    },
    getAllFolders: function (o) {
      var arr = [$.getFolder(o)], i = 0;
      for (; i < arr.length; i++) {
        $.eachFSO(arr[i].SubFolders, function (subFd) { arr.push(subFd); });
      }
      return arr;
    },
    hasFolder: function (url) {
      return $.getFSO().FolderExists(url);
    },
    newFolder: function (url) {
      return $.getFSO().CreateFolder(url);
    },
    copyFolder: function (src, dst, overwrite) {
      $.isNope(overwrite) && (overwrite = true);
      return $.getFSO().CopyFolder(src, dst, overwrite);
    },
    delFolder: function (path, force) {
      $.isNope(force) && (force = true);
      $.clearFolder(path, force);
      return $.getFSO().DeleteFolder(path, force);
    },
    clearFolder: function (path, force) {
      $.isNope(force) && (force = true);
      $.eachFile(path, function (file, i) {
        $.delFile(file.Path, force);
      }, 'lblProcess');
      $.eachFolder(path, function (folder, i) {
        $.delFolder(folder.Path, force);
      });
    },
    selectFolder: function (o) {
      var path, folder = getShell().BrowseForFolder(0, 'Please select a folder', 0, o || '');
      if (!folder) { $.log('Selected folder is not exist!'); return; }
      path = folder.ParentFolder.ParseName(folder.Title).Path;
      return $.getFolder(path);
    },


    /** 
     * @fucntion each
     * @param {FileSystemObject} o - loop target
     * @param {function} fn - loop function
     */
    eachFSO: function (o, fn) {
      for (var i = -1, its = new Enumerator(o); !its.atEnd(); its.moveNext()) { fn(its.item(), i++); }
    },

    // TODO:
    fmtURL: function (o) { return o.replace(/\\/g, '/'); },

    // TODO:
    getNetUserInfo: function () { $.getNet(); return net.ComputerName + ':' + net.UserDomain + ':' + net.UserName; }
  });

  if ($.debug) {
    $.setORP($, {
      getShell: getShell,
      getWS:getWS
    });
  }

})(window);