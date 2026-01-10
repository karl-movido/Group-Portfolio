const screen = document.querySelector('.screen');
const history = document.querySelector('.history');
const buttons = document.querySelectorAll('.keys button');

let expression = '';

buttons.forEach(btn => {
  btn.addEventListener('click', () => {
    const action = btn.dataset.action;
    const value = btn.textContent;
    
    switch (action) {
      case 'clear':
        clearAll();
        break;
        
      case 'delete':
        deleteLast();
        break;
        
      case 'percent':
        applyPercentage();
        break;
        
      case 'equal': // matches your HTML button data-action
        calculate();
        break;
        
      default:
        appendValue(value);
    }
  });
});

// Append numbers/operators to expression
function appendValue(value) {
  if (value === 'x') value = '*'; // replace multiplication sign
  expression += value;
  screen.value = expression;
}

// Clear both screen and history
function clearAll() {
  expression = '';
  screen.value = '';
  history.value = '';
}

// Delete last character
function deleteLast() {
  expression = expression.slice(0, -1);
  screen.value = expression;
}

// Calculate percentage
function applyPercentage() {
  if (!expression) return;
  try {
    let result = eval(expression) / 100;
    result = round(result);
    history.value = expression + '%';
    expression = result.toString();
    screen.value = expression;
  } catch {
    screen.value = 'Error';
  }
}

// Calculate expression
function calculate() {
  if (!expression) return;
  try {
    let result = eval(expression);
    result = round(result);
    history.value = expression + ' = ' + result;
    expression = result.toString();
    screen.value = expression;
  } catch {
    screen.value = 'Error';
  }
}

// Round to avoid floating point errors
function round(num) {
  return parseFloat(num.toFixed(10));
}