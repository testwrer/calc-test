let input = '';
let isPinCorrect = false;

// Function to handle button presses
function press(value) {
  if (isPinCorrect) {
    input += value;
    document.getElementById('display').innerText = input;
  } else {
    input += value;
    if (input === '1234') {
      isPinCorrect = true;
      showNotification();
      input = '';  // Reset the input after correct PIN
      document.getElementById('display').innerText = '0';
    } else if (input.length >= 4) {
      input = '';  // Clear if incorrect PIN
      document.getElementById('display').innerText = '0';
    }
  }
}

// Function to handle calculation (if it's a valid expression)
function calculate() {
  if (isPinCorrect) {
    try {
      input = eval(input).toString();  // Evaluate the math expression
      document.getElementById('display').innerText = input;
    } catch (e) {
      document.getElementById('display').innerText = 'Error';
      input = '';
    }
  }
}

// Function to clear the display
function clearDisplay() {
  input = '';
  document.getElementById('display').innerText = '0';
}

// Function to show the "Input URL here" notification after correct PIN
function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
