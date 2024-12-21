function sortear() {
  const text2 = document.querySelector(".text2");
  const min = Math.ceil(document.querySelector(".inpt1").value);
  const max = Math.floor(document.querySelector(".inpt2").value);
  const result = Math.floor(Math.random() * (max - min) + min);
  const number = document.querySelector("span");
  number.innerHTML = result;
  text2.style.display = "flex";
  
  if (min > max) {
  const text2 = document.querySelector(".text2");
  number.innerHTML = "O segundo numero deve ser maior que o primeiro";
  text2.style.display = "none";
  number.style.fontSize = "24px";
  number.style.paddingBottom = "19px";
  number.style.paddingTop = "16px";
  number.style.paddingRight = "5px";
  number.style.paddingLeft = "5px";
}

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
