(function (win) {

  var $$ = {};

  $(function () {
    $.each($('[id]'), function (i, v) { $$[v.id] = $('#' + v.id); });
  });

  win.$$ = $$;
})(window);