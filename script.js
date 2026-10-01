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

function showTodos() {
  todoList.innerHTML = "";

  todos.forEach(function (todo, index) {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.textContent = todo;

    const button = document.createElement("button");
    button.textContent = "❌";

    button.addEventListener("click", function () {
      todos.splice(index, 1);
      localStorage.setItem("todos", JSON.stringify(todos));
      showTodos();
    });

    li.appendChild(span);
    li.appendChild(button);

    todoList.appendChild(li);
  });

  todoInfo.textContent = `تعداد کارها: ${todos.length}`;
}

todoForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newTodo = todoInput.value.trim();

  if (newTodo === "") {
    return;
  }

  todos.push(newTodo);

  localStorage.setItem("todos", JSON.stringify(todos));

  todoInput.value = "";

  showTodos();
});

showTodos();


// ========================================
// 6. تغییر رنگ سایت
// ========================================

const colorButtons = document.querySelectorAll("[data-color]");

const colors = {
  default: {
    primary: "#755cff",
    primaryDark: "#5940df",
    secondary: "#00c2ff",
    accent: "#a78bfa"
  },

  blue: {
    primary: "#2563eb",
    primaryDark: "#1d4ed8",
    secondary: "#06b6d4",
    accent: "#60a5fa"
  },

  pink: {
    primary: "#db2777",
    primaryDark: "#be185d",
    secondary: "#a855f7",
    accent: "#f472b6"
  },

  green: {
    primary: "#16a34a",
    primaryDark: "#15803d",
    secondary: "#06b6d4",
    accent: "#4ade80"
  }
};

function changeColor(colorName) {
  const color = colors[colorName];

  if (!color) return;

  document.documentElement.style.setProperty(
    "--primary",
    color.primary
  );

  document.documentElement.style.setProperty(
    "--primary-dark",
    color.primaryDark
  );

  document.documentElement.style.setProperty(
    "--secondary",
    color.secondary
  );

  document.documentElement.style.setProperty(
    "--accent",
    color.accent
  );

  localStorage.setItem("siteColor", colorName);
}

colorButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const colorName = button.dataset.color;
    changeColor(colorName);
  });
});

const savedColor = localStorage.getItem("siteColor");

if (savedColor) {
  changeColor(savedColor);
}


// ========================================
// 7. جمله انگیزشی
// ========================================

const quote = document.getElementById("quote");
const newQuote = document.getElementById("newQuote");

const quotes = [
  "هر روز یک قدم کوچک، یعنی یک قدم به جلو.",
  "با تمرین، برنامه‌نویسی ساده‌تر می‌شود.",
  "اشتباه کردن بخشی از یادگیری است.",
  "امروز می‌تواند شروع یک مهارت جدید باشد.",
  "کدی که امروز یاد می‌گیری، پایه‌ای برای فرداست."
];

newQuote.addEventListener("click", function () {
  const randomIndex = Math.floor(Math.random() * quotes.length);

  quote.textContent = quotes[randomIndex];
});


// ========================================
// 8. نمایش پیام
// ========================================

const showMessage = document.getElementById("showMessage");
const message = document.getElementById("message");

showMessage.addEventListener("click", function () {
  message.textContent =
    "🎉 سلام متین! به بخش پیام سایت خوش آمدی.";
});


// ========================================
// 9. دکمه رفتن به بالای صفحه
// ========================================

const topButton = document.getElementById("topButton");

window.addEventListener("scroll", function () {
  if (window.scrollY > 300) {
    topButton.classList.add("show");
  } else {
    topButton.classList.remove("show");
  }
});

topButton.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


// ========================================
// 10. چت‌بات سایت
// ========================================

const chatToggle = document.getElementById("chat-toggle");
const chatWindow = document.getElementById("chat-window");
const chatClose = document.getElementById("chat-close");
const chatMessages = document.getElementById("chat-messages");
const chatForm = document.getElementById("chat-form");
const chatInput = document.getElementById("chat-input");
const questionButtons = document.querySelectorAll(
  "[data-question]"
);

function openChat() {
  chatWindow.hidden = false;
  chatToggle.setAttribute("aria-expanded", "true");
}

function closeChat() {
  chatWindow.hidden = true;
  chatToggle.setAttribute("aria-expanded", "false");
}

chatToggle.addEventListener("click", function () {
  if (chatWindow.hidden) {
    openChat();
  } else {
    closeChat();
  }
});

chatClose.addEventListener("click", function () {
  closeChat();
});


function addChatMessage(text, type) {
  const messageElement = document.createElement("div");

  messageElement.className =
    type === "user"
      ? "user-message"
      : "bot-message";

  messageElement.textContent = text;

  chatMessages.appendChild(messageElement);

  chatMessages.scrollTop = chatMessages.scrollHeight;
}


function getBotAnswer(question) {
  const q = question.toLowerCase();

  if (
    q.includes("درباره سایت") ||
    q.includes("سایت")
  ) {
    return "🚀 این سایت شخصی متین است و برای تمرین طراحی سایت و برنامه‌نویسی ساخته شده.";
  }

  if (
    q.includes("چه کار") ||
    q.includes("راهنما") ||
    q.includes("امکانات")
  ) {
    return "📚 می‌توانی ساعت را ببینی، شمارنده را امتحان کنی، کار اضافه کنی، رنگ سایت را تغییر بدهی و حالت شب را فعال کنی.";
  }

  if (
    q.includes("سلام") ||
    q.includes("hello")
  ) {
    return "👋 سلام! خوش آمدی به متین وب!";
  }

  if (
    q.includes("متین")
  ) {
    return "😎 متین در حال یادگیری طراحی سایت و برنامه‌نویسی است.";
  }

  return "🤖 پیامت رو دریافت کردم! برای راهنما یکی از گزینه‌های بالا رو امتحان کن.";
}


function sendChat(question) {
  if (!question.trim()) return;

  addChatMessage(question, "user");

  const answer = getBotAnswer(question);

  setTimeout(function () {
    addChatMessage(answer, "bot");
  }, 300);
}


questionButtons.forEach(function (button) {
  button.addEventListener("click", function () {
    const question = button.dataset.question;

    sendChat(question);
  });
});


chatForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const question = chatInput.value.trim();

  if (question === "") return;

  sendChat(question);

  chatInput.value = "";
});


// ========================================
// پایان JavaScript
// ========================================

console.log("🚀 سایت متین با موفقیت اجرا شد!");
