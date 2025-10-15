document.addEventListener('DOMContentLoaded', function () {
  document.querySelector('.show-more').addEventListener('click', function () {
    const itemsContainer = document.querySelector('.hidden-posts');

    itemsContainer.classList.add('expanded');
    this.remove();
  });
});
