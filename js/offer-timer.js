const displayTimer = document.querySelector(".offer-timer");

const todayDate = new Date("2020-07-29T00:00:00");
const endDate = new Date("2020-07-30T00:00:00");
const leftDate = endDate - todayDate;
// const leftTime (date) => `${date.getHours()} : ${date.getMinutes()} : ${date.getSeconds()}`;

// function clock() {
// 	let time = new Date(),
// 		hours = time.getHours() < 10 ? "0" + time.getHours() : time.getHours(),
// 		minutes =
// 			time.getMinutes() < 10 ? "0" + time.getMinutes() : time.getMinutes(),
// 		seconds =
// 			time.getSeconds() < 10 ? "0" + time.getSeconds() : time.getSeconds();
// 	document.getElementById("timer").innerHTML =
// 		hours + ":" + minutes + ":" + seconds;
// }
// setInterval(clock, 1000);

document.getElementById(
	"test"
).innerHTML = `${todayDate.getHours()} : ${todayDate.getMinutes()} : ${todayDate.getSeconds()}`;

// leftDate / 1000 / 24 / 60 / 60;
function leftTime(date) {
	let days = date / 24 / 60 / 60 / 1000;
	let hours = date / 3600 / 1000;
	let minutes = date / 60 / 1000;
	let seconds = date / 24 / 1000;
	let milisec = date / 1000;
	// if ((seconds = 0)) {
	// 	minutes--;
	// }
	// if ((minutes = 0)) {
	// 	hours--;
	// }
	// if ((hours = 0)) {
	// 	days--;
	// }
	return `${Math.trunc(days)} : ${hours} : ${minutes} : ${seconds}`;
	// return `${time / 24 / 60 / 60} : ${time / 3600} : ${time / 60} : ${
	// 	time / 24
	// }`;
}
console.log(leftTime(leftDate));
// console.log(leftDate);
