console.log("hello!");
var menu = document.querySelector("#menu-icon");
var navlist = document.querySelector(".navlist");

menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle('show');
});
