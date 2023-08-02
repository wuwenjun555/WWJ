/** 
 * @file WWJ IO file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

(function (win) {
  
  // TODO:
  // [Ref] https://developer.mozilla.org/zh-CN/docs/Web/API/XMLHttpRequest
  // try download result: HTA is OK!!! 
  // Browser is OK ?
  // Browser json is use http? websocket? other?
  // 
  // try [http://127.0.0.1:5555/html/main.html/stopserver] isOK!!!
  ajax = XMLHttpRequest();
  ajax.open('GET', 'http://127.0.0.1:5555', true)
  ajax.onreadystatechange = function (e) {
    $.log(ajax.readyState);
    if (ajax.readyState === 4) {
      $.log(ajax.status)
    }
  }
  ajax.send()


})(window);
