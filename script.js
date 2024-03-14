// create a node from the html element with an id of btn
let button = document.getElementById('btn');
let prestoButton = document.getElementById("presto");
let abraButton = document.getElementById("abra");
const changeTextButton = document.getElementById("changeTextBtn");
const textParagraph = document.getElementById("textParagraph");

// add an event listener to the button
button.addEventListener("click", sayMagicWord);

function sayMagicWord(event){
    if(event.target.id === "presto"){
        alert("Change-o!")
    } else if (event.target.id === "abra"){
        alert("Cadabra!")
    } else {
        alert("Shazam!")
    }
    console.log({event})
}

prestoButton.addEventListener("click", sayMagicWord)
abraButton.addEventListener("click", sayMagicWord)

changeTextButton.addEventListener("click", ()=>{
    textParagraph.textContent = "I changed the text!"
    textParagraph.classList.add('changed')
    changeTextButton.textContent = "Refresh for original content."
})

function createButton(){
    const container = document.getElementById("buttonContainer");
    const newButton = document.createElement("button");

    newButton.textContent = "Ask question.";
    container.appendChild(newButton);

    newButton.addEventListener("click", ()=>{
        let userAnswer = prompt("Do you like peanut butter?")
        if(userAnswer !== ""){
            alert(`You answered: ${userAnswer}`)
        }else{
            alert("no answer provided.")
        }
    })
}

createButton()