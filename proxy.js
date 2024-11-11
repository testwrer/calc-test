let input = '';
let isPinCorrect = false;

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
    } else if (input.length >= 4) {
      input = '';  // Clear if incorrect PIN
    }
  }
}

function calculate() {
  if (isPinCorrect) {
    try {
      input = eval(input).toString();
      document.getElementById('display').innerText = input;
    } catch (e) {
      document.getElementById('display').innerText = 'Error';
      input = '';
    }
  }
}

function clearDisplay() {
  input = '';
  document.getElementById('display').innerText = '0';
}

function showNotification() {
  const notification = document.getElementById('notification');
  notification.classList.add('show');
  setTimeout(() => {
    notification.classList.remove('show');
  }, 3000);
}
