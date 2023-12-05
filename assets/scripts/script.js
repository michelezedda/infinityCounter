const mainWrapper = document.getElementById('main-container');
const counterWrapper = document.getElementById('counter-container');
const buttonWrapper = document.getElementById('buttons-container');

// COUNTER
let count = 0;
const counter = document.createElement('p');
counter.textContent = '0';
counterWrapper.appendChild(counter);
// DECREASE-BUTTON
const decrease = document.createElement('button');
decrease.setAttribute('class', 'decrease-button'); 
decrease.textContent = '-';
buttonWrapper.appendChild(decrease);
// RESET-BUTTON
const reset = document.createElement('button');
reset.setAttribute('class', "reset-button");
reset.textContent = 'Reset';
buttonWrapper.appendChild(reset);
// INCREASE-BUTTON
const increase = document.createElement('button');
increase.setAttribute('class', 'increase-button'); 
increase.textContent = '+';
buttonWrapper.appendChild(increase);
// DECREASE FUNCTION
mainWrapper.appendChild(decrease).onclick = function() {
  count -= 1;
  counterWrapper.appendChild(counter).innerText = count;
}
// RESET FUNCTION
mainWrapper.appendChild(reset).onclick = function() {
  count = 0;
  counterWrapper.appendChild(counter).innerText = count;
}
// INCREASE FUNCTION
mainWrapper.appendChild(increase).onclick = function() {
  count += 1;
  counterWrapper.appendChild(counter).innerText = count;
}
