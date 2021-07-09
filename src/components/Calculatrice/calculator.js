let state = [];
let operator = '';

export function isOperator(input) {
  return input === '+' || input === '-' || input === '*' || input === '/' || input === '%';
}
// pour plus tard
export function isNotNumber(input) {
  return input === '(' || input === ')' || input === '+' || input === '-' || input === '*' || input === '/' || input === '%';
}
export function isPosOrNeg(input) {
  return input === '+/-';
}

export function isNumber(input) {
  return !isNotNumber(input);
}

export function clearHistory() {
  state = [];
  operator = '';
}

export function calcul(input) {
  let value = '';
  if (state.length > 1) {
    console.log(state, operator);
    switch (operator) {
      case '+':
        value = Number(state[0]) + Number(state[1]);
        state = [];
        state.push(value);
        operator = input;
        break;
      case '-':
        value = Number(state[0]) - Number(state[1]);
        state = [];
        state.push(value);
        operator = input;
        break;
      case '*':
        value = Number(state[0]) * Number(state[1]);
        state = [];
        state.push(value);
        operator = input;
        break;
      case '/':
        value = Number(state[0]) / Number(state[1]);
        state = [];
        state.push(value);
        operator = input;
        break;
      case '=':
        value = Number(state[0]) / Number(state[1]);
        state = [];
        state.push(value);
        operator = '';
        break;
      default:
        console.log('oups une anerie');
    }
  }
  console.log(value);
  return value;
}

export function operatorCalculator(input, currentValue) {
  let value = '';
  state.push(currentValue);
  if (isOperator(input)) {
    if (operator) {
      value = calcul(input);
    }
    else {
      operator = input;
    }
  }
  console.log(state, operator, value);
  // isOperator(input);
  // isNotNumber(input);
  // isNumber(input);
  // console.log('isOperator ', isOperator(input));
  // console.log('isNotNumber ', isNotNumber(input));
  // console.log('isNumber ', isNumber(input));
  return value;
}

export function equalCalculator(input, currentValue) {
  let value = '';
  state.push(currentValue);
  console.log(state);
  value = calcul(input);
  state = [];
  operator = '';
  return value;
}
