// JS moved from <script> block in r07_broccoliseasonedtofu_eng.html for React migration prep
// 툴크 토글 함수
function toggleTooltip(button) {
  const tooltip = button.nextElementSibling;
  if (tooltip.style.display === 'block') {
    tooltip.style.display = 'none';
  } else {
    tooltip.style.display = 'block';
  }
}

// 현재 페이지의 언어 이미지 투명도 조정
document.addEventListener('DOMContentLoaded', function() {
  const currentPath = window.location.pathname;
  const isEnglishPage = currentPath.includes('_eng.html');
  
  const koreanImage = document.querySelector('a[href="r07_broccoliseasonedtofu.html"] img');
  const englishImage = document.querySelector('a[href="r07_broccoliseasonedtofu_eng.html"] img');
  
  if (isEnglishPage) {
    if (koreanImage) koreanImage.style.opacity = '0.5';
  } else {
    if (englishImage) englishImage.style.opacity = '0.5';
  }
}); 