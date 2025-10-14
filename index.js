document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.show-more').addEventListener('click', function () {
    const items = document.querySelector('.grid');

    items.classList.remove('[&>*:nth-child(n+5)]:hidden');
    this.remove();
  });
});
