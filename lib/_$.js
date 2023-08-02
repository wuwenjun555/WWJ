/** 
 * @file ES addon file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

// polyfill addon - Array
if (!Array.prototype.clear) {
  Array.prototype.clear = function () { this.length = 0; return this; };
}
