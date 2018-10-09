  var lolClock = document.getElementById('lol-clock');
  var imgTxt = document.getElementById('img-txt');
  var catImg = document.getElementById('cat-img');
  var clockBody = document.getElementById('clock-body');
  var partyBtn = document.getElementById('partyBtn');
  var partyTime = false;
  var meow = new Audio('media/party.mp3');
//  var bodyHTML = document.getElementsByTagName("body")[0];

// play the cat sound
//var meow = new Audio('media/meow.mp3');
//meow.play();

function timeNow() {



  var day = new Date();

// setting variables for time
  var hour = day.getHours();
  var min = day.getMinutes();
  var sec = day.getSeconds();
  var meridian = 'AM';

// adding 0 before mind and secs
  if (min < 10) {
    min = '0'+min;
  }
  if (sec < 10) {
    sec = '0'+sec;
  }

// sample test
/*  var hour = 20;
  var min = 25;
  var sec = 35; */

/* trying same operation with if statements
if (hour > 5 && hour < 12) {
  imgTxt.innerHTML = 'GOOD MORNING';
  catImg.style.background = "url('img/morning.jpg')";
  document.body.style.backgroundColor= '#ffffcc';
} else if (hour == 12) {
  imgTxt.innerHTML = 'GOOD NOON';
  catImg.style.background = "url('img/noon.jpg')";
  catImg.style.backgroundSize = 'cover';
  document.body.style.backgroundColor= '#ffff00';
} else if (hour > 12 && hour < 18) {
  imgTxt.innerHTML = 'GOOD AFTERNOON';
  catImg.style.background = "url('img/afternoon.jpg')";
  document.body.style.backgroundColor= '#ff7f00';
}
*/

  // change the values according to time of day
  // doing 5 <= hour < 12 didn't work
  switch (true) {
    case hour <= 5:
      imgTxt.innerHTML = 'GET SOME SLEEPZ BRO';
      catImg.style.background = "url('img/earlyMorning.jpg')";
      catImg.style.backgroundSize = 'cover';
      document.body.style.backgroundColor= '#2d3037';
      clockBody.style.color = "#99ffcc";
      break;
    case hour >= 5 && hour < 12:
      imgTxt.innerHTML = 'GOOD MORNING';
      catImg.style.background = "url('img/morning.jpg')";
      catImg.style.backgroundSize = 'cover';
      document.body.style.backgroundColor= '#fee0be';
      clockBody.style.color = "#40232e";
      break;
    case hour == 12:
      imgTxt.innerHTML = 'GOOD NOON';
      catImg.style.background = "url('img/noon.jpg')";
      catImg.style.backgroundSize = 'cover';
      document.body.style.backgroundColor= '#f2d16d';
      clockBody.style.color = "#400101";
      meridian = 'PM';
      break;
    case hour > 12 && hour <18:
      imgTxt.innerHTML = 'GOOD AFTERNOON';
      catImg.style.background = "url('img/afternoon.jpg')";
      catImg.style.backgroundSize = 'cover';
      document.body.style.backgroundColor= '#f2a950';
      clockBody.style.color = "#400101";
      meridian = 'PM';
      break;
    case hour >= 18 && hour <22:
      imgTxt.innerHTML = 'GOOD EVENING';
      catImg.style.background = "url('img/evening.jpg')";
      catImg.style.backgroundSize = 'cover';
      document.body.style.backgroundColor= '#425b8c';
      clockBody.style.color = "#81c4f8";
      clockBody.style.textShadow = "5px 5px 15px #271c2c";
      meridian = 'PM';
      break;
    case hour >= 22 && hour <= 23:
      imgTxt.innerHTML = 'GOOD NIGHT';
      catImg.style.background = "url('img/night.jpg')";
      document.body.style.backgroundColor= '#271c2c';
      clockBody.style.color = "#81c4f8";
      meridian = 'PM';
      break;
    default:

  }

  lolClock.innerHTML = hour +':'+ min+':' + sec + ' ' + meridian;
}

setInterval(timeNow, 1000);




var playing = false;

/*
function partyTime() {
  var meow = new Audio('media/party.mp3');

  if (playing === false) {
    playing = true;
    console.log("playing");
    meow.play();
    partyBtn.innerHTML = "PARTY OVER";
  } else {
    playing = false;
    meow.pause();
    meow.currentTime = 0;
    partyBtn.innerHTML = "PARTY TIME";
  }
}
*/



partyBtn.addEventListener('click', partyEvent);

function partyEvent() {
// partyTime and meow are defined outside
// otherwise they get re-defined without changing the old definition
  if (partyTime === false) {
    partyTime = true;
    meow.play();
    setInterval(changeBG, 1000);
    partyBtn.innerHTML = "PARTY OVER";
  } else {
    partyTime = false;
    meow.pause();
    clearInterval(changeBG, 1000);
    partyBtn.innerHTML = "PARTY TIME";
  }


}

var i = 0;
function changeBG() {
    var color = ["black", "blue", "brown", "green"];
    document.body.style.backgroundColor = color[i];
    i = (i + 1) % color.length;
}
