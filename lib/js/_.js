/** 
 * @file ES polyfill file.
 * @author wuwenjun555 <wuwenjun555@gmail.com>
 * @copyright wuwenjun555 2022
 * @license MIT
 * @version 0.0.1
 */

// polyfill - String
if (!String.prototype.repeat) {
  String.prototype.repeat = function (count) {
    var r = '', s = '' + this;
    count = +count;
    count != count && (count = 0);
    count = Math.floor(count);
    if (s.length == 0 || count == 0) { return r; }
    for (; ;) {
      (count & 1) == 1 && (r += s)
      count >>>= 1;
      if (count == 0) { break; }
      s += s;
    }
    return r;
  }
}

if (!String.prototype.padStart) {
  String.prototype.padStart = function (l, s) {
    l >> 0;
    s = String((typeof s != 'undefined' ? s : ' '));
    if (this.length > l) {
      return String(this);
    } else {
      l = l - this.length;
      l > s.length && (s += s.repeat(l / s.length));
      return s.slice(0, l) + String(this);
    }
  }
}

if (!String.prototype.padEnd) {
  String.prototype.padEnd = function (l, s) {
    l = l >> 0;
    s = String((typeof s !== 'undefined' ? s : ''));
    if (this.length > l) {
      return String(this);
    }
    else {
      l = l - this.length;
      if (l > s.length) {
        s += s.repeat(l / s.length);
      }
      return String(this) + s.slice(0, l);
    }
  };
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (s, p) {
    p = !p || p < 0 ? 0 : +p;
    return this.substring(p, p + s.length) === s;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (s, l) {
    (l === undefined || l > this.length) && (l = this.length);
    return this.substring(l - s.length, l) === s;
  };
}

if (!String.prototype.includes) {
  String.prototype.includes = function (s, t) {
    typeof t !== 'number' && (t = 0);
    return (t + s.length > this.length ? false : (this.indexOf(s, t) !== -1));
  };
}

// polyfill - Array
/** @see {@link https://github.com/kevlatus/polyfill-array-includes/blob/master/array-includes.js|polyfill-array-includes} */
if (!Array.prototype.includes) {
  Object.defineProperty(Array.prototype, 'includes', {
    value: function (searchElement, fromIndex) {
      if (this == null) throw new TypeError('"this" is null or not defined');
      var o = Object(this), len = o.length >>> 0;
      if (len === 0) return false;
      var n = fromIndex | 0, k = Math.max(n >= 0 ? n : len - Math.abs(n), 0);
      function sameValueZero(x, y) {
        return x === y || (typeof x === 'number' && typeof y === 'number' && isNaN(x) && isNaN(y));
      }
      while (k < len) {
        if (sameValueZero(o[k], searchElement)) return true;
        k++;
      }
      return false;
    }
  });
}
