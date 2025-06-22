// Function Declaration:
// Define a function named checkAnswer. This function will be called when the user submits their answer.
function checkAnswer() {
    // Identify the Correct Answer:
    // Inside the checkAnswer function, declare a variable named correctAnswer and assign it the string value "4".
    // This represents the correct answer to your quiz question.
    const correctAnswer = "4";

    // Retrieve the User’s Answer:
    // Use document.querySelector to select the checked radio button by its name attribute name="quiz".
    // Since radio inputs are used for the answers, this will effectively capture the user’s selection.
    // Access the .value property of the selected radio button to get the user’s answer.
    // Store this value in a variable named userAnswer.
    // If no radio button is checked, selectedAnswer will be null, so we need to handle that.
    const selectedAnswerElement = document.querySelector('input[name="quiz"]:checked');
    let userAnswer = ''; // Initialize userAnswer as an empty string

    // Check if an answer was selected before trying to access its value.
    if (selectedAnswerElement) {
        userAnswer = selectedAnswerElement.value;
    }

    // Get the feedback paragraph element to display messages.
    const feedbackElement = document.getElementById('feedback');

    // Compare the User’s Answer with the Correct Answer:
    // Implement an if statement to compare userAnswer with correctAnswer.
    if (userAnswer === correctAnswer) {
        // If the values match, indicating the user’s answer is correct,
        // change the textContent of the element with the ID feedback to "Correct! Well done.".
        feedbackElement.textContent = "Correct! Well done.";
        feedbackElement.style.color = "#28a745"; // Green color for correct answer
        feedbackElement.style.backgroundColor = "#d4edda"; // Light green background
        feedbackElement.style.display = "block"; // Ensure it's visible
    } else {
        // If the values do not match, indicating the user’s answer is incorrect,
        // update the textContent of the feedback element to "That's incorrect. Try again!".
        // Also, add a check for no answer selected to provide specific feedback.
        if (userAnswer === '') {
            feedbackElement.textContent = "Please select an answer.";
        } else {
            feedbackElement.textContent = "That's incorrect. Try again!";
        }
        feedbackElement.style.color = "#dc3545"; // Red color for incorrect answer
        feedbackElement.style.backgroundColor = "#f8d7da"; // Light red background
        feedbackElement.style.display = "block"; // Ensure it's visible
    }
}

// Add an Event Listener to the Submit Button:
// Use document.getElementById to select the “Submit Answer” button by its ID, "submit-answer".
const submitButton = document.getElementById('submit-answer');

// Add a click event listener to this button, passing in the checkAnswer function as the callback
// to be executed when the button is clicked.
// Ensure you are not calling the checkAnswer function directly in the event listener
// (i.e., do not add () after the function name in the addEventListener call).
submitButton.addEventListener('click', checkAnswer);

// Optional: Hide feedback initially on page load if it's not already hidden by CSS
document.addEventListener('DOMContentLoaded', function() {
    const feedbackElement = document.getElementById('feedback');
    feedbackElement.style.display = 'none';
});
