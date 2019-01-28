
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/

//fonction pour changer la couleur du carré
let changeColor = (col) => {
    if(col === "blue"){
      console.log("blue")
        //change color to blue
        document.getElementById("square").style.backgroundColor="blue";
    } else if(col === "red") {
        //change color to red
        document.getElementById("square").style.backgroundColor="red";
    }else if(col === "green") {
        //change color to green
        document.getElementById("square").style.backgroundColor="green";
    }
}

//code pour la détection du clic
document.querySelector('#blueButton').addEventListener('click', () => changeColor("blue"));
document.querySelector('#redButton').addEventListener('click', () => changeColor("red"));
document.querySelector('#greenButton').addEventListener('click', () => changeColor("green"));


/*Enoncé:
Display three buttons named "Blue", "Red" and "Green" as well as a <div> shaped like a square which should be black by default.

When you click on any of these buttons it should change the color of the <div> to the corresponding color.

trouver le code pour le clic => "addlistener on click"
Ensuite changer la valeur de couleur de la div carrée.

nb:
bouton bleu = button.nth-of-type(1)
bouton rouge = button.nth-of-type(2)
bouton vert = button.nth-of-type(3)
*/
