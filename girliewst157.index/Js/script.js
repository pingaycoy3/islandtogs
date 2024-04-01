let nav = document.getElementById('navigation');
let catalogBtn = document.querySelector('.catalog-btn');
catalogBtn.addEventListener('click', () => toggleNav());
function toggleNav() {
  if (nav.classList.contains('open')) {
    nav.classList.remove('open');
  } else {
    nav.classList.add('open');
  }
}
window.addEventListener('scroll', () => {
  if (window.scrollY >= 200) {
    document.querySelector('header').style.padding = '5px';
    document.querySelector('header').style.backgroundColor =
      'rgb(3, 28, 42,0.5)';
  } else {
    document.querySelector('header').style.padding = '20px';
    document.querySelector('header').style.backgroundColor = 'rgb(3, 28, 42)';
  }
});