// create a node from the html element with an id of btn
let button = document.getElementById('btn');

// add an event listener to the button
button.addEventListener("click", () => {
    console.log("before abracadabra")
    alert("Abracadabra!")
    console.log("after abracadabra")
});