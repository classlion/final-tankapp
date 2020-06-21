const toggle = document.getElementsByClassName("navbar-toggle");

toggle[0].addEventListener("click", function(event) {
  event.preventDefault();
  this.classList.toggle("is-active");
});

const closeNavbarMobile = document.getElementsByClassName("close");

closeNavbarMobile[0].addEventListener("click", function(event) {
  event.preventDefault();
  toggle[0].classList.remove("is-active");
});
