const botaoIncrementar = document.getElementById("incrementar");
const botaoDecrementar = document.getElementById("decrementar");
const botaoResetar = document.getElementById("reset");
const contador = document.getElementById("contador");

botaoIncrementar.addEventListener("click", () => {
  contador.innerText++;
});
botaoDecrementar.addEventListener("click", () => {
  contador.innerText--;
});
botaoResetar.addEventListener("click", () => {
  contador.innerText = 0;
});
