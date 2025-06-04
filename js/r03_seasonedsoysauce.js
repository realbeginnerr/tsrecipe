// JS moved from <script> block in r03_seasonedsoysauce.html for React migration prep
// ... JS content from the original <script> block ... 

// 툴팁 토글 함수
function toggleTooltip(element) {
  const tooltip = element.nextElementSibling;
  tooltip.classList.toggle('hidden');
}

// 툴팁 외 클릭 시 닫기
document.addEventListener('click', function(event) {
  const tooltips = document.querySelectorAll('[class*="tooltip"]');
  tooltips.forEach(tooltip => {
    if (!tooltip.contains(event.target) && !event.target.matches('.cursor-pointer')) {
      tooltip.classList.add('hidden');
    }
  });
});

// 영어 국기 이미지 투명도 처리
document.addEventListener('DOMContentLoaded', function() {
  const engImage = document.querySelector('a[href="r03_seasonedsoysauce_eng.html"] img[alt="English"]');
  if (engImage) {
    engImage.style.opacity = '0.5';
  }
}); 