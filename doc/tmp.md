# tmp

## ref pj

- A：最老旧的 NW.JS 应用。含ADC，ADS，部分intra-mart分析

- A1：NW.JS AGrid封装Handsontable，画面初期化未完成有error

- A20： HTA ，纯原生封装a20.js，a20HTA.js，a20DB.js，a20UI.js，a20EXCEL.js，没什么很实际的功能。

- A21： HTA ，jQueryBase封装，a21.js，a21HTA.js，a21UI.js，a21Grid.js，a21DB.js，a21EXCEL.js...。 Try Codemirro可参考！！ 中随着窗体大小变动自适应变动可参考！！ DB树形菜单可参考！！ DBSQL解析可参考！！！ Excel处理也比较完善！！！

- A22ByIM： WebPage - TODO: Global Calendar 链接的内容可参考，来丰富AGrid！！

- AZ：NW.JS ，jQueryBase封装，AZGrid封装Handsontable。 head部分按钮布局可参考！！左上3按钮，按钮1布局和内容分块CSS可参考！！！ WebExcel可参考！！！

- FOG：NW.JS ，jQueryBase封装，两个md可参考。

- HAI： HTA ，jQueryBase封装 ，eachX 可参考！！

- HAI222： HTA ，jQueryBase封装 $HTA.js unzip 7z.exe 可参考！！

- hope：Vue3 只有4个 md 的 dev log only

- hope3： Vue3

- HTA ： D:/ASoftRun/HTA/ 下所有各种文件夹。其中下面没管理，有参考：
      ★画面UI - コピー
      ★画面UI_New
      ★画面UI_New_DHC
      ★画面UI_New_OPT
      AT
      DBDesign
      GoogleFont
      HAI
      IMDemo
      InfoCollection
      MBT：跟 MBMC 很像，一起考虑。
      try2

- IMDemo2： WebPage - intra-mart 登陆画面等3个画面例子

- IMDM： NW.JS ，jQuery3.2 ，codemirror ，启动，查看状态，停止本地postgresql服务可参考！！！！

- MB： NW.JS ，node.js TCP 通信可参考！！！！

- MBA： HTA ，jQueryBase封装 ，UIGrid 固定头部可参考？？？

- MBM： HTA ，jQueryBase封装 ，参照转移方法途中，$HTA.js中注释掉的内容恢复后才能看见具体功能！
        完全转移的有： $DB.js ，$Excel.js ，
        部分转移的有： $.js ，$HTA.js ，$ExcelEditor.js ，

- MBMC： HTA ，jQueryBase封装 ，UIGrid可参考？？？   跟 MBT 很像，一起考虑。

- NW.JS： 仅有一个 readme.txt 里面是管理链接的一个样例

- TryTS： 仅有一个 hello.ts 。 doc/env 下的文档可参考！

- vue3-vant-mobile-main： 第三方vue3模板工程

- WWJ： 纯管理各种 vue3 环境构筑的文档

- wwj@gitee： 本项目，以后都往这里整理。 看看能否整合各种技术构成，统一接口。

- 【保留】WWJ@wuwenjun555： 与本项目一致，本来准备同步更新github，但是因为github打不开的时候比较多，因此放弃了。可以无视该项目。

## ref pj has over, todo delete

- MBS： NW.JS ，jQuery3.6 ，node.js HTTP 通信可参考！！！！

## ref pj src over commnet

- hta, html
　<!-- 🔴🔴🔴🔴🔴 Over!!!-Begin-End 🔴🔴🔴🔴🔴 -->
　<!-- 🔻🔻🔻🔻🔻 Over!!!-Begin 🔻🔻🔻🔻🔻 -->
　<!-- 🔺🔺🔺🔺🔺 Over!!!-End 🔺🔺🔺🔺🔺 -->

- js, css
　/* 🔴🔴🔴🔴🔴 Over!!!-Begin-End 🔴🔴🔴🔴🔴 */
　/* 🔻🔻🔻🔻🔻 Over!!!-Begin 🔻🔻🔻🔻🔻 */
　/* 🔺🔺🔺🔺🔺 Over!!!-End 🔺🔺🔺🔺🔺 */

Microsoft Edge
版本 114.0.1823.67 (正式版本) (64 位)

使用 WebDriver 自动执行 Microsoft Edge
https://learn.microsoft.com/zh-cn/microsoft-edge/webdriver-chromium/?tabs=javascript

Selenium - 编写第一个Selenium脚本
https://www.selenium.dev/zh-cn/documentation/webdriver/getting_started/first_script/

## TODO

- quitExcel 函数的具体处理。首先清楚并销毁一个Excel.application，之后结合以下todo，清除多个。

- 耗时处理模块，譬如Excel等，结合TQ保证可以当前状态，通过调用UI反馈函数反馈给用户，以确保画面不会长时间卡顿！
例如：Excel处理可分为以下几步
1.A0Excel正式处理前继承父类处理
2.创建Excel.Application
3.open workbook
4.Excel概要信息（sheet个数，sheet名列表等）取得
5.回调呼出函数，如，ExcelViewer，ExcelEditor等。

- 多TQ并行，调度？

- 多Excel并行，调度？
