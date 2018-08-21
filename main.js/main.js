$(window).load(function () {
  $('.highLight').on('click', setTable)
  $('.hideSameTr').on('click', hideSameTr)
  $('.hideEmptyTr').on('click', hideEmptyTr)
  //   高亮差异
  function setTable(e) {
    if ($(e.target).is(':checked')) {
      $('table tr').each(function () {
        var tdArr = $(this).find('td');
        var isTrHight = Array.prototype.every.call(tdArr, function (item) {
          return $(item).html() === $(tdArr[0]).html();
        })

        if (!isTrHight) {
          tdArr.css("color", "red");
        }
      })
    } else {
      $('table tr td').css("color", "#000");
    }
  }
  // 隐藏相同参数
  function hideSameTr(e) {
    if ($(e.target).is(':checked')) {
      $('table tr').each(function () {
        var tdArr = $(this).find('td');
        var isTrHide = Array.prototype.every.call(tdArr, function (item) {
          if ($(item).html() !== '') {
            return $(item).html() === $(tdArr[0]).html();
          }
        })

        if (isTrHide) {
          $(this).css("display", "none");
        }
      })
    } else {
      $('table tr').css("display", "table-row");
    }
  }
  // 隐藏暂无
  function hideEmptyTr(e) {
    if ($(e.target).is(':checked')) {
      $('table tr').each(function () {
        var tdArr = $(this).find('td');
        var isTrHide = Array.prototype.every.call(tdArr, function (item) {
          return $(item).html() === '';
        })

        if (isTrHide) {
          $(this).css("display", "none");
        }
      })
    } else {
      $('table tr').css("display", "table-row");
    }
  }
})