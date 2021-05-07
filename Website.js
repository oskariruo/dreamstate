function navToggle() {
  var x = document.getElementById("Main-nav");
  if (x.className === "main-nav") {
    x.className += " responsive";
  } else {
    x.className = "main-nav";
  }
}

function togglePopup() {
  document.getElementById("popup-h1").classList.toggle("active");
}
