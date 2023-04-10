document.addEventListener('DOMContentLoaded', function() {
    const deadline = new Date(2023, 07, 21);
    let timerId = null;
    function declensionNum(num, words) {
      return words[(num % 100 > 4 && num % 100 < 20) ? 2 : [2, 0, 1, 1, 1, 2][(num % 10 < 5) ? num % 10 : 5]];
    }
    function countdownTimer() {
      const diff = deadline - new Date();
      if (diff <= 0) {
        clearInterval(timerId);
      }
      const days = diff > 0 ? Math.floor(diff / 1000 / 60 / 60 / 24) : 0;
      const hours = diff > 0 ? Math.floor(diff / 1000 / 60 / 60) % 24 : 0;
      const minutes = diff > 0 ? Math.floor(diff / 1000 / 60) % 60 : 0;
      const seconds = diff > 0 ? Math.floor(diff / 1000) % 60 : 0;
      $days.textContent = days < 10 ? '0' + days : days;
      $hours.textContent = hours < 10 ? '0' + hours : hours;
      $minutes.textContent = minutes < 10 ? '0' + minutes : minutes;
      $seconds.textContent = seconds < 10 ? '0' + seconds : seconds;
      $days.dataset.title = declensionNum(days, ['день', 'дні', 'днів']);
      $hours.dataset.title = declensionNum(hours, ['година', 'години', 'годин']);
      $minutes.dataset.title = declensionNum(minutes, ['хвилина', 'хвилини', 'хвилин']);
      $seconds.dataset.title = declensionNum(seconds, ['секунда', 'секунди', 'секунд']);
    }
    const $days = document.querySelector('.timer_days');
    const $hours = document.querySelector('.timer_hours');
    const $minutes = document.querySelector('.timer_minutes');
    const $seconds = document.querySelector('.timer_seconds');
    countdownTimer();
    timerId = setInterval(countdownTimer, 1000);
  });