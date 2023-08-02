# WWJ

## 介绍

- 偶尔用古老且简单的技术做些简单的事情。

## 软件架构

- Windows, HTA, HTML, JavaScript, CSS, ActiveX

## 安装教程

- 下载下来就能用

## 使用说明

- ### $ (Core)

  - list
    - [$ ( =WWJ )](#)
    - [$.isVoid](#)
    - [$.isNull](#)
    - [$.isNope](#)
    - [$.isBool](#)
    - [$.isStr](#)
    - [$.isNum](#)
    - [$.isFn](#)
    - [$.isObj](#)
    - [$.isArr](#)
    - [$.toArr](#)
    - [$.toJSON](#)
    - [$.toJSONS](#)
    - [$.padS](#)
    - [$.padE](#)
    - [$.pad0](#)
    - [$.now](#)
    - [$.noop](#)
    - [$.log](#)
    - [$.has](#)
    - [$.min](#)
    - [$.max](#)
    - [$.each](#)
    - [$.setORP (ORP = Object Readonly Property)](#)
    - [$.ext](#)
    - [$.A0](#)
    - [$.TQ](#)
    - [in]retrue = function () { return true }
    - [in]console = win.console
    ---

  - detail

    - #### $ ( =WWJ )

          ```js
          $ === WWJ
          > true
          ```

    - #### $.isVoid

          ```js
          wwj = undefined
          $.isVoid(wwj)
          > true
          ```

    - #### $.isNull

          ```js
          wwj = null
          $.isNull(wwj)
          > true
          ```

    - #### $.isNope

          ```js
          wwj = undefined
          $.isNope(wwj)
          > true

          wwj = null
          $.isNope(wwj)
          > true
          ```

    - #### $.isBool

          ```js
          wwj = true
          $.isBool(wwj)
          > true

          wwj = false
          $.isBool(wwj)
          > true
          ```

    - #### $.isStr

          ```js
          $.isStr('')
          > true
          ```

    - #### $.isNum

          ```js
          $.isNum(3.1415)
          > true
          ```

    - #### $.isFn

          ```js
          $.isFn(function(){})
          > true

          $.isFn(new Function())
          > true
          ```

    - #### $.isObj

          ```js
          $.isObj({id:"WWJ"})
          > true

          $.isObj(new Object("WWJ"))
          > true

          $.isObj(['WWJ'])
          > true

          $.isObj(function(){ var id = "WWJ" })
          > false
          ```

    - #### $.isArr

          ```js
          $.isArr(['WWJ'])
          > true
          ```

    - #### $.toArr

          ```js
          $.toArr('WWJ')
          > ['WWJ']
          ```

    - #### $.toJSON

          ```js
          $.toJSON('{"id":"WWJ"}')
          > {"id":"WWJ"}
          ```

    - #### $.toJSONS

          ```js
          $.toJSONS({"id":"WWJ"})
          > '{"id":"WWJ"}'

          JSON.stringify({w: 1, w2:2, j:3}, ['w', 'j']);
          > '{"w::1,"j":3}'

          JSON.stringify({ w:1, w2: { j: 2 } }, null, " ");
          > '{ "w": 1, "w2": { "j": 2 } }'

          JSON.stringify(true)
          > 'true'

          JSON.stringify('WWJ');
          > '"WWJ"'

          JSON.stringify([1, 'false', false, 'WWJ']);
          > [1,"false",false,"WWJ"]

          JSON.stringify({w: undefined, w2: Object, j: Symbol("")});
          > throw Error("Symbol未定义")

          JSON.stringify([undefined, Object, Symbol("")]);
          > throw Error("Symbol未定义")

          JSON.stringify({[Symbol("WWJ")]: "WWJ"});
          > throw Error("缺少标识符，字符串或数字")

          JSON.stringify({[Symbol.for("WWJ")]: "WWJ"}, [Symbol.for("WWJ")]);
          > throw Error("缺少标识符，字符串或数字")

          JSON.stringify({[Symbol.for("WWJ")]: "WWJ"}, function (k, v) { if (typeof k === "symbol"){ return "a symbol";}});
          > throw Error("缺少标识符，字符串或数字")
          
          JSON.stringify(Object.create(null, { w: { value: 'w', enumerable: false }, j: { value: 'wwj', enumerable: true }}));
          > '{"j":"wwj"}'
          ```

    - #### $.padS

          ```js
          $.padS('j', 3, 'w')
          > 'wwj'
          ```

    - #### $.padE

          ```js
          $.padE('ww', 3, 'j')
          > 'wwj'
          ```

    - #### $.pad0

          ```js
          $.pad0('wwj', 5)
          > '00wwj'
          ```

    - #### $.now

          ```js
          $.now()
          > '20230718223057062'
          ```

    - #### $.noop

          ```js
          $.noop()
          > undefined
          ```

    - #### $.log

          ```js
          $.log('WWJ')
          > 'WWJ'

          $.log({w: "w", w2: "w2", j:"j"})
          > '{w: "w", w2: "w2", j:"j"}'

          $.log(1234)
          > '1234'

          $.log(012)
          > '10'
          ```

    - #### $.has

          ```js
          $.has(['W', 'W', 'J'], 'J')
          > true

          $.has('WWJ', 'WJ')
          > true
          ```

    - #### $.min

          ```js
          $.min(1, 2, 3)
          > 1
          ```

    - #### $.max

          ```js
          $.max(1, 2, 3)
          > 3
          ```

    - #### $.each

          ```js
          $.each({w:1,w2:2,j:3}, function(i, it){ $.log(i + ': ' + it) })
          > 'w: 1'
          > 'w2: 2'
          > 'j: 3'
          
          $.each([1, 2, 3], function(i, it){ $.log(i + ': ' + it) })
          > '0: 1'
          > '1: 2'
          > '2: 3'

          $.each([1, 2, 3, 4, 5], function(i, it){ $.log(i + ': ' + it) }, 2)
          > '0: 1'
          > '1: 2'

          $.each([1, 2, 3, 4, 5], function(i, it){ $.log(i + ': ' + it) }, 3, 1)
          > '1: 2'
          > '2: 3'
          > '3: 4'
          ```

    - #### $.setORP (ORP = Object Readonly Property)

          为一个对象设置只读属性。
          ```js
          $.setORP($, 'wwj', 'wwj')
          $.wwj
          > 'wwj'
          $.wwj = '000'
          $.wwj
          > 'wwj'
          ```

    - #### $.ext

          对象继承。
          ```js
          $.ext($.A0, A0UI);
          $.ext($.A0, A0Excel);
          ```

    - #### $.A0

          基础类对象，建议衍生类对象继承该对象。
          ```js
          new $.A0()
          > {"$ID":"A0_1"}
          new $.A0()
          > {"$ID":"A0_2"}

          // 继承例
          var A0UI = function (o) { $.A0.call(this); };
          $.ext($.A0, A0UI);
          $.setORP(A0UI.prototype, {
            $TN: "A0UI",
            click: function (fn) { return this.on('click', fn); },
            ......
          });
          ... // 参见 $UI 说明 ...
          $(function () {
            $.log('page init $UI');
            ......
          });
          ```

    - #### $.TQ (Task Queue)

          ```js
          // 任务执行队列。          
          // 主要两步：1.设置TQ参数；2.启动执行TQ
          $.TQ({}); $.TQ.start();
          $.TQ({})() // 设置TQ参数后立即执行

          // 可设置主要参数有：tq，sleep，opt, state，over
          $.TQ({
            tq: [ // 可以设置任务函数数组，或单个任务函数
              function(r, o, go){ $.log('tq' + go.tqCount++) },
              function(r, o, go){ $.log('tq' + go.tqCount++) }
            ],
            sleep: 600, // 每个任务执行的间隔时间，单位：毫秒
            opt: { tqCount: 0 },  // TQ全局变量保存对象。在TQ任意函数中均可使用。
            state: function(s, r, o, go){ $.log('state' + go.tqCount) }, // 每个任务执行前执行，常用于出力执行进度信息。
            over: function(r, o, go){ $.log('over' + go.tqCount) } // 每个任务执行后执行，常用于出力执行进度信息。
          })();
          // $.TQ({tq: [function(r, o, go){ $.log('tq' + go.tqCount++) },function(r, o, go){ $.log('tq' + go.tqCount++) }],sleep: 600,opt: { tqCount: 0 },state: function(s, r, o, go){ $.log('state' + go.tqCount) },over: function(r, o, go){ $.log('over' + go.tqCount) }})();
          // 执行结果控制台出力：
          state0
          tq0
          over1
          state1
          tq1
          over2
          ```

---

- ### $ (HTA)

---

- ### JavaScript extension

  - list
    - [String.prototype.repeat](#)
    - [String.prototype.padStart](#)
    - [String.prototype.padEnd](#)
    - [String.prototype.startsWith](#)
    - [String.prototype.endsWith](#)
    - [String.prototype.includes](#)
    - [Array.prototype.includes](#)
    - [Array.prototype.clear](#)

    ---

  - detail

    - #### String.prototype.repeat

          ```js
          'ab'.repeat(3)
          > 'ababab'

          'ab'.repeat(0)
          > ''

          'ab'.repeat(-1)
          > [app auto close]
          ```

    - #### String.prototype.padStart

          ```js
          '1'.padStart(3, '0')
          > '001'

          '12'.padStart(3, '0')
          > '012'

          '1'.padStart(0, '0')
          > '1'

          '1'.padStart(-1, '0')
          > '1'
          ```

    - #### String.prototype.padEnd

          ```js
          '1'.padEnd(3, '0')
          > '100'

          '12'.padEnd(3, '0')
          > '120'

          '1'.padEnd(0, '0')
          > '1'

          '1'.padEnd(-1, '0')
          > '1'
          ```

    - #### String.prototype.startsWith

          ```js
          'wwj'.startsWith('ww')
          > true

          'wwj'.startsWith('j')
          > false
          ```

    - #### String.prototype.endsWith

          ```js
          'wwj'.endsWith('j')
          > true

          'wwj'.endsWith('w')
          > false
          ```

    - #### String.prototype.includes

          ```js
          'wwj'.includes('wj')
          > true

          'wwj'.includes('jw')
          > false
          ```

        ---

    - #### Array.prototype.includes

          ```js
          ['wwj', 'wj'].includes('wj')
          > true

          ['wwj', 'wj'].includes('jw')
          > false
          ```

    - #### Array.prototype.clear

          ```js
          ['wwj', 'wj'].clear()
          > []
          ```
