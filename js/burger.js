window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#burger').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.add('burger-menu--active')
  });
  document.querySelector('#burger-close').addEventListener('click', function() {
    document.querySelector('#burger-menu').classList.remove('burger-menu--active')
  });
});
