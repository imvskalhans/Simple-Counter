const value = document.querySelector("#counter");

// increment function
const increment = () => {
  value.innerHTML = parseInt(value.innerHTML) + 1;
};

// decrement function
const decrement = () => {
    value.innerHTML = parseInt(value.innerHTML) - 1;
}
    
// reset function
const reset = () => {
    value.innerHTML = 0;
}
