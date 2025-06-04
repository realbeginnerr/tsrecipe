// 툴팁 토글 함수
function toggleTooltip(element) {
  const parent = element.parentElement;
  const tooltip = parent.querySelector('div');
  if (tooltip) {
    tooltip.classList.toggle('hidden');
  }
}

document.addEventListener('click', function(event) {
  const tooltips = document.querySelectorAll('[class*="tooltip"]');
  tooltips.forEach(tooltip => {
    if (!tooltip.contains(event.target) && !event.target.matches('.cursor-pointer')) {
      tooltip.classList.add('hidden');
    }
  });
});

document.addEventListener('DOMContentLoaded', function() {
  const engImage = document.querySelector('a[href="r02_shreddedradish_eng.html"] img[alt="English"]');
  if (engImage) {
    engImage.style.opacity = '0.5';
  }
}); 