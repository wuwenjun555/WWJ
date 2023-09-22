$(function () {
  const db = $.db.awsSAP, arr = [], dbIdx = {};
  $.each(db, function (i, it) {
    const no = it.no, showNo = i + 1;
    dbIdx[no] = it;
    arr.push(`<li><button id="q${no}" v="${no}">${showNo}</button></li>`);
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

      $('#qEn').html(q.q.replaceAll('\n', '<br>'));
      $('#qCn').html(q.q_cn.replaceAll('\n', '<br>'));

      let s = '';
      $.each(q.a, function (i, it) {
        const aid = `${qid}_${i}`, sEn = it.replaceAll('\n', '<br>');
        s +=
          `<tr>
            <td><input id="${aid}" name="aGrp" value="${aMST[i]}" type="${aType}"></td>
            <td class="langEn hide"><label for="${aid}">${sEn}</label></td>
            <td class="langCn hide"><label for="${aid}">${q.a_cn[i]}</label></td>
          </tr>`
          ;
      });
      $('#fdsOne tbody').html(s).find(`.lang${lang}`).show();
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

  //page init default click the first q
  $('#fdsList button:eq(0)').click();
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