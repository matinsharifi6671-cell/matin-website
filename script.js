// ========================================
// متین وب - JavaScript کامل
// ========================================


// ========================================
// 1. حالت شب / روز با ذخیره‌سازی
// ========================================

const themeButton = document.getElementById("themeButton");

if (localStorage.getItem("theme") === "dark") {
  document.body.classList.add("dark");
  themeButton.textContent = "☀️ حالت روز";
}

themeButton.addEventListener("click", function () {
  document.body.classList.toggle("dark");

  if (document.body.classList.contains("dark")) {
    localStorage.setItem("theme", "dark");
    themeButton.textContent = "☀️ حالت روز";
  } else {
    localStorage.setItem("theme", "light");
    themeButton.textContent = "🌙 حالت شب";
  }
});


// ========================================
// 2. ساعت و تاریخ
// ========================================

const clock = document.getElementById("clock");
const date = document.getElementById("date");

function updateDateTime() {
  const now = new Date();

  clock.textContent = now.toLocaleTimeString("fa-IR");

  date.textContent = now.toLocaleDateString("fa-IR", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric"
  });
}

updateDateTime();
setInterval(updateDateTime, 1000);


// ========================================
// 3. شمارنده
// ========================================

const counter = document.getElementById("counter");
const increase = document.getElementById("increase");
const decrease = document.getElementById("decrease");
const reset = document.getElementById("reset");

let count = Number(localStorage.getItem("counter")) || 0;

counter.textContent = count;

increase.addEventListener("click", function () {
  count++;
  counter.textContent = count;
  localStorage.setItem("counter", count);
});

decrease.addEventListener("click", function () {
  count--;
  counter.textContent = count;
  localStorage.setItem("counter", count);
});

reset.addEventListener("click", function () {
  count = 0;
  counter.textContent = count;
  localStorage.setItem("counter", count);
});


// ========================================
// 4. لایک و دیسلایک
// ========================================

const votes = document.getElementById("votes");
const like = document.getElementById("like");
const dislike = document.getElementById("dislike");
const resetVotes = document.getElementById("resetVotes");
const voteMessage = document.getElementById("voteMessage");

let voteCount = Number(localStorage.getItem("votes")) || 0;

votes.textContent = voteCount;

like.addEventListener("click", function () {
  voteCount++;
  votes.textContent = voteCount;
  voteMessage.textContent = "❤️ ممنون که سایت رو دوست داشتی!";
  localStorage.setItem("votes", voteCount);
});

dislike.addEventListener("click", function () {
  voteCount--;
  votes.textContent = voteCount;
  voteMessage.textContent = "👍 ممنون از نظرت!";
  localStorage.setItem("votes", voteCount);
});

resetVotes.addEventListener("click", function () {
  voteCount = 0;
  votes.textContent = voteCount;
  voteMessage.textContent = "رأی‌ها پاک شدند.";
  localStorage.setItem("votes", 0);
});


// ========================================
// 5. لیست کارها
// ========================================

const todoForm = document.getElementById("todoForm");
const todoInput = document.getElementById("todoInput");
const todoList = document.getElementById("todoList");
const todoInfo = document.getElementById("todoInfo");

let todos = JSON.parse(localStorage.getItem("todos")) || [];

function show
