/**
 * TODO:
 *  3. Save every result log
 */

$.extend({
  typeOf: o => { return Object.prototype.toString.call(o).slice(8, -1).toLowerCase(); },
  isStr: o => { return $.typeOf(o) == 'string'; },
  padS: (o, l, c) => { return ($.isStr(o) ? o : String(o)).padStart(l, c); },
  pad0: (o, l) => { return $.padS(o, l, '0') },
  now: () => { var d = new Date(); return '' + d.getFullYear() + $.pad0(d.getMonth() + 1, 2) + $.pad0(d.getDate(), 2) + $.pad0(d.getHours(), 2) + $.pad0(d.getMinutes(), 2) + $.pad0(d.getSeconds(), 2) + $.pad0(d.getMilliseconds(), 3); },
  dl2SaveOrBK: async function (isBK) {
    const
      path = $.db.path || getRootDir(),
      q = JSON.stringify($.db, ($.db.path = path) && navigator.clipboard.writeText(path), 2),
      qs = `$.db =\n${q};`,
      opts = {
        suggestedName: 'db' + (isBK ? '_' + $.now() : ''),
        types: [
          {
            description: `Save this file to [${path}]`,
            accept: { "text/javascript": [".js"] },
          },
        ],
      },
      fileHandle = await window.showSaveFilePicker(opts),
      writable = await fileHandle.createWritable();
    await writable.write(qs);
    await writable.close();

    // const blob = new Blob([qs], { type: 'application/txt' })
    // a = document.createElement('a');
    // a.href = URL.createObjectURL(blob)
    // a.download = 'db.js'
    // a.click();
  },
  shuffle: arr => {
    let i = arr.length;
    while (i) {
      let j = Math.floor(Math.random() * i--);
      [arr[j], arr[i]] = [arr[i], arr[j]];
    }
    return arr;
  }
});

