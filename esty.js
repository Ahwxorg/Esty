// Put time and date into HTML

window.onload = displayClock();

function displayClock() {
  var day = new Date();
  var date
  var hour = day.getHours();
	var minute = (mins = ('0' + day.getMinutes()).slice(-2));
	var hourmode = hour >= 12 ? ' pm' : ' am';
	var hour = hour % 12;
	var hour = hour ? hour : 12;

	document.getElementById('day').innerText = day;
	document.getElementById('timeHour').innerText = hour;
	document.getElementById('timeSeparator').innerHTML = ' : ';
	document.getElementById('timeMinutes').innerText = minute + hourmode;

	setTimeout(displayClock, 1000);
}
