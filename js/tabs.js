window.addEventListener('DOMContentLoaded', function() {
  document.querySelectorAll('.how__item__btn').forEach(function(tabsBtn) {
    tabsBtn.addEventListener('click', function(e) {
      const path = e.currentTarget.dataset.path
      document.querySelectorAll('.how__item__btn').forEach(function(btn) {
        btn.classList.remove('how__item__btn--active')
      });
      e.currentTarget.classList.add('how__item__btn--active')
      document.querySelectorAll('.how__wrap').forEach(function(tabsBtn) {
        tabsBtn.classList.remove('how__wrap--active')
      });
      document.querySelector('.how__preview').classList.remove('one', 'two', 'three', 'four')
      document.querySelector('.how__preview').classList.add('how__preview')
      if (path === 'one') {
        document.querySelector('.how__preview').classList.add('one')
      } else if (path === 'two') {
        document.querySelector('.how__preview').classList.add('two')
      } else if (path === 'three') {
        document.querySelector('.how__preview').classList.add('three')
      } else if (path === 'four') {
        document.querySelector('.how__preview').classList.add('four')
      }
      document.querySelector(`[data-target="${path}"]`).classList.add('how__wrap--active')
    });
  });
});
