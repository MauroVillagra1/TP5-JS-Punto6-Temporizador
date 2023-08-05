let timerInterval;
let totalTime = 0;

function startTimer() {
  const inputTime = document.getElementById('inputTime').value;
  if (inputTime > 0 && !timerInterval) {
    totalTime = inputTime;
    updateTimerDisplay();
    timerInterval = setInterval(decrementTimer, 1000);
  }
}

function decrementTimer() {
  if (totalTime > 0) {
    totalTime--;
    updateTimerDisplay();
  } else {
    pauseTimer();
  }
}

function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

function resetTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
  totalTime = 0;
  updateTimerDisplay();
  document.getElementById('inputTime').value = '';
}

function updateTimerDisplay() {
  const minutes = Math.floor(totalTime / 60);
  const seconds = totalTime % 60;
  const formattedTime = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  document.getElementById('timerDisplay').textContent = formattedTime;
}
