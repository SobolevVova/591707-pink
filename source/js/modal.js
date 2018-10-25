var btnForm = document.querySelector(".button-form");
var popupOk = document.querySelector(".modal-ok");
var popupError = document.querySelector(".modal-error");
var errorClose = document.querySelector(".button-error-close");
var okClose = document.querySelector(".button-ok-close");

btnForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.add("modal-error__show");
});
errorClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupError.classList.remove("modal-error__show");
});
btnForm.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupOk.classList.add("modal-ok__show");
});
okClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  popupOk.classList.remove("modal-ok__show");
});
