function sortear() {
  const min = Math.ceil(document.querySelector(".inpt1").value);
  const max = Math.floor(document.querySelector(".inpt2").value);
  const result = Math.floor(Math.random() * (max - min) + min);
  const number = document.querySelector("span");
  number.innerHTML = result;

  displayviwer();
}

function displayviwer() {
  const displaybox = document.querySelector(".box");
  const marginglogo = document.querySelector(".logo");
  displaybox.style.display = "block";
  marginglogo.style.marginTop = "58px";
}

function copiar() {
  const number = document.querySelector("span");
  navigator.clipboard.writeText(number.innerText);
}

const box = document.querySelector(".box");
const btn = document.querySelector(".btn");

box.addEventListener("click", copiar);
btn.addEventListener("click", sortear);
