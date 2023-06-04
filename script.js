let input = document.querySelector("input");
// console.log(input);
let buttons = document.querySelectorAll("button");
// console.log(buttons);
let result = "";
let arr = Array.from(buttons);
// console.log(arr)
// this gives an array containing all the buttons

arr.forEach((button, index) => {
  button.addEventListener("click", (e) => {
    if (e.target.innerHTML === "=") {
      // console.log({result})
      result = eval(result);
      input.value = result;
    } else if (e.target.innerHTML === "AC") {
      // WILL CLEAR THE ENTIRE CALCULATIONS
      // console.log({result})
      result = "";
      input.value = result;
    } else if (e.target.innerHTML === "DEL") {
      // console.log({result})
      result = String(result);
      // WILL CLEAR THE ENTIRE CALCULATIONS
      result = result.substring(0, result.length - 1);
      input.value = result;
    } else {
      // console.log({result})
      result = result + e.target.innerHTML;
      input.value = result;
    }
  });
});
