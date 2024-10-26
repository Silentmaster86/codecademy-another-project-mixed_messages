// Arrays to hold different parts of the message
const subjects = ["You", "Your mind", "Your journey", "Your strength"];
const actions = ["will overcome", "is capable of", "can accomplish", "will achieve"];
const outcomes = ["great things.", "any challenge.", "success beyond measure.", "your dreams."];

// Function to generate a random message
function generateMessage() {
  // Select a random element from each array
  const subject = subjects[Math.floor(Math.random() * subjects.length)];
  const action = actions[Math.floor(Math.random() * actions.length)];
  const outcome = outcomes[Math.floor(Math.random() * outcomes.length)];
  
  // Combine into a single message
  return `${subject} ${action} ${outcome}`;
}

// Run the function and display the result
console.log(generateMessage());