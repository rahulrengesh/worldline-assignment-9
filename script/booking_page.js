const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');
const movieSelect = document.getElementById('movie');

var ticketPrice;
populateUI();
ticketPrice = +movieSelect.value;
var selectedSeatsCount;


function setMovieData(movieIndex, moviePrice) {
  localStorage.setItem('selectedMovieIndex', movieIndex);
  localStorage.setItem('selectedMoviePrice', moviePrice);
}


movieSelect.addEventListener('change', (e) => {
    const movieSelect1 = document.getElementById('movie').value;
   
    if(movieSelect1==="140")
    {
      var element = document.getElementById("5"); 
      element.className = "seat occupied"; 
      var element = document.getElementById("8"); 
      element.className = "seat occupied";
      var element = document.getElementById("10"); 
      element.className = "seat occupied";
      var element = document.getElementById("17"); 
      element.className = "seat occupied";
      var element = document.getElementById("25"); 
      element.className = "seat occupied";
      var element = document.getElementById("26"); 
      element.className = "seat occupied";
      var element = document.getElementById("27"); 
      element.className = "seat occupied";
      var element = document.getElementById("31"); 
      element.className = "seat occupied";
      var element = document.getElementById("32"); 
      element.className = "seat occupied";
      var element = document.getElementById("33"); 
      element.className = "seat occupied";
      var element = document.getElementById("34"); 
      element.className = "seat occupied";
      var element = document.getElementById("35"); 
      element.className = "seat occupied";
      var element = document.getElementById("36"); 
      element.className = "seat occupied";
      var element = document.getElementById("41");
      element.className = "seat occupied";
      var element = document.getElementById("42");
      element.className = "seat occupied";
      var element = document.getElementById("43");
      element.className = "seat occupied";
      var element = document.getElementById("44");
      element.className = "seat occupied";
      var element = document.getElementById("45");
      element.className = "seat occupied";
      var element = document.getElementById("46");
      element.className = "seat occupied";
    }
    else if (movieSelect1==="110")
    {
      var element = document.getElementById("5"); 
      element.className = "seat"; 
      var element = document.getElementById("8"); 
      element.className = "seat";
      var element = document.getElementById("10"); 
      element.className = "seat";
      var element = document.getElementById("17"); 
      element.className = "seat";
      var element = document.getElementById("25"); 
      element.className = "seat";
      var element = document.getElementById("26"); 
      element.className = "seat";
      var element = document.getElementById("27"); 
      element.className = "seat";
      var element = document.getElementById("31"); 
      element.className = "seat";
      var element = document.getElementById("32"); 
      element.className = "seat";
      var element = document.getElementById("33"); 
      element.className = "seat";
      var element = document.getElementById("34"); 
      element.className = "seat";
      var element = document.getElementById("35"); 
      element.className = "seat";
      var element = document.getElementById("36"); 
      element.className = "seat";
      var element = document.getElementById("81");
      element.className = "seat";
      var element = document.getElementById("82");
      element.className = "seat";
      var element = document.getElementById("83");
      element.className = "seat";
      var element = document.getElementById("84");
      element.className = "seat";
      var element = document.getElementById("85");
      element.className = "seat";
      var element = document.getElementById("86");
      element.className = "seat";
      var element = document.getElementById("41");
      element.className = "seat";
      var element = document.getElementById("42");
      element.className = "seat";
      var element = document.getElementById("43");
      element.className = "seat";
      var element = document.getElementById("44");
      element.className = "seat";
      var element = document.getElementById("45");
      element.className = "seat";
      var element = document.getElementById("46");
      element.className = "seat";
    }
    else if(movieSelect1==='100')
    {
      var element = document.getElementById("5"); 
      element.className = "seat occupied"; 
      var element = document.getElementById("8"); 
      element.className = "seat occupied";
      var element = document.getElementById("10"); 
      element.className = "seat occupied";
      var element = document.getElementById("17"); 
      element.className = "seat occupied";
      var element = document.getElementById("25"); 
      element.className = "seat occupied";
      var element = document.getElementById("26"); 
      element.className = "seat occupied";
      var element = document.getElementById("27"); 
      element.className = "seat occupied";
      var element = document.getElementById("31"); 
      element.className = "seat occupied";
      var element = document.getElementById("32"); 
      element.className = "seat occupied";
      var element = document.getElementById("33"); 
      element.className = "seat occupied";
      var element = document.getElementById("34"); 
      element.className = "seat occupied";
      var element = document.getElementById("35"); 
      element.className = "seat occupied";
      var element = document.getElementById("36"); 
      element.className = "seat occupied";
      var element = document.getElementById("81");
      element.className = "seat occupied";
      var element = document.getElementById("82");
      element.className = "seat occupied";
      var element = document.getElementById("83");
      element.className = "seat occupied";
      var element = document.getElementById("84");
      element.className = "seat occupied";
      var element = document.getElementById("85");
      element.className = "seat occupied";
      var element = document.getElementById("86");
      element.className = "seat occupied";
    }
    else if(movieSelect1==='150')
    {
      var element = document.getElementById("81");
      element.className = "seat";
      var element = document.getElementById("82");
      element.className = "seat";
      var element = document.getElementById("83");
      element.className = "seat";
      var element = document.getElementById("84");
      element.className = "seat";
      var element = document.getElementById("85");
      element.className = "seat";
      var element = document.getElementById("86");
      element.className = "seat";
      var element = document.getElementById("5"); 
      element.className = "seat"; 
      var element = document.getElementById("8"); 
      element.className = "seat";
      var element = document.getElementById("10"); 
      element.className = "seat";
      var element = document.getElementById("17"); 
      element.className = "seat";
      var element = document.getElementById("25"); 
      element.className = "seat";
      var element = document.getElementById("26"); 
      element.className = "seat";
      var element = document.getElementById("27"); 
      element.className = "seat";
      var element = document.getElementById("31"); 
      element.className = "seat";
      var element = document.getElementById("32"); 
      element.className = "seat";
      var element = document.getElementById("33"); 
      element.className = "seat";
      var element = document.getElementById("34"); 
      element.className = "seat";
      var element = document.getElementById("35"); 
      element.className = "seat";
      var element = document.getElementById("36"); 
      element.className = "seat";
    }
  
});
function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll('.row .seat.selected');

  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat));

  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex));

  

  selectedSeatsCount = selectedSeats.length;

  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}

