// Ensure the script runs after the DOM is fully loaded.
document.addEventListener('DOMContentLoaded', function() {

    // --- Arithmetic Functions ---
    // Implement Arithmetic Functions: Each arithmetic operation (add, subtract, multiply, divide)
    // should have its own function.

    /**
     * Adds two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The sum of num1 and num2.
     */
    function add(num1, num2) {
        return num1 + num2;
    }

    /**
     * Subtracts the second number from the first.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The difference between num1 and num2.
     */
    function subtract(num1, num2) {
        return num1 - num2;
    }

    /**
     * Multiplies two numbers.
     * @param {number} num1 - The first number.
     * @param {number} num2 - The second number.
     * @returns {number} The product of num1 and num2.
     */
    function multiply(num1, num2) {
        return num1 * num2;
    }

    /**
     * Divides the first number by the second.
     * Handles division by zero to prevent errors.
     * @param {number} num1 - The numerator.
     * @param {number} num2 - The denominator.
     * @returns {number|string} The quotient of num1 and num2, or "Error: Division by zero" if num2 is 0.
     */
    function divide(num1, num2) {
        if (num2 === 0) {
            return "Error: Division by zero";
        }
        return num1 / num2;
    }

    // --- Helper function to get input values and display result ---
    /**
     * Retrieves numbers from input fields, performs a given operation,
     * and displays the result.
     * @param {function} operationFunction - The arithmetic function to execute (e.g., add, subtract).
     */
    function performCalculation(operationFunction) {
        // Ensure Input Validation: Convert input values to numbers (using parseFloat)
        // to ensure the calculations are correct. Provide default values to handle empty inputs.
        const number1Input = document.getElementById('number1');
        const number2Input = document.getElementById('number2');
        const calculationResultSpan = document.getElementById('calculation-result');

        // parseFloat converts string to a floating-point number.
        // If the input is empty or not a valid number, parseFloat returns NaN.
        // The `|| 0` part provides a default value of 0 if parseFloat returns NaN,
        // ensuring our calculations always work with numbers.
        const num1 = parseFloat(number1Input.value) || 0;
        const num2 = parseFloat(number2Input.value) || 0;

        const result = operationFunction(num1, num2);

        // Display the result in the #calculation-result span.
        calculationResultSpan.textContent = result;
    }

    // --- Attach Event Listeners ---
    // For each operation button, add an event listener that calls the corresponding
    // arithmetic function when clicked.

    document.getElementById('add').addEventListener('click', function() {
        performCalculation(add);
    });

    document.getElementById('subtract').addEventListener('click', function() {
        performCalculation(subtract);
    });

    document.getElementById('multiply').addEventListener('click', function() {
        performCalculation(multiply);
    });

    document.getElementById('divide').addEventListener('click', function() {
        performCalculation(divide);
    });

});
