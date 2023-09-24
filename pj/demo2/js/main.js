/**
 * TODO:
 *  1. Random Q order
 *  2. Random A order
 *  3. Save every result log
 *  4. [sub key] to bold ?
 */

$(function () {
  const db = $.db.awsSAP, arr = [], dbIdx = {};
  $.each(db, function (i, it) {
    const no = it.no, showNo = i + 1;
    dbIdx[no] = it;
    arr.push(`<li><button id="q${no}" v="${no}" no="${showNo}">${showNo}</button></li>`);
  });
  $.q = db;
  $.qIdx = dbIdx;
  $.qNo = 0;

  $('#fdsList ul')
    .html(arr.join(''))
    .click('button', function (e) {
      $('#fdsList ul button.btn-clicked').removeClass('btn-clicked');
      $.qNo = $(e.target).addClass('btn-clicked').attr('v');
      const
        q = $.qIdx[$.qNo],
        qid = `q_${q.no}`,
        aType = q.aa.split(',').length > 1 ? 'checkbox' : 'radio',
        aMST = ['A', 'B', 'C', 'D', 'E', 'F'],
        lang = $('nav :checked')[0].id === 'rdoEn' ? 'En' : 'Cn';
      let q_en = q.q.replaceAll('\n', '<br>');

      if (q.qK) {
        $.each(q.qK.split(','), function (i, it) {
          q_en = q_en.replaceAll(it, `<span class="key">${it}</span>`);
        });
      }
      $('#aFact').text('');
      $('#qEn').html(q_en);
      $('#qCn').html(q.q_cn.replaceAll('\n', '<br>'));

      let s = '', keys = [];
      q.aK && ($.each(q.aK, function (i, it) { $.each(it.split(','), function (j, key) { !keys.includes(key) && (keys.push(key)); }); }));
      $.each(q.a, function (i, it) {
        const aid = `${qid}_${i}`;
        let sEn = it.replaceAll('\n', '<br>');
        $.each(keys, function (i, it) { sEn = sEn.replaceAll(it, `<span class="key">${it}</span>`); });
        s +=
          `<tr>
            <td class="td-rdo-chk"><input id="${aid}" name="aGrp" value="${aMST[i]}" type="${aType}"></td>
            <td class="langEn hide"><label for="${aid}">${sEn}</label></td>
            <td class="langCn hide"><label for="${aid}">${q.a_cn[i]}</label></td>
          </tr>`
          ;
      });
      $('#fdsOne tbody').html(s).find(`.lang${lang}`).show();
      $('#btnShowKey').removeClass('highlight').text('Show Key');

      //Random width
      const min = 900, max = 1250, w = Math.floor(Math.random() * (max - min) + min);
      $('.gridOneArea').width(w);

      //prev next btn
      if ($.q.length > 1) {
        const no = parseInt($('#fdsList .btn-clicked').text(), 10);
        if (no === 1) {
          $('#btnPrevQ').prop('disabled', true);
          $('#btnNextQ').prop('disabled', false);
        } else if (no === $.q.length) {
          $('#btnPrevQ').prop('disabled', false);
          $('#btnNextQ').prop('disabled', true);
        } else {
          $('#btnPrevQ').prop('disabled', false);
          $('#btnNextQ').prop('disabled', false);
        }
      }
    });

  //show key click for highlight
  $('#btnShowKey').click(function () {
    const isLH = $('#fdsOne .highlight').length > 0, objLH = $('#fdsOne .key'), btn = $('#btnShowKey');
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

  // click cn radio
  $('#rdoCn').click(function () {
    const tb = $('#fdsOne tbody');
    tb.find(`.langEn`).hide();
    tb.find(`.langCn`).show();
    $('#qEn').hide();
    $('#qCn').show();
  });

  // ＜ Prev Question
  $('#btnPrevQ').click(function () {
    const no = parseInt($('#fdsList .btn-clicked').text(), 10) - 1;
    $(`#fdsList [no="${no}"]`).click();
    // no === 1 && ($('#btnPrevQ').prop('disabled', true));
    // no < $.q.length && ($('#btnNextQ').prop('disabled', false));
  });

  // Next Question ＞
  $('#btnNextQ').click(function () {
    const no = parseInt($('#fdsList .btn-clicked').text(), 10) + 1;
    $(`#fdsList [no="${no}"]`).click();
    // no > 1 && ($('#btnPrevQ').prop('disabled', false));
    // no === $.q.length && ($('#btnNextQ').prop('disabled', true));
  });

  // shotcut key
  $(document).keydown(function (e) {
    ['ArrowRight', 'ArrowDown'].includes(e.code) && ($('#btnNextQ').click());
    ['ArrowLeft', 'ArrowUp'].includes(e.code) && ($('#btnPrevQ').click());
  });

  //page init default click the first q
  $.q.length > 1 && $('#btnNextQ').prop('disabled', false);
  $.q.length > 0 && $('#fdsList button:eq(0)').click();
  $('#rdoCn').click();
  $('.mainer').show();
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


*/