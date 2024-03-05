function changeBackgroundColor() {
  let body = document.querySelector(".body");

  body.classList.toggle("bg-black");
}

let button2 = document.querySelector(".header-container-button");
button2.addEventListener("click", changeBackgroundColor);
