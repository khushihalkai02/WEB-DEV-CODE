//example1

document
.getElementById("changeTextButton")
.addEventListener("click", function (){
    let paragraph = document.getElementById("myParagraph");
    paragraph.textContent = "the paragraph is changed";
}); 

//example2
document.getElementById("highlightFirstCity").addEventListener('click', function () {
    let newie = document.getElementById("citiesList");
    let hold = newie.firstElementChild;
    hold.style.color = "red";
    hold.style.backgroundColor = "yellow";
});

//example3
document
.getElementById("changeOrder")
.addEventListener("click", function () {
    let coffeetype = document.getElementById("coffeeType");
    coffeetype.textContent = "Espresso";
    coffeetype.style.color ='pink';
});

//example4
document
.getElementById("addNewItem")
.addEventListener("click", function () {
    let Shoppinglist = document.getElementById("shoppingList");
    let newlist = document.createElement("li");
    newlist.textContent = "eggs";
    Shoppinglist.appendChild(newlist);
});

//example 5
document
.getElementById("removeLastTask")
.addEventListener("click", function () {
    let list = document.getElementById("taskList");
    let deletion = list.lastElementChild
    deletion.remove();
});

//example6
document
.getElementById("clickMeButton")
.addEventListener("click", function () {
    alert("welcome");

});

//example7
document.getElementById("teaList").addEventListener
("click", function (event) {
    if (event.target && event.target.matches(".teaItem")) {
        alert(`You selected: ${event.target.textContent}`);
    }

});

//example8
document.getElementById("feedbackForm").addEventListener
("submit", function (event) {
event.preventDefault();
let feedback = document.getElementById("feedbackInput").value;
let display = document.getElementById("feedbackDisplay");
display.textContent = `feedback is: ${feedback}`;
display.style.color = "pink";
});

//example9
document.addEventListener("DOMContentLoaded", function () {
document.getElementById("domStatus").textContent = "Dom Fully loaded"
}); 

//example10
document.getElementById("toggleHighlight")
.addEventListener("click", function () {
    
    let text = document.getElementById("descriptionText");
    text.style.background = "pink";

});