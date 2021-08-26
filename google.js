var button = document.querySelector(".bar");

console.log(button);

button.addEventListener("click", popUp);

function popUp() {
  var navBar = document.querySelector(".all");

  navBar.classList.toggle("hide");
}
