const countWrapper = document.getElementById("counter-container");
const displayWrapper = document.getElementById("display_container");
const buttonWrapper = document.getElementById("button_container");

let count = 0;

const display = document.createElement('p');
display.textContent = '0';
displayWrapper.appendChild(display);

const decrease = document.createElement('button');
decrease.className = "decrease-button"; 
decrease.textContent = '-';
buttonWrapper.appendChild(decrease);

const reset = document.createElement('button');
reset.textContent = 'Reset';
reset.className = "reset-button"; 
buttonWrapper.appendChild(reset);

const increase = document.createElement('button');
increase.className = "increase-button"; 
increase.textContent = '+';
buttonWrapper.appendChild(increase);

countWrapper.appendChild(decrease).onclick = function() {
  count -= 1;
  displayWrapper.appendChild(display).innerText = count;
};

countWrapper.appendChild(reset).onclick = function() {
  count = 0;
  displayWrapper.appendChild(display).innerText = count;
};

countWrapper.appendChild(increase).onclick = function() {
  count += 1;
  displayWrapper.appendChild(display).innerText = count;
};