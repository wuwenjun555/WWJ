$(() => {
  $$.btnWV.click(() => {
    $('.mainer').hide();
    $$.fsWV.show();
  });

  // TODO: common
  $$.wv.on('loadstart', function(e) { $.log('loadstart'); });
  $$.wv.on('loadcommit', function(e) { $.log('loadcommit'); });
  $$.wv.on('contentload', function(e) { $.log('contentload'); });
  $$.wv.on('loadstop', function(e) { $.log('loadstop'); });
  $$.wv.on('loadredirect', function(e) { $.log('loadredirect'); });
  $$.wv.on('loadabort', function(e) { $.log('loadabort'); });

  $$.wv.on('consolemessage', function(e) {
    $.log('Guest page logged a message: ' + e.message);
  });

  $$.wv[0].src = 'https://github.com/coreybutler/nvm-windows/releases';

  $$.btnTry.click(() => {
    // TODO: chrome webview 接口文档 https://www.cnblogs.com/bigben0123/p/13889277.html
    // $$.wv[0].executeScript({ code: "console.log(document.querySelector('#repo-content-turbo-frame section h2').innerText)" });
    // $$.wv[0].showDevTools(true);
    // 'https://github.com/coreybutler/nvm-windows/releases/download/1.1.11/nvm-noinstall.zip'

    const
      asvChar = ',\u0000',
      arrData = [
        'nvm', 
        'https://github.com/coreybutler/nvm-windows/releases', 
        '1.1.11', 
        'https://github.com/coreybutler/nvm-windows/releases/download/{ver}/nvm-noinstall.zip'
      ],
      strData = arrData.join(asvChar),
      url = 'db/test.asv',
      cbFn = function(err) {
        if(err) { $.log(err); }
      },
      fs = require('fs');
    fs.writeFile(url, strData, cbFn);
  });
});