function populateUI() {
  const selectedSeats = JSON.parse(localStorage.getItem('selectedSeats'));
  if (selectedSeats !== null && selectedSeats.length > 0) {
    seats.forEach((seat, index) => {
      if (selectedSeats.indexOf(index) > -1) {
        seat.classList.add('selected');
      }
    });
  }

  const selectedMovieIndex = localStorage.getItem('selectedMovieIndex');

  if (selectedMovieIndex !== null) {
    movieSelect.selectedIndex = selectedMovieIndex;
  }
}

movieSelect.addEventListener('change', (e) => {
  ticketPrice = +e.target.value;
  setMovieData(e.target.selectedIndex, e.target.value);
  updateSelectedCount();
});


container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {
    e.target.classList.toggle('selected');

    updateSelectedCount();
  }
});
function checkCount() {
   
    if (selectedSeatsCount < 1) {
      alert("First select the seats");  
      console.log(selectedSeatsCount)
    } else {
      var tot=(selectedSeatsCount * ticketPrice);
      alert("Click ok to pay "+tot);
      console.log(tot)
      const button1 = document.getElementById("submit1");
      button1.style.display="none";
      window.location.href = "/landing_page.html";
    }
}
function startTimer() {
 
  const show1StartTime = new Date();
  show1StartTime.setHours(11);
  show1StartTime.setMinutes(30);
  show1StartTime.setSeconds(0);

  const show2StartTime = new Date();
  show2StartTime.setHours(14);
  show2StartTime.setMinutes(30);
  show2StartTime.setSeconds(0);

  const show3StartTime = new Date();
  show3StartTime.setHours(18);
  show3StartTime.setMinutes(30);
  show3StartTime.setSeconds(0);

  const show4StartTime = new Date();
  show4StartTime.setHours(24);
  show4StartTime.setMinutes(00);
  show4StartTime.setSeconds(0);

  let nextShowStartTime;
  if (show1StartTime > new Date()) {
    nextShowStartTime = show1StartTime;
  } else if (show2StartTime > new Date()) {
    nextShowStartTime = show2StartTime;
  } else if (show3StartTime > new Date()) {
    nextShowStartTime = show3StartTime;
  }
  else if (show4StartTime > new Date()) {
    nextShowStartTime = show4StartTime;
  }

  const timer = setInterval(function() {

    
    const now = new Date();

    const distance = nextShowStartTime - now;

    const hours = Math.floor(distance / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    
    document.getElementById("timer").innerHTML = `${hours}h ${minutes}m ${seconds}s`;

    if (distance < 0) {
      clearInterval(timer);
      document.getElementById("timer").innerHTML = "The show has started!";
    }
  }, 1000);
}

updateSelectedCount();
