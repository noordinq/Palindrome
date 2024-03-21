const checkButton = document.getElementById("check-btn");
const textInput = document.getElementById("text-input");
const result = document.getElementById("result");

checkButton.addEventListener('click', () => {
  if(textInput.value === '') {
    alert("Please input a value")
  } else if (textInput.value.length === 1) {
    result.innerText =  `${textInput.value} is a palindrome.`;
  } else {
    result.innerText = `${textInput.value} is not a palindrome.`;
  }
})