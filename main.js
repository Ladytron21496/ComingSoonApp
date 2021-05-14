function geTime() {
  let launch = new Date("26 July 2021 00:00:00").getTime();
  let current = new Date().getTime();
  let diff = launch - current;

  let second = 1000;
  let minute = second * 60;
  let hour = minute * 60;
  let day = hour * 24;

  let dayText = Math.floor(diff / day);
  let hourText = Math.floor((diff % day) / hour);
  let minText = Math.floor((diff % hour) / minute);
  let secondText = Math.floor((diff % minute) / second);

  document.getElementById("day").innerText = dayText;
  document.getElementById("minute").innerText = minText;
  document.getElementById("hour").innerText = hourText;
  document.getElementById("second").innerText = secondText;
}

setInterval(() => {
  geTime();
}, 1000);
