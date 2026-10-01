
function loadData(key, fallback) {
  try {
    const value = localStorage.getItem(key);
    return value === null ? fallback : JSON.parse(value);
  } catch {
    return fallback;
  }
}

function saveData(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch {}
}

// حالت شب و روز
let dark = loadData("matinDark", false) === true;
const themeButton = document.getElementById("themeButton");

function renderTheme() {
  document.body.classList.toggle("dark", dark);
  if (themeButton) {
    themeButton.textContent = dark ? "☀️ حالت روز" : "🌙 حالت شب";
  }
}

if (themeButton) {
  themeButton.addEventListener("click", function() {
    dark = !dark;
    saveData("matinDark", dark);
    renderTheme();
  });
}
renderTheme();

// ساعت و تاریخ
function updateClock() {
  const clock = document.getElementById("clock");
  const date = document.getElementById("date");
  const now = new Date();

  if (clock) clock.textContent = now.toLocaleTimeString("fa-IR");
  if (date) {
    date.textContent = now.toLocaleDateString("fa-IR", {
      year: "numeric",
      month: "long",
      day: "numeric"
    });
  }
}
updateClock();
if (document.getElementById("clock")) {
  setInterval(updateClock, 1000);
}

// شمارنده
let counter = Math.max(0, Number(loadData("matinCounter", 0)) || 0);
const counterDisplay = document.getElementById("counter");

function renderCounter() {
  if (counterDisplay) counterDisplay.textContent = counter;
}
function changeCounter(amount) {
  counter = Math.max(0, counter + amount);
  saveData("matinCounter", counter);
  renderCounter();
}

document.getElementById("increase")?.addEventListener("click", () => changeCounter(1));
document.getElementById("decrease")?.addEventListener("click", () => changeCounter(-1));
document.getElementById("reset")?.addEventListener("click", () => {
  counter = 0;
  saveData("matinCounter", counter);
  renderCounter();
});
renderCounter();

// لایک و دیسلایک
let votes = loadData("matinVotes", {like: 0, dislike: 0});
if (!votes || typeof votes !== "object" || Array.isArray(votes)) {
  votes = {like: 0, dislike: 0};
}
votes.like = Math.max(0, Number(votes.like) || 0);
votes.dislike = Math.max(0, Number(votes.dislike) || 0);

function renderVotes() {
  const display = document.getElementById("votes");
  if (display) display.textContent = `👍 ${votes.like} | 👎 ${votes.dislike}`;
}

function vote(type) {
  if (type !== "like" && type !== "dislike") return;
  votes[type]++;
  saveData("matinVotes", votes);
  renderVotes();
  const message = document.getElementById("voteMessage");
  if (message) message.textContent = "رأی آزمایشی تو ثبت شد!";
}

document.getElementById("like")?.addEventListener("click", () => vote("like"));
document.getElementById("dislike")?.addEventListener("click", () => vote("dislike"));
document.getElementById("resetVotes")?.addEventListener("click", () => {
  votes = {like: 0, dislike: 0};
  saveData("matinVotes", votes);
  renderVotes();
});
renderVotes();

// فهرست کارها
let todos = loadData("matinTodos", []);
if (!Array.isArray(todos)) todos = [];

function renderTodos() {
  const list = document.getElementById("todoList");
  if (!list) return;
  list.replaceChildren();

  todos.forEach((todo, index) => {
    const item = document.createElement("li");
    if (todo.done) item.classList.add("done");

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = Boolean(todo.done);
    checkbox.setAttribute("aria-label", "انجام شد");
    checkbox.addEventListener("change", () => {
      todos[index].done = checkbox.checked;
      saveData("matinTodos", todos);
      renderTodos();
    });

    const text = document.createElement("span");
    text.textContent = todo.text;

    const remove = document.createElement("button");
    remove.textContent = "حذف";
    remove.className = "delete-btn";
    remove.addEventListener("click", () => {
      todos.splice(index, 1);
      saveData("matinTodos", todos);
      renderTodos();
    });

    item.append(checkbox, text, remove);
    list.appendChild(item);
  });

  const info = document.getElementById("todoInfo");
  if (info) {
    info.textContent = `تعداد کارها: ${todos.length} | انجام‌شده: ${todos.filter(t => t.done).length}`;
  }
}

document.getElementById("todoForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const input = document.getElementById("todoInput");
  const text = input.value.trim();
  if (!text) return;

  todos.push({text, done: false});
  saveData("matinTodos", todos);
  input.value = "";
  renderTodos();
});
renderTodos();

// رنگ پس‌زمینه
let bgColor = loadData("matinColor", "default");
const allowedColors = ["default", "blue", "pink", "green"];

function renderColor() {
  document.body.classList.remove("bg-blue", "bg-pink", "bg-green");
  if (["blue", "pink", "green"].includes(bgColor)) {
    document.body.classList.add("bg-" + bgColor);
  }
}

document.querySelectorAll("[data-color]").forEach(button => {
  button.addEventListener("click", () => {
    const color = button.dataset.color;
    if (!allowedColors.includes(color)) return;
    bgColor = color;
    saveData("matinColor", bgColor);
    renderColor();
  });
});
renderColor();

// پیام
document.getElementById("showMessage")?.addEventListener("click", () => {
  document.getElementById("message").textContent =
    "سلام متین! به یادگیری ادامه بده! 🚀";
});

// جمله انگیزشی
const quotes = [
  "هر روز یک قدم به هدفت نزدیک‌تر شو.",
  "اشتباه کردن بخشی از یادگیری است.",
  "با تمرین، کارهای سخت آسان‌تر می‌شوند.",
  "یک پروژه کوچک، شروع یک مهارت بزرگ است.",
  "صبور باش و به یادگیری ادامه بده."
];

