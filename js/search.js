window.addEventListener('DOMContentLoaded', function() {
  document.querySelector('#search-btn').addEventListener('click', function() {
    document.querySelector('#search').classList.add('search--active')
    document.querySelector('#search-btn').style.outline = 'none'
  });
  document.querySelector('#search-btn--close').addEventListener('click', function() {
    // Я сделал закрытие окна без кнопки, при клике на svg крест.
    // Не знаю можно ли было так делать, но по другому нормальное закрытие окна не получалось
    document.querySelector('#search').classList.remove('search--active')
  });
});
