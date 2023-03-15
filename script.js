console.log("hello!");
var menu = document.querySelector("#menu-icon");
var navlist = document.querySelector(".navlist");

if (menu) {
	console.log(menu);
}
if (navlist) {
	console.log(navlist);
}

console.log(menu);
console.log(navlist);
menu.addEventListener("click", () => {
	menu.classList.toggle("bx-x");
	navlist.classList.toggle('show');
});
