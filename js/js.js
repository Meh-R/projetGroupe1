function changeBackgroundColor() {
  let body = document.querySelector(".body");
  let footer = document.querySelector("footer");
  body.classList.toggle("bg-black");
  footer.classList.toggle("bg-black");
}

function changeBackgroundColorHeader() {
  let header = document.querySelector(".header");
  header.classList.toggle("hd-black");
}

let button2 = document.querySelector(".header-container-button");
button2.addEventListener("click", changeBackgroundColor);
button2.addEventListener("click", changeBackgroundColorHeader);

function modalefunction() {
  modaleVar = document.querySelector(".Modale");
  modaleVar.style.visibility =
    modaleVar.style.visibility == "visible" ? "hidden" : "visible";
}
