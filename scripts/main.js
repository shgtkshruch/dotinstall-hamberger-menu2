'use strict';

(function () {
  'use strict';

  var show = document.getElementById('js-show');
  var hide = document.getElementById('js-hide');

  show.addEventListener('click', function () {
    document.body.classList.add('menu-open');
  });

  hide.addEventListener('click', function () {
    document.body.classList.remove('menu-open');
  });
})();