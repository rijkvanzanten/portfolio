import baffle from "baffle";

const b = baffle('[data-baffle]', {
  exclude: [' ', '\n'],
  characters: ' '
});
b.reveal(750);

let currentPage = 0;
const pages = ['intro', 'te', 'ranger', 'directus', 'cloud', 'dataviz', 'contact'];

document.querySelector('#next').addEventListener('click', nextPage);
document.querySelector('#prev').addEventListener('click', prevPage);

window.addEventListener('keydown', event => {
  const key = event.key;
  if (key ==='ArrowLeft') prevPage();
  if (key ==='ArrowRight') nextPage();
});

function nextPage() {
  b.start();
  currentPage++;

  if (currentPage > pages.length - 1) currentPage = pages.length - 1;

  b.reveal(750);
  setTimeout(() => {
    document.body.className = pages[currentPage % pages.length];
  }, 60);
}

function prevPage() {
  b.start();
  currentPage--;

  if (currentPage < 0) currentPage = 0;

  b.reveal(750);
  setTimeout(() => {
    document.body.className = pages[currentPage % pages.length];
  }, 60);
}