$(function () {
  const db = $.db.awsSAP, lvs = $.db.lv, arr = [], dbIdx = {}, getRootDir = () => {
    const a = location.pathname.split('/');
    a.shift();  // del '/'
    a.pop();  // del 'main.html'
    a.pop();  // del 'html'
    a.push('js');
    return a.join('/');
  };

  $.extend({
    aMST: ['A', 'B', 'C', 'D', 'E', 'F'],
    q: db,
    qIdx: dbIdx,
    qNo: 0,
    isShowMngNo: 0,
    idxMap: 0,  //key:oldIdx, val:newIdx
    qLv: 0
  });

  $.each($.shuffle(db), function (i, it) {
    const no = it.no, showNo = i + 1, lv = lvs[`lv${no}`] || 1;
    dbIdx[no] = it;
    arr.push(`<li class="lv0 lv${lv} hide"><button id="q${no}" v="${no}" no="${showNo}">${showNo}<label class="hide">（${no}）</label></button></li>`);
  });

  // get show Lv
  $('#btnGLv0, #btnGLv1, #btnGLv2, #btnGLv8, #btnGLv9, #btnGLv4, #btnGLv7').click((e) => {
    const btn = $(e.target), qLv = btn.attr('id').substr(-1), ul = $('#fdsList ul');
    $.qLv = qLv;
    ul.find('li').addClass('hide');
    ul.find(`li.lv${qLv}`).removeClass('hide');
    ul.find('li:visible>button:first').click();
    $('#btnGLv0, #btnGLv1, #btnGLv2, #btnGLv8, #btnGLv9, #btnGLv4, #btnGLv7').removeClass('btn-clicked');
    btn.addClass('btn-clicked');
  });

  // set show Lv
  $('#btnSLv1, #btnSLv2, #btnSLv8, #btnSLv9, #btnSLv4').click((e) => {
    const no = $('#fdsList .btn-clicked').attr('v');
    $.db.lv[`lv${no}`] = $(e.target).attr('id').substr(-1);
  });

  // bk Q
  $('#btnBKQ').click(() => { $.dl2SaveOrBK(1); });

  // Save Q
  $('#btnSaveQ').click(() => { $.dl2SaveOrBK(0); });

  // Q
  $('#fdsList ul')
    .html(arr.join(''))
    .click('button', function (e) {
      $('#fdsList ul button.btn-clicked').removeClass('btn-clicked');
      const obj = $(e.target), isBtn = obj.attr('v');
      $.qNo = (isBtn ? obj : obj.closest('button')).addClass('btn-clicked').attr('v');
      const
        q = $.qIdx[$.qNo],
        qid = `q_${q.no}`,
        aType = q.aa.split(',').length > 1 ? 'checkbox' : 'radio',
        lang = $('nav :checked')[0].id === 'rdoEn' ? 'En' : 'Cn';
      let q_en = q.q.replaceAll('\n', '<br>');

      if (q.qK) {
        $.each(q.qK.split(','), function (i, it) {
          it && (q_en = q_en.replaceAll(it, `<span class="key">${it}</span>`));
        });
      }
      $('#aFact').text('');
      $('#qEn').html(q_en);
      $('#qCn').html(q.q_cn.replaceAll('\n', '<br>'));

      const keys = [], newA = [...q.a];
      let s = '';
      q.aK && ($.each(q.aK, function (i, it) { $.each(it.split(','), function (j, key) { !keys.includes(key) && (keys.push(key)); }); }));
      $.idxMap = [];
      $.each($.shuffle(newA), function (i, it) {
        const aid = `${qid}_${i}`, oldIdx = $.aMST.indexOf(it.substr(0, 1)), it_cn = q.a_cn[oldIdx];
        let
          sEn = $.aMST[i] + '.' + ((!it || it.length < 3) ? '' : it.substr(2).replaceAll('\n', '<br>')),
          sCn = $.aMST[i] + '.' + ((!it_cn || it_cn.length < 3) ? '' : it_cn.substr(2).replaceAll('\n', '<br>'));
        $.idxMap[oldIdx] = i;
        $.each(keys, function (i, it) {
          sEn = sEn.replaceAll(it, `<span class="key">${it}</span>`);
          sCn = sCn.replaceAll(it, `<span class="key">${it}</span>`);
        });
        s +=
          `<tr>
            <td class="td-rdo-chk"><input id="${aid}" name="aGrp" value="${$.aMST[i]}" type="${aType}"></td>
            <td class="langEn hide"><label for="${aid}">${sEn}</label></td>
            <td class="langCn hide"><label for="${aid}">${sCn}</label></td>
          </tr>`
          ;
      });
      $('#fdsOne tbody').html(s).find(`.lang${lang}`).show();
      $('#btnShowKey').removeClass('highlight').text('Show Key');

      //Random width
      const min = 900, max = 1250, w = Math.floor(Math.random() * (max - min) + min);
      $('#fdsOne').width(w);

      //prev next btn
      if ($.q.length > 1) {
        const li = $('#fdsList .btn-clicked').parent();
        $('#btnPrevQ').prop('disabled', li.prevAll(`.lv${$.qLv}:first`).length < 1);
        $('#btnNextQ').prop('disabled', li.nextAll(`.lv${$.qLv}:first`).length < 1);
      }

      // auto change lang when q changed
      const
        rdoAutoIDs = ['rdoAutoCn', 'rdoAutoEn', 'rdoAutoNo'],
        rdoLangIDSels = ['#rdoCn', '#rdoEn', ''],
        rdoAutoID = $('[name="langAuto"]:checked').attr('id'),
        rdoLangIDSel = rdoLangIDSels[rdoAutoIDs.indexOf(rdoAutoID)];
      rdoLangIDSel && ($(rdoLangIDSel).click());
    });
  // TODO:[DEL] $('#fdsList ul').find(`li.lv${$.qLv}`).removeClass('hide');

  //show key click for highlight
  $('#btnShowKey').click(function () {
    $('#btnOK').click();
    const isLH = $('#fdsOne .highlight').length > 0, objLH = $('#fdsOne .key'), btn = $('#btnShowKey');
    !isLH && $('#rdoEn').click();
    isLH ? (objLH.unwrap('.highlight')) : (objLH.wrap('<span class="highlight"></span>'));
    btn[isLH ? 'removeClass' : 'addClass']('highlight');
    btn.text(isLH ? 'Show Key' : 'Hide Key');
    $('#aFact').text(isLH ? '' : $.qNo);
  });

  //rdo chk change
  $('#fdsOne tbody').change(':radio, :checkbox', function (e) {
    const
      isRdo = e.target.type === 'radio',
      tr = $(e.target).parent().parent();

    if (isRdo) { // when rdo
      $('#fdsOne tbody tr').removeClass('rdochk-checked');
      tr.addClass('rdochk-checked');
      $('#btnOK').click();
    } else { // 'checkbox'
      $(e.target).prop('checked') ? (tr.addClass('rdochk-checked')) : (tr.removeClass('rdochk-checked'));
      e.target.value;
    }
  });

  // OK button click
  $('#btnOK').click(function () {
    const q = $.qIdx[$.qNo], aa = q.aa.split(',');
    $.each(aa, function (i, it) { aa[i] = $.aMST[$.idxMap[$.aMST.indexOf(it)]] });
    $('#fdsOne tbody').find(':radio, :checkbox').each(function (i, it) {
      const tr = $(it).parent().parent();
      tr.removeClass('ok');
      tr.removeClass('ok-ng');
      tr.removeClass('ng');

      if (aa.includes(it.value)) { // OK, NG-OK
        tr.addClass($(it).prop('checked') ? 'ok' : 'ok-ng');
      } else { // NG
        $(it).prop('checked') && (tr.addClass('ng'));
      }
    });
  });

  // click en radio
  $('#rdoEn').click(function () {
    const tb = $('#fdsOne tbody');
    tb.find(`.langCn`).hide();
    tb.find(`.langEn`).show();
    $('#qCn').hide();
    $('#qEn').show();
  });
  $('#qCn').click(e => { $('#rdoEn').click(); });

  // click cn radio
  $('#rdoCn').click(function () {
    const tb = $('#fdsOne tbody');
    tb.find(`.langEn`).hide();
    tb.find(`.langCn`).show();
    $('#qEn').hide();
    $('#qCn').show();
  });
  $('#qEn').click(e => { $('#rdoCn').click(); });

  // ＜ Prev Question
  $('#btnPrevQ').click(function () {
    $('#fdsList .btn-clicked').parent().prevAll(`.lv${$.qLv}:first`).find('button').click();
  });

  // Next Question ＞
  $('#btnNextQ').click(function () {
    $('#fdsList .btn-clicked').parent().nextAll(`.lv${$.qLv}:first`).find('button').click();
  });

  // shotcut key
  $(document).keydown(function (e) {
    ['ArrowRight', 'ArrowDown'].includes(e.code) && ($('#btnNextQ').click());
    ['ArrowLeft', 'ArrowUp'].includes(e.code) && ($('#btnPrevQ').click());
  });

  // show manage no
  $('#btnShowMngNo').click(function () {
    $('#fdsList button>label')[$.isShowMngNo ? 'addClass' : 'removeClass']('hide');
    $.isShowMngNo = !$.isShowMngNo;
  });

  // refresh buttton
  $('#btnRefresh').click(() => { location.reload(); });

  //page init default click the first q
  $.q.length > 1 && $('#btnNextQ').prop('disabled', false);
  $.q.length > 0 && $('#fdsList button:eq(0)').click();
  $('#btnGLv0').click();
  $('#rdoCn').click();
  $('.mainer').show();

  //count q
  const
    lv1Cnt = $('#fdsList .lv1').length,
    lv2Cnt = $('#fdsList .lv2').length,
    lv8Cnt = $('#fdsList .lv8').length,
    lv9Cnt = $('#fdsList .lv9').length,
    lv4Cnt = $('#fdsList .lv4').length,
    lv7Cnt = $('#fdsList .lv7').length,
    lv0Cnt = lv1Cnt + lv2Cnt + lv8Cnt + lv9Cnt + lv4Cnt + lv7Cnt;
  $('#lblLv1Cnt').text(lv1Cnt);
  $('#lblLv2Cnt').text(lv2Cnt);
  $('#lblLv8Cnt').text(lv8Cnt);
  $('#lblLv9Cnt').text(lv9Cnt);
  $('#lblLv4Cnt').text(lv4Cnt);
  $('#lblLv7Cnt').text(lv7Cnt);
  $('#lblLv0Cnt').text(lv0Cnt);
});



