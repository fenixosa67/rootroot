const track = document.querySelector('.screenshot-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    const item = track.querySelector('figure');
    track.scrollBy({left: Number(button.dataset.scroll) * (item.getBoundingClientRect().width + 22), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  });
});
