// ================================
// حالت شب / روز
// ================================

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    themeButton.textContent = "☀️ حالت روز";
  } else {
    themeButton.textContent = "🌙 حالت شب";
  }
});
