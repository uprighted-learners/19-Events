// create a node from the html element with an id of btn
let button = document.getElementById('btn');
let prestoButton = document.getElementById("presto");
let abraButton = document.getElementById("abra");

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