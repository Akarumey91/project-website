const timerEnd = document.getElementById('timer');
const daysShow = document.getElementById('days');
const hoursShow = document.getElementById('hours');
const minutesShow = document.getElementById('minutes');
const secondsShow = document.getElementById('seconds');

const endDate = {
	year: '2020',
	month: '09',
	day: '26',
	hours: '20',
	minutes: '20',
	seconds: '00',
};

const endDateInString = `${endDate.year}-${endDate.month}-${endDate.day}T${endDate.hours}:${endDate.minutes}:${endDate.seconds}`;

setInterval(function () {
	const now = new Date();
	const endDate = new Date(endDateInString);
	const timeLeft = endDate - now;
	const timeLeftInString = new Date(timeLeft);
	const days = timeLeftInString.getUTCDate() - 1;
	const hours = timeLeftInString.getUTCHours();
	const minutes = timeLeftInString.getUTCMinutes();
	const seconds = timeLeftInString.getUTCSeconds();

	if (timeLeft <= 0) {
		clearInterval(timer);
		timerEnd.innerHTML = 'Время закончилось';
	} else {
		daysShow.innerHTML = `${days < 10 ? '0' + days : days}`;
		hoursShow.innerHTML = `${hours < 10 ? '0' + hours : hours}`;
		minutesShow.innerHTML = `${minutes < 10 ? '0' + minutes : minutes}`;
		secondsShow.innerHTML = `${seconds < 10 ? '0' + seconds : seconds}`;
	}
}, 1000);