document.getElementById("newQuote")?.addEventListener("click", () => {
  const quote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById("quote").textContent = quote;
});

// فرم تماس آزمایشی
document.getElementById("contactForm")?.addEventListener("submit", event => {
  event.preventDefault();
  const name = document.getElementById("name").value.trim();
  const result = document.getElementById("formResult");
  result.textContent = `متشکرم ${name}! فرم آزمایشی کامل شد؛ پیامی ارسال نشده است.`;
});

// بازگشت به بالا
const topButton = document.getElementById("topButton");
if (topButton) {
  window.addEventListener("scroll", () => {
    topButton.classList.toggle("visible", window.scrollY > 300);
  });
  topButton.addEventListener("click", () => {
    window.scrollTo({top: 0, behavior: "smooth"});
  });
}

/* انیمیشن ظاهر شدن بخش‌ها هنگام اسکرول */
document.addEventListener("DOMContentLoaded", function () {
  const elements = document.querySelectorAll(
    "main section, main article, .card, .skill-card"
  );

  if (!("IntersectionObserver" in window)) {
    elements.forEach(function (element) {
      element.classList.add("visible");
    });
    return;
  }

  const observer = new IntersectionObserver(
    function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    {
      threshold: 0.12
    }
  );

  elements.forEach(function (element) {
    element.classList.add("reveal-on-scroll");
    observer.observe(element);
  });
});

/* ===== مغز چت‌بات متین ===== */

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("chat-toggle");
  const close = document.getElementById("chat-close");
  const windowChat = document.getElementById("chat-window");
  const form = document.getElementById("chat-form");
  const input = document.getElementById("chat-input");
  const messages = document.getElementById("chat-messages");

  // اگر چت‌بات در این صفحه وجود ندارد، کاری انجام نده
  if (
    !toggle ||
    !close ||
    !windowChat ||
    !form ||
    !input ||
    !messages
  ) {
    return;
  }

  function openChat() {
    windowChat.hidden = false;
    toggle.hidden = true;
    input.focus();
  }

  function closeChat() {
    windowChat.hidden = true;
    toggle.hidden = false;
    toggle.focus();
  }

  toggle.addEventListener("click", openChat);
  close.addEventListener("click", closeChat);

  // نمایش پیام بدون اجرای کدهای واردشده توسط کاربر
  function addMessage(text, type) {
    const message = document.createElement("div");
    message.className =
      type === "user" ? "user-message" : "bot-message";

    message.textContent = text;
    messages.appendChild(message);
    messages.scrollTop = messages.scrollHeight;
  }

  function normalize(text) {
    return text
      .toLowerCase()
      .replace(/[؟?!.,،؛:]/g, "")
      .trim();
  }

  function getAnswer(message) {
    const text = normalize(message);

    if (/سلام|درود|صبح بخیر|عصر بخیر/.test(text)) {
      return "سلام دوست من! 👋 به سایت متین خوش اومدی.";
    }

    if (/اسمت چیه|اسم تو چیه|تو کی هستی|کی هستی/.test(text)) {
      return "من دستیار مجازی سایت متین هستم! 🤖";
    }

    if (/متین کیه|درباره سایت|درباره متین|این سایت/.test(text)) {
      return "این سایت متعلق به متینه و برای یادگیری برنامه‌نویسی و معرفی پروژه‌ها ساخته شده. 💻";
    }

    if (/چه کارهایی بلدی|راهنما|کمک|چیکار میکنی/.test(text)) {
      return "می‌تونم درباره سایت راهنمایی‌ات کنم. مثلاً بپرس سایت درباره چیه یا چطور از بخش‌ها استفاده کنی.";
    }

    if (/برنامه نویسی|برنامه‌نویسی|کدنویسی|جاوااسکریپت|javascript/.test(text)) {
      return "برنامه‌نویسی یعنی با نوشتن کد به کامپیوتر دستور بدیم. 💻";
    }

    if (/ساعت چنده|ساعت/.test(text)) {
      return "ساعت دستگاهت رو نگاه کن 🕒 می‌تونی ساعت سایت رو هم بررسی کنی.";
    }

    if (/ممنون|مرسی|متشکرم/.test(text)) {
      return "خواهش می‌کنم! 😊 هر سؤال دیگه‌ای داشتی بپرس.";
    }

    if (/خداحافظ|فعلا|بای/.test(text)) {
      return "فعلاً دوست من! 👋 هر وقت خواستی برگرد.";
    }

    if (/خوبی|حالت چطوره/.test(text)) {
      return "ممنون که پرسیدی! 😊 من آماده‌ام بهت کمک کنم.";
    }

    return "هنوز جواب این سؤال رو بلد نیستم! 🤔 می‌تونی درباره سایت، متین یا برنامه‌نویسی سؤال کنی.";
  }

  function sendMessage(text) {
    const message = text.trim();

    if (!message) return;

    addMessage(message, "user");
    input.value = "";

    // مکث کوتاه برای طبیعی‌تر شدن گفتگو
    window.setTimeout(function () {
      addMessage(getAnswer(message), "bot");
    }, 350);
  }

  form.addEventListener("submit", function (event) {
    event.preventDefault();
    sendMessage(input.value);
  });

  // دکمه‌های سؤال آماده
  document.querySelectorAll("#chatbot [data-question]")
    .forEach(function (button) {
      button.addEventListener("click", function () {
        openChat();
        sendMessage(button.dataset.question);
      });
    });
});
