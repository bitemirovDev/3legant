function timer() {
  const endTime = new Date();
  endTime.setDate(endTime.getDate() + 3); // 3 дня от текующей даты

  const daysEl = document.querySelector('#days');
  const hoursEl = document.querySelector('#hours');
  const minutesEl = document.querySelector('#minutes');
  const secondsEl = document.querySelector('#seconds');

  function formatTime(unit) {
    return unit.toString().padStart(2, '0');
  }

  function updateTimer() {
    const now = new Date();
    const timeLeft = endTime - now;

    if (timeLeft <= 0) {
      daysEl.innerHTML = '00';
      hoursEl.innerHTML = '00';
      minutesEl.innerHTML = '00';
      secondsEl.innerHTML = '00';
      return;
    }

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    daysEl.innerHTML = formatTime(days);
    hoursEl.innerHTML = formatTime(hours);
    minutesEl.innerHTML = formatTime(minutes);
    secondsEl.innerHTML = formatTime(seconds);
  }

  updateTimer();
  setInterval(updateTimer, 1000);
}

export default timer;
