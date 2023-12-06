var RoomCount = 0;
var keyCount = 0;
var KeyOne = $("#Keys-0");
var KeyTwo = $("#Keys-1");
var doorLeft = $("#Door-Left1");
var doorCenter = $("#Door-Center1");
var doorRight = $("#Door-Right1");
var exit = $("#Exit");
var msg = $("#count");

exit.hide();
KeyOne.hide();
KeyTwo.hide();

console.log(keyCount);
var randomKey = Math.random() < 0.5 ? KeyOne : KeyTwo;
randomKey.hide();

KeyOne.on("click", function () {
  console.log("Key00 clicked");
  KeyOne.hide();
  keyCount++;
  checkKeyCount();
});

KeyTwo.on("click", function () {
  console.log("Key01 clicked");
  KeyTwo.hide();
  keyCount++;
  checkKeyCount();
});

doorLeft.on("click", function () {
  console.log("Door-left clicked");
  if (Math.random() < 0.5) {
    randomKey.show();
  }
  console.log(keyCount);
  RoomCount++;
  GetRoomCount();
});

doorCenter.on("click", function () {
  console.log("Door-Center clicked");
  if (Math.random() < 0.5) {
    randomKey.show();
  }
  console.log(keyCount);
  RoomCount++;
  GetRoomCount();
});

doorRight.on("click", function () {
  console.log("Door-right clicked");
  if (Math.random() < 0.5) {
    randomKey.show();
  }
  console.log(keyCount);
  RoomCount++;
  GetRoomCount();
});

function checkKeyCount() {
  if (keyCount >= 10) {
    exit.show();
    console.log("Exit shown");
    doorCenter.on("click", function () {
      $("#GameBoard").hide();
      doorRight.hide();
      doorLeft.hide();

      msg
        .text("you have Escaped The back Room??? ")
        .css({ "font-size": "50px", color: "green", padding: "150px 0 0 0;" });
    });
  }
}

function GetRoomCount() {
  msg.text("Welcome to Room " + RoomCount);
}
