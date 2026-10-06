const track = document.querySelector('.screenshot-track');
const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)');
document.querySelectorAll('[data-scroll]').forEach(button => {
  button.addEventListener('click', () => {
    const item = track.querySelector('figure');
    const gap = parseFloat(getComputedStyle(track).gap) || 0;
    track.scrollBy({left: Number(button.dataset.scroll) * (item.getBoundingClientRect().width + gap), behavior: reducedMotion.matches ? 'instant' : 'smooth'});
  });
});
