var numberOfDrumButton = document.querySelectorAll(".drum").length;

var i = 0;

for (i; i < numberOfDrumButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function () {
        var buttonInnerHTML = this.innerHTML;
        switchCase(buttonInnerHTML);
        buttonAnimation(buttonInnerHTML);
    });
}

// Keyboard addEventListener

document.addEventListener("keydown",function (Event) {
    let keyTaker = Event.key;
    switchCase(keyTaker);
    buttonAnimation(keyTaker);
});


// function for switch statement


 function switchCase(input){
    switch (input) {
        case "w":
            var tom1 = new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        case "a":
            var tom2 = new Audio("sounds/tom-2.mp3");
            tom2.play();
            break;
        case "s":
            var tom3 = new Audio("sounds/tom-3.mp3");
            tom3.play();
            break;
        case "d":
            var tom4 = new Audio("sounds/tom-4.mp3");
            tom4.play();
            break;
        case "j":
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
            break;
        case "k":
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
            break;
        case "l":
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
            break;
        default:
            console.log(buttonInnerHTML)
            break;
    }
 }

// function for buttonAnimation

function buttonAnimation(currentButton){
    let activeButton = document.querySelector("."+currentButton);
    activeButton.classList.add("pressed");

    // remove .pressed class from the button

    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 1000);

}


/* Anonymous Function

function () {
    whatever You want to execute but the function won't have a name!
}

*/