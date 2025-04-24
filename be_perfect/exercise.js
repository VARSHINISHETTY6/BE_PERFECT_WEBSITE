let selectedExercise = '';
let exTimer;
let exTimeLeft = 300; // 5 mins

function selectExercise(name) {
  selectedExercise = name;
  document.getElementById('selected-exercise').textContent = name;
  resetExerciseTimer();
}

function resetExerciseTimer() {
  clearInterval(exTimer);
  exTimeLeft = 300;
  updateExerciseTimerDisplay();
}

function updateExerciseTimerDisplay() {
  const mins = Math.floor(exTimeLeft / 60).toString().padStart(2, '0');
  const secs = (exTimeLeft % 60).toString().padStart(2, '0');
  document.getElementById('exercise-timer').textContent = `${mins}:${secs}`;
}

function startExerciseTimer() {
  if (!selectedExercise) {
    alert('Please select an exercise!');
    return;
  }

  clearInterval(exTimer);
  exTimer = setInterval(() => {
    exTimeLeft--;
    updateExerciseTimerDisplay();

    if (exTimeLeft <= 0) {
      clearInterval(exTimer);
      alert(`You’re doing good! ✅ Finished 5 minutes of ${selectedExercise}`);
      resetExerciseTimer();
    }
  }, 1000);
}

function stopExerciseTimer() {
  clearInterval(exTimer);
  alert('⏹️ Timer stopped. Rest or retry when ready.');
  resetExerciseTimer(); // or pause if preferred
}
