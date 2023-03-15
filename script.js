
var menu = document.querySelector("#menu-icon");
var navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle('show');
});

const backToTop = document.querySelector('#back-to-top');
backToTop.addEventListener('click', () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
});