function cal(){
  let num=document.getElementById("ar").value;
  let numwords=0;
  for(let i=0;i<num.length;i++){
      let curr=num[i];
      if(curr==" "){
          numwords+=1;
      }
  }
  numwords+=1;
  document.getElementById("ent").innerHTML=numwords;
}



// // let startTime = Date.now(); // Start the timer
// // const textarea = document.getElementById('ar'); // Get the textarea element

// // // Disable typing in the textarea
// // textarea.disabled = true;

// // // Set a 1-minute timer (60,000 milliseconds)
// // setTimeout(function() {
// //   let endTime = Date.now(); // Time when the timer finishes
// //   let timeElapsed = endTime - startTime; // Calculate time elapsed in milliseconds

// //   // Convert milliseconds to minutes and seconds
// //   let minutes = Math.floor(timeElapsed / 60000);
// //   let seconds = Math.floor((timeElapsed % 60000) / 1000);

// //   // Display the result
// //   alert(`Time's up! Total time elapsed: ${minutes} minute(s) and ${seconds} second(s).`);

// //   // Enable typing after the timer is up
// //   textarea.disabled = false;  // Enable the textarea so the user can type now
// // }, 60000); 
// // textarea.addEventListener('input', cal);


// let startTime;          // To store the time when typing begins
// let typingStarted = false; // To check if typing has started
// let timerInterval;       // Store the timer interval reference for clearing it later
// const textarea = document.getElementById("ar"); // Get textarea element
// const timerDisplay = document.getElementById("timer"); // Timer display element
// const wpmDisplay = document.getElementById("ent"); // WPM display element

// // Function to calculate words per minute (WPM)
// function cal() {
//   if (!typingStarted) {
//     // If typing hasn't started, prevent the calculation
//     alert("You haven't started typing yet!");
//     return;
//   }

//   // Stop the timer when the user clicks "Calculate"
//   let endTime = Date.now(); // Get the current time when user clicks "Calculate"
//   let elapsedTime = (endTime - startTime) / 1000; // Elapsed time in seconds
//   let minutes = elapsedTime / 60; // Convert seconds to minutes

//   // Get the text from the textarea and split by spaces to count words
//   let text = textarea.value.trim();
//   let wordCount = text.split(/\s+/).length; // Split by spaces, handle multiple spaces

//   // Calculate WPM
//   let wpm = Math.round(wordCount / minutes);

//   // Display WPM in the span
//   wpmDisplay.textContent = wpm;

//   // Disable textarea after calculating WPM
//   textarea.disabled = true;

//   // Display the final elapsed time in the timer
//   let secondsLeft = elapsedTime % 60;
//   let minutesElapsed = Math.floor(elapsedTime / 60);
//   timerDisplay.textContent = `Time: ${minutesElapsed}:${secondsLeft < 10 ? '0' : ''}${secondsLeft}`;

//   // Clear the timer interval
//   clearInterval(timerInterval);
// }

// // Start timer when user starts typing
// textarea.addEventListener("input", () => {
//   if (!typingStarted) {
//     // Start the timer the first time the user starts typing
//     typingStarted = true;
//     startTime = Date.now(); // Record the start time
//     // Update the timer every second
//     timerInterval = setInterval(() => {
//       let elapsedTime = (Date.now() - startTime) / 1000;
//       let minutes = Math.floor(elapsedTime / 60);
//       let seconds = Math.floor(elapsedTime % 60);
//       timerDisplay.textContent = `Time: ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
//     }, 1000); // Update every second
//   }
// });
