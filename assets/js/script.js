const emojis = document.getElementsByClassName("emojis");

document.querySelector(".card").addEventListener("click", () => {
  document.querySelector(".card").classList.toggle("open");
  for (let i = 0; i < emojis.length; i++) {
    emojis[i].classList.toggle("float");
  }
});
