var noOfDrumButtons = document.querySelectorAll(".drum").length;

// Adding event listener to all the drum buttons
// Sound will be played with the click of the button on the webpage
for (var i = 0; i < noOfDrumButtons; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function() {
    // Following action will take place on the click of the button
    var buttonInnerHtml = this.innerHTML;
    playSound(buttonInnerHtml);
    buttonAnimation(buttonInnerHtml);

  });
}

// Adding event listner to whole document with eventName as "keydown"
// Sound will be played on the press of key on the keyboard
document.addEventListener("keydown", function(event) {
  // event.key will give value of what key was pressed on keyboard
  var keyPressed = event.key;
  playSound(keyPressed);
  buttonAnimation(keyPressed);

})

function playSound(buttonPressed) {
  // Implementing switch statements
  switch (buttonPressed) {
    case "w":
      var tom1 = new Audio('sounds/tom-1.mp3');
      tom1.play();
      break;

    case "a":
      var tom2 = new Audio('sounds/tom-2.mp3');
      tom2.play();
      break;

    case "s":
      var tom3 = new Audio('sounds/tom-3.mp3');
      tom3.play();
      break;

    case "d":
      var tom4 = new Audio('sounds/tom-4.mp3');
      tom4.play();
      break;

    case "j":
      var snare = new Audio('sounds/snare.mp3');
      snare.play();
      break;

    case "k":
      var crash = new Audio('sounds/crash.mp3');
      crash.play();
      break;

    case "l":
      var kickBass = new Audio('sounds/kick-bass.mp3');
      kickBass.play();
      break;

    default:
      // default will be triggred if none of the above case is satisfied
      console.log("No action configured for key " + buttonPressed);
  }
}

function buttonAnimation(buttonPressed) {
  var classToBeSelected = "." + buttonPressed;
  var activeButton = document.querySelector(classToBeSelected);
  if (activeButton != null) {
    // Adding a class to HTML tag selected.
    activeButton.classList.add("pressed");
    // Adding a delay after which .pressed class will be removed from the button so that this can be seen as an animation
    setTimeout(function() {
      activeButton.classList.remove("pressed");
    }, 100);
  }
}
