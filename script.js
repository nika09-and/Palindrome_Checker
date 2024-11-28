const input = document.getElementById("text-input");
const result = document.getElementById("result");
const checkB = document.getElementById("check-btn");
const clearB = document.getElementById("clear");
const resultHeader = document.getElementById("resultHeader");
const indicator = document.getElementById("indicator");
const checkSym = document.getElementById("icon");
const no = document.getElementById("no");
const rulesWindow = document.getElementById("rules");
const rulesTXT = document.getElementById("rulesTXT");
const rulesB = document.getElementById("rulesButton");
const mainBoard = document.getElementById("mainBoard");

let valueString;
let reverse;


//gets a word seperates it into the digits reverses them and return the reversed word
function reverseString(str) {
    return str.split('').reverse().join('');
}

// gets two words compare them to each otehr one by one and returns true or false
function PalindromeCheck(userInput, reversedWord){
  for(let i = 0; i < userInput.length; i++){
      if(userInput[i] == reversedWord[i]){
        continue
      }
      else{
        return 0;
      }
  }
  return 1;
}

//dont get anything clears input, result, check and resultHeader
function clearInfo(){
  input.value = '';
  result.innerText = '';
  resultHeader.innerText = "result:";
  indicator.style.backgroundColor = "white";
  checkSym.style.display = "none";
  no.style.display = "none";
}

//main function on click thi function calls reverseWord, PalindromeCheck, than updates info to result, resultHeader, and updates indicator
function checkInput(){
    indicator.style.backgroundColor = "white";
    checkSym.style.display = "none";
    no.style.display = "none";

  valueString = input.value;
  reverse = reverseString(valueString);
  result.innerText = reverse;

  if(input.value == ''){
    alert ("you do not have word to check!")
    return;
  }

  if(PalindromeCheck(valueString,reverse)){
    resultHeader.innerText = "result: it is palindromic";
    indicator.style.backgroundColor = "green";
    checkSym.style.display = "block";
  }
  else{
    resultHeader.innerText = "result: it is not palindromic";
    indicator.style.backgroundColor = "red";
    no.style.display = "block";
  }
}

checkB.addEventListener('click', function() {
    checkInput();
});

clearB.addEventListener('click', function() {
    clearInfo();
});

rulesB.addEventListener('click', function() {
    rulesWindow.style.display = "none";
    mainBoard.style.display = "block";
    checkB.style.display = "block";
    clearB.style.display = "block";
});