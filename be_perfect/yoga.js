let selectedAsana = '';
let timer;
let timeLeft = 300; // 5 minutes in seconds

function selectAsana(name) {
  selectedAsana = name;
  document.getElementById('selected-asana').textContent = name;
  resetTimer();
}

function resetTimer() {
  clearInterval(timer);
  timeLeft = 300;
  updateTimerDisplay();
}

function updateTimerDisplay() {
  const mins = Math.floor(timeLeft / 60).toString().padStart(2, '0');
  const secs = (timeLeft % 60).toString().padStart(2, '0');
  document.getElementById('asana-timer').textContent = `${mins}:${secs}`;
}

function startAsanaTimer() {
  if (!selectedAsana) {
    alert('Please select an asana first!');
    return;
  }

  clearInterval(timer);
  timer = setInterval(() => {
    timeLeft--;
    updateTimerDisplay();

    if (timeLeft <= 0) {
      clearInterval(timer);
      alert(`You’re doing good! ✅ Finished 5 minutes of ${selectedAsana}`);
      resetTimer();
    }
  }, 1000);
}
function stopAsanaTimer() {
    clearInterval(timer);
    alert('⏹️ Timer stopped for safety. Take your time.');
    resetTimer(); // Optional: reset to 5:00 or keep where it left off
  }
  