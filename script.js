// Select the timer display and button elements
const timerDisplay = document.getElementById("timer-display");
const startButton = document.getElementById("start-button");

// Function to start the timer
function startTimer() {
  let timeLeft = 7 * 60; // 7 minutes in seconds

  const timer = setInterval(() => {
    // Calculate minutes and seconds
    const minutes = Math.floor(timeLeft / 60);
    const seconds = timeLeft % 60;

    // Format as MM:SS (pad with zero if needed)
    const formattedTime = `${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
    timerDisplay.textContent = formattedTime;

    // Check if time is up
    if (timeLeft === 0) {
      clearInterval(timer); // Stop the countdown
    } else {
      timeLeft--; // Decrease time
    }
  }, 1000); // Runs every 1000ms = 1 second
}

// Hook up the button to the function
startButton.addEventListener("click", startTimer);