(() => {
  'use strict';

  const show = document.getElementById('js-show');
  const hide = document.getElementById('js-hide');

  show.addEventListener('click', function() {
    document.body.classList.add('menu-open');
  });

  hide.addEventListener('click', function() {
    document.body.classList.remove('menu-open');
  });
})();
