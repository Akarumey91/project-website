document.querySelector(".ramen").addEventListener("click", ramenMenu);
document.querySelector(".burger").addEventListener("click", burgerMenu);
document.querySelector(".pizza").addEventListener("click", pizzaMenu);

function ramenMenu() {
	fetch("ramens.html")
		.then((response) => response.text())
		.then(
			(html) => (document.querySelector(".menu-container").innerHTML = html)
		);
}
function burgerMenu() {
	fetch("burgers.html")
		.then((response) => response.text())
		.then(
			(html) => (document.querySelector(".menu-container").innerHTML = html)
		);
}

function pizzaMenu() {
	fetch("pizza.html")
		.then((response) => response.text())
		.then(
			(html) => (document.querySelector(".menu-container").innerHTML = html)
		);
}
