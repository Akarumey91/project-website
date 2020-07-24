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
	// let days = date / 24 / 60 / 60 / 1000;
	// let hours = days * 24;
	// let minutes = hours * 2.5;
	// let seconds = minutes;
	// return `${Math.trunc(days)} : ${hours} : ${minutes} : ${seconds}`;
	let miliseconds = date;
	let seconds = 0;
	let minutes = 0;
	let hours = 0;
	let days = 0;
	if ((miliseconds = 1000)) {
		miliseconds -= 1000;
		seconds++;
	}
	if ((seconds = 60)) {
		seconds -= 60;
		minutes++;
	}
	if ((minutes = 60)) {
		minutes -= 60;
		hours++;
	}
	if ((hours = 24)) {
		hours -= 24;
		days++;
	}
	console.log(`${days} : ${hours} : ${minutes} : ${seconds}`);
}
console.log(leftTime(leftDate));
console.log(leftDate);
