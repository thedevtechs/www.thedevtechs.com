//var imageSource = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTbrAwPn_atfqsoPPnkLOSfgvaXlwUiAdy6DG6AtqEsZphfJHTmOQ';
var imageSource = '/img/gear-icon.png';

var imageArray = [];

//var addToMe = document.getElementById('addToMe');

var touchMe = document.getElementById('touchMe');
var myGamePiece = document.createElement('div');
var myCharacterInfo = document.createElement('div');

var isGameStarted = false;
var itemsOnPage = [];

class Character {
  constructor(_characterName, _characterHealth, _characterStrength) {
    this.name = _characterName;
    this.health = _characterHealth;
    this.strength = _characterStrength;
    this.coordinates;
  }
}

// Creates our main character
myCharacter = new Character("Kai", 10, 1);

function startGame() {
  isGameStarted = true;

  myGamePiece.style.height = '50px';
  myGamePiece.style.width = '50px';
  myGamePiece.style.backgroundColor = 'red';
  myGamePiece.style.position = 'absolute';
  myGamePiece.style.top = 50 + '%';
  myGamePiece.style.left = 50 + '%';
  //myGamePiece.gravity = 0.05;
  //myScore = new component("30px", "Consolas", "black", 280, 40, "text");
  myCharacterInfo.innerHTML = `<h4 class="character-info">Name: ` + myCharacter.name + `</h4>` + `<h4 class="character-info">Health: ` + myCharacter.health + `</h4>` + `<h4 class="character-info">Strength: ` + myCharacter.strength + `</h4>`;
  touchMe.appendChild(myGamePiece);


  myCharacterInfo.style.position = 'absolute';
  myCharacterInfo.style.top = 10 + '%';
  myCharacterInfo.style.left = 2 + '%';

  touchMe.appendChild(myCharacterInfo);
  addMap();
}

function addMap() {
  for (var i = 0; i < (Math.random() * 10) + 1; i++) {
  	  var mapPiece = document.createElement('div');
	  mapPiece.style.height = ((Math.random() * 250) + 50) + 'px';
	  mapPiece.style.width = '50px';
	  mapPiece.style.backgroundColor = 'green';
	  mapPiece.style.position = 'absolute';
	  mapPiece.style.bottom = (Math.random() * 80) + 7 + '%';
	  mapPiece.style.left = (Math.random() * 90) + '%';
	  itemsOnPage.push(mapPiece)
	  touchMe.appendChild(mapPiece);
  }
}

function characterJump(){
	
}

touchMe.addEventListener('click', function(){
	myGamePiece.coordinates = myGamePiece.getBoundingClientRect();

 	var posY = myGamePiece.coordinates.top;
 	var posX = myGamePiece.coordinates.left;
// 	var newPosX = objectPosition.left;
// 	var angle = 0;


	if (isGameStarted == true) {
		myGamePiece.style.top = (posY - 75) + 'px';
	}
	

//	function moveDown() {
// 		if(posY >= 700){
// 			clearInterval(animateDownInterval);
// 			console.log(imageArray)
// 		} else {
// 			posY += 10;
// 			angle += 3;
// 			objectToBeMoved.style.top = posY + 'px';
// 			objectToBeMoved.style.transform = "rotate(" + angle + "deg)";
// 		}
// 	}

})


window.addEventListener("keydown", function (event) {
  	var objectPosition = myGamePiece.getBoundingClientRect();
    var posY = objectPosition.top;
    var posX = objectPosition.left;
 

	for (var i = 0; i < itemsOnPage.length; i++) {
	  var itemOnPageLocation = itemsOnPage[i].getBoundingClientRect();
	  console.log(itemOnPageLocation.top);
	  console.log(itemOnPageLocation.left)
	}


  if (event.defaultPrevented) {
    return; // Do nothing if the event was already processed
  }

  switch (event.key) {
    case "ArrowDown":
      // code for "down arrow" key press.
      myGamePiece.style.top = (posY + 15) + 'px';
      break;
    case "ArrowUp":
      // code for "up arrow" key press.
      myGamePiece.style.top = (posY - 15) + 'px';
      break;
    case "ArrowLeft":
      // code for "left arrow" key press.
      myGamePiece.style.left = (posX - 35) + 'px';
      break;
    case "ArrowRight":
      // code for "right arrow" key press.
      myGamePiece.style.left = (posX + 35) + 'px';
      break;
    default:
      return; // Quit when this doesn't handle the key event.
  }

  // Cancel the default action to avoid it being handled twice
  event.preventDefault();
}, true);
// the last option dispatches the event to the listener first,
// then dispatches event to window

// touchMe.addEventListener('click', function(){

// 	var x = event.clientX;
// 	var y = event.clientY;

// 	var newImage = document.createElement('img');
// 	newImage.src = imageSource;
// 	newImage.style.position = 'absolute'
// 	newImage.style.height = '50px';
// 	newImage.style.width = '50px';
// 	newImage.style.top = (y - 25) + 'px';
// 	newImage.style.left = (x - 20) + 'px';
// 	imageArray.push(newImage);

// 	// Add class name
// 	var newClassName, arr;
// 	newClassName = "pop-surprise";
// 	arr = newImage.className.split(" ");
// 	if (arr.indexOf(newClassName) == -1) {
// 	    newImage.className += " " + newClassName;
// 	}

// 	touchMe.appendChild(newImage);

// 	moveObject(newImage);
// });



// function moveObject(objectToBeMoved){
// 	var objectPosition = objectToBeMoved.getBoundingClientRect();
// 	var functionFlag = false;
// 	var posY = objectPosition.top;
// 	var animateDownInterval;
// 	var posX = objectPosition.left;
// 	var newPosX = objectPosition.left;
// 	var angle = 0;

// 	var animateUpInterval = setInterval(moveRight, 10);

// 	function moveRight() {

// 		if(newPosX >= 93){
// 			clearInterval(animateUpInterval);
// 			setTimeout(function(objectToBeMoved) {
// 				animateDownInterval = setInterval(moveDown, 20);
// 			}, 1000);
			
// 		} else if (newPosX > 0){
// 			newPosX += .15;
// 			angle += 3;
// 			objectToBeMoved.style.left = newPosX + '%';
// 			objectToBeMoved.style.transform = "rotate(" + angle + "deg)";
// 		}
// 	}

// 	function moveDown() {
// 		if(posY >= 700){
// 			clearInterval(animateDownInterval);
// 			console.log(imageArray)
// 		} else {
// 			posY += 10;
// 			angle += 3;
// 			objectToBeMoved.style.top = posY + 'px';
// 			objectToBeMoved.style.transform = "rotate(" + angle + "deg)";
// 		}
// 	}
// }