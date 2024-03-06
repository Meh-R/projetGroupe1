function changeBackgroundColor() {
  let body = document.querySelector(".body");
  let footer = document.querySelector("footer");
  let fourtContainer = document.querySelector(".fourth-container");
  body.classList.toggle("bg-black");
  footer.classList.toggle("bg-black");
  fourtContainer.classList.toggle("bg-black");
}

function changeBackgroundColorHeader() {
  let header = document.querySelector(".header");
  header.classList.toggle("hd-black");
}

let button2 = document.querySelector(".header-container-button");
button2.addEventListener("click", changeBackgroundColor);
button2.addEventListener("click", changeBackgroundColorHeader);
