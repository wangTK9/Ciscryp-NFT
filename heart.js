var heart = document.querySelector('#my__heart')
var heartTime = document.querySelector('#heart__time')


function clickHeart () {
    let time = 21;
    let currentTime = time;
    var getHeart = heart.classList.toggle('heart__active')
    if( getHeart === true ) {
         currentTime = time ;
        heartTime.innerHTML = currentTime + 1 ;
    }
    else {
         heartTime.innerHTML = currentTime ;
    }
}


// day time 
var countDownDate = new Date("apr 5, 2023 15:37:25").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var day = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hour = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minute = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var second = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
//   document.getElementById("time__show").innerHTML = days + "d " + hours + "h "
//   + minutes + "m " + seconds + "s ";
 
   document.getElementById("days").innerHTML = day;
   document.getElementById("hours").innerHTML = hour;
   document.getElementById("mins").innerHTML = minute;
   document.getElementById("secs").innerHTML = second;
   
  // If the count down is finished, write some text
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "EXPIRED";
  }
}, 1000);

// click 

var leftBtn = document.querySelector('#left')
var rightBtn = document.querySelector('#right')
var bigItems = document.querySelectorAll('.big__item')
var activeClick = document.querySelectorAll('.change__icon')

function clickFunction () {
   for (var i = 0; i < 1000 ; i ++) 
   {
    bigItems[i].classList.toggle('none__item')
   }
}