/*

{
  "no": 0,
  "q": "",
  "a": [
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  "q_cn": "",
  "a_cn": [
    "",
    "",
    "",
    "",
    "",
    ""
  ],
  "aa": "",
  "qK": "",
  "aK": [""]
},

{
  "no": 0,
  "lv": 0,  //1:难记/暂未考量，2:频繁出错，8：差不多了，9:绝对不错
},

    shuffle: arr => {  //while (m > 1)
      let m = arr.length;
      while (m > 1) {
        let index = Math.floor(Math.random() * m--);
        [arr[m], arr[index]] = [arr[index], arr[m]]
      }
      return arr;
    }

    shuffle: function(arr) {  // ES5
      var i = arr.length, t, j;
      while (i) {
        j = Math.floor(Math.random() * i--);
        t = arr[i];
        arr[i] = arr[j];
        arr[j] = t;
      }
    }


303
298
297
296
295
294
293
292
289
288
286
284
279
277
272
267
265
264
262
261
260
259
258
256
255
254
251
250
249
248
244
241
240
239
238
237
234
233
231
229
228
227
226
225
224
223
221
220
219
218
217
216
214
212
211
210
208
206
205
204
201
197
194
192
190
189
187
185
182
180
179
173
167
163
161
153
145
141
140
137
136
134
132
127
126
124
118
117
111
109
107
106
105
97
93
92
91
87
85
83
78
77
75
74
67
55
51
47
41
39
26
25
24
22
18
13
10
8
7
6
4
3
2
1
*/