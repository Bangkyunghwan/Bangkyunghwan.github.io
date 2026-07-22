(function () {
  var buttons = document.querySelectorAll('.filter-btn');
  var items = document.querySelectorAll('#projectList .pcard');
  var empty = document.getElementById('emptyMsg');
  function apply(filter) {
    var shown = 0;
    items.forEach(function (el) {
      var match = filter === 'all' || el.getAttribute('data-type') === filter;
      el.style.display = match ? '' : 'none';
      if (match) shown++;
    });
    if (empty) empty.style.display = shown === 0 ? '' : 'none';
  }
  buttons.forEach(function (btn) {
    btn.addEventListener('click', function () {
      buttons.forEach(function (b) { b.classList.remove('is-on'); });
      btn.classList.add('is-on');
      apply(btn.getAttribute('data-filter'));
    });
  });
})();
