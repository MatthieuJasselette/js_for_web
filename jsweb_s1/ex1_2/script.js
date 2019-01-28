
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//code pour saisir le texte
// let input1 = document.querySelector("#textBox1").value;
// let input2 = document.querySelector("#textBox2").value;

//fonction qui fait le calcul
let calculator = (operator) => {
  let input1 = parseFloat(document.querySelector("#textBox1").value);
  let input2 = parseFloat(document.querySelector("#textBox2").value);
  if (operator === "add"){
    return document.querySelector("#result").innerText = input1 + input2;
  } else if (operator === "sub") {
    return document.querySelector("#result").innerText = input1 - input2;
  } else if (operator === "mult") {
    return document.querySelector("#result").innerText = input1 * input2;
  } else if (operator === "divi") {
    return document.querySelector("#result").innerText = input1 / input2;
  }
}

// //code pour utiliser les opérateurs
document.querySelector('#addition').addEventListener('click', () => calculator("add"));

document.querySelector('#substraction').addEventListener('click', () => calculator("sub"));

document.querySelector('#multiplication').addEventListener('click', () => calculator("mult"));

document.querySelector('#divide').addEventListener('click', () => calculator("divi"));


/*Enoncé:

Display two text boxes and four buttons named "+", "-", "x" and "/". Make the calculator work correctly by
displaying the result of the operation when the user clicks one of the buttons.*/
