//Elements
const seats = document.querySelectorAll(".row .seat:not(.occupied)");
const movieEl = document.getElementById("movie-selection");

//output elements
const seatscountEl = document.getElementById("seats");
const totalEl = document.getElementById("total");

let seatcount = 0;
let price = 0;
let total = 0;

//functions
function updatemessage() {
  total = seatcount * price;
  seatscountEl.innerText = seatcount;
  totalEl.innerText = total;
}

movieEl.addEventListener("change", function () {
  price = Number(movieEl.value);
  console.log(price);
  updatemessage();

  if (movieEl.value == 100) {
    body.style.backgroundImage = "url('../assets/avatar.jpg')";
  } else if (movieEl.value == 200) {
    body.style.backgroundImage = "url('../assets/sp.jpg')";
  } else if (movieEl.value == 300) {
    body.style.backgroundImage = "url('../assets/av.jpg')";
  } else if (movieEl.value == 400) {
    body.style.backgroundImage = "url('../assets/do.webp')";
  } else {
    body.style.backgroundColor = "rgb(92, 43, 226)";
  }
});

seats.forEach((item) => {
  item.addEventListener("click", function (e) {
    if (e.target.classList.contains("selected")) {
      e.target.classList.remove("selected");
      seatcount = document.querySelectorAll(".row .seat.selected").length;
      console.log(seatcount);
      updatemessage();
    } else {
      e.target.classList.add("selected");
      seatcount = document.querySelectorAll(".row .seat.selected").length;
      console.log(seatcount);
      updatemessage();
    }
  });
  seatcount = document.querySelectorAll(".row.seat.selected").length;
  seatscountEl.innerText = seatcount;
  price = Number(movieEl.value);
  total = seatcount * price;
  totalEl.innerText = total;
  console.log(total);
});
