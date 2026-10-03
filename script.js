document.addEventListener("DOMContentLoaded", function () {

  // =========================
  // ساعت
  // =========================

  function updateClock() {

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    const now = new Date();

    if (clock) {
      clock.textContent = now.toLocaleTimeString("fa-IR");
    }

    if (date) {
      date.textContent = now.toLocaleDateString("fa-IR", {
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);


  // =========================
  // فهرست کارها
  // =========================

  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const todoInfo = document.getElementById("todoInfo");

  let todos = JSON.parse(localStorage.getItem("todos")) || [];

  function updateTodoCount() {

    if (todoInfo) {
      todoInfo.textContent =
        "تعداد کارها: " + todos.length;
    }
  }

  function saveTodos() {
    localStorage.setItem("todos", JSON.stringify(todos));
  }

  function renderTodos() {

    if (!todoList) return;

    todoList.innerHTML = "";

    todos.forEach(function (todo, index) {

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = todo;

      const button = document.createElement("button");

      button.type = "button";
      button.textContent = "حذف";

      button.addEventListener("click", function () {

        todos.splice(index, 1);

        saveTodos();
        renderTodos();

      });

      li.appendChild(span);
      li.appendChild(button);

      todoList.appendChild(li);

    });

    updateTodoCount();
  }

  if (todoForm && todoInput && todoList) {

    renderTodos();

    todoForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const text = todoInput.value.trim();

      if (!text) return;

      todos.push(text);

      saveTodos();
      renderTodos();

      todoInput.value = "";
      todoInput.focus();

    });
  }


  // =========================
  // جمله‌های انگیزشی
  // =========================

  const quote = document.getElementById("quote");
  const newQuote = document.getElementById("newQuote");

  const quotes = [
    "هر روز یک قدم جلوتر برو 🚀",
    "با تمرین، برنامه‌نویسی آسان‌تر می‌شود 💻",
    "ایده‌هایت را به کد تبدیل کن ✨",
    "اشتباه کردن بخشی از یادگیری است 💚",
    "یادگیری را ادامه بده 👑",
    "هیچ‌کس از روز اول حرفه‌ای نبوده است 🔥"
  ];

  if (newQuote && quote) {

    newQuote.addEventListener("click", function () {

      const random =
        Math.floor(Math.random() * quotes.length);

      quote.textContent = quotes[random];

    });
  }


  // =========================
  // پیام شخصی
  // =========================

  const message = document.getElementById("message");
  const showMessage = document.getElementById("showMessage");
  const customMessage = document.getElementById("customMessage");

  if (message && showMessage && customMessage) {

    showMessage.addEventListener("click", function () {

      const text = message.value.trim();

      if (!text) {

        customMessage.textContent =
          "لطفاً اول یک پیام بنویس.";

        return;
      }

      customMessage.textContent =
        "💚 پیام تو: " + text;

    });
  }


  // =========================
  // رنگ سایت
  // =========================

  const colorButtons =
    document.querySelectorAll(".color-button");

  colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const color = button.dataset.color;

      if (color === "blue") {

        document.documentElement.style.setProperty(
          "--primary",
          "#3b82f6"
        );

        document.documentElement.style.setProperty(
          "--primary-dark",
          "#2563eb"
        );

        document.documentElement.style.setProperty(
          "--secondary",
          "#60a5fa"
        );

      }

      else if (color === "pink") {

        document.documentElement.style.setProperty(
          "--primary",
          "#ec4899"
        );

        document.documentElement.style.setProperty(
          "--primary-dark",
          "#db2777"
        );

        document.documentElement.style.setProperty(
          "--secondary",
          "#f472b6"
        );

      }

      else {

        document.documentElement.style.setProperty(
          "--primary",
          "#22c55e"
        );

        document.documentElement.style.setProperty(
          "--primary-dark",
          "#16a34a"
        );

        document.documentElement.style.setProperty(
          "--secondary",
          "#00ff88"
        );

      }

    });

  });


  // =========================
  // دکمه رفتن به بالا
  // =========================

  const topButton =
    document.getElementById("topButton");

  if (topButton) {

    window.addEventListener("scroll", function () {

      if (window.scrollY > 400) {

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

  }


  // =========================
  // فرم تماس
  // =========================

  const contactForm =
    document.getElementById("contactForm");

  const contactResult =
    document.getElementById("contactResult");

  if (contactForm && contactResult) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      contactResult.textContent =
        "✅ پیام شما آماده ارسال است!";

      contactForm.reset();

    });

  }


  // =========================
  // ربات
  // =========================

  const chatToggle =
    document.getElementById("chat-toggle");

  const chatWindow =
    document.getElementById("chat-window");

  const chatClose =
    document.getElementById("chat-close");

  const chatForm =
    document.getElementById("chat-form");

  const chatInput =
    document.getElementById("chat-input");

  const chatMessages =
    document.getElementById("chat-messages");


  if (chatWindow) {
    chatWindow.hidden = true;
  }


  function addChatMessage(text, type) {

    if (!chatMessages) return;

    const message =
      document.createElement("div");

    message.className =
      type === "user"
        ? "user-message"
        : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
      chatMessages.scrollHeight;
  }


  function showTyping() {

    if (!chatMessages) return;

    const typing =
      document.createElement("div");

    typing.id = "typing-message";

    typing.className =
      "bot-message typing-message";

    typing.textContent =
      "🤖 در حال تایپ...";

    chatMessages.appendChild(typing);

    chatMessages.scrollTop =
      chatMessages.scrollHeight;
  }


  function removeTyping() {

    const typing =
      document.getElementById("typing-message");

    if (typing) {
      typing.remove();
    }
  }


  if (chatToggle && chatWindow) {

    chatToggle.addEventListener("click", function () {

      chatWindow.hidden = false;

      if (chatInput) {
        setTimeout(function () {
          chatInput.focus();
        }, 100);
      }

    });
  }


  if (chatClose && chatWindow) {

    chatClose.addEventListener("click", function () {

      chatWindow.hidden = true;

    });
  }


  function getBotAnswer(message) {

    const text =
      message.toLowerCase().trim();


    if (
      text.includes("سلام") ||
      text.includes("hello")
    ) {
      return "سلام 👋 به سلطان وب خوش اومدی! 👑";
    }


    if (text.includes("html")) {
      return "HTML ساختار اصلی صفحات وب را می‌سازد. 🌐";
    }


    if (text.includes("css")) {
      return "CSS برای طراحی و زیباسازی سایت استفاده می‌شود. 🎨";
    }


    if (
      text.includes("javascript") ||
      text.includes("جاوا") ||
      text.includes("جاوا اسکریپت")
    ) {
      return "JavaScript باعث می‌شود سایت تعاملی و پویا شود. ⚡";
    }


    if (
      text.includes("مهارت") ||
      text.includes("مهارت‌ها")
    ) {
      return "مهارت‌های فعلی سلطان وب شامل HTML، CSS و JavaScript است. 💻";
    }


    if (
      text.includes("پروژه") ||
      text.includes("پروژه‌ها")
    ) {
      return "برای دیدن پروژه‌ها وارد صفحه «پروژه‌ها» شو. 🚀";
    }


    if (
      text.includes("تماس") ||
      text.includes("ارتباط")
    ) {
      return "برای ارتباط با متین وارد صفحه «تماس» شو. 📩";
    }


    if (
      text.includes("سلطان وب") ||
      text.includes("سایت")
    ) {
      return "سلطان وب یک سایت شخصی و تمرینی برای یادگیری برنامه‌نویسی است. 👑💻";
    }


    if (
      text.includes("کمک") ||
      text.includes("راهنمایی")
    ) {
      return "حتماً! درباره HTML، CSS، JavaScript یا طراحی سایت ازم سؤال کن. 🚀";
    }


    if (text.includes("متین")) {
      return "متین، ادامه بده! 🔥 داری سایتت رو قدم‌به‌قدم حرفه‌ای‌تر می‌کنی.";
    }


    return "جالب بود 🤖 هنوز جواب این سؤال رو یاد نگرفتم. درباره HTML، CSS، JavaScript یا سلطان وب ازم بپرس.";

  }


  function sendChatMessage(text) {

    if (!text || !chatMessages) return;

    addChatMessage(text, "user");

    showTyping();

    setTimeout(function () {

      removeTyping();

      const answer =
        getBotAnswer(text);

      addChatMessage(answer, "bot");

    }, 900);
  }


  if (chatForm && chatInput) {

    chatForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const text =
        chatInput.value.trim();

      if (!text) return;

      chatInput.value = "";

      sendChatMessage(text);

    });
  }


  const chatButtons =
    document.querySelectorAll(
      ".chat-questions button, .chat-suggestions button"
    );


  chatButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const question =
        button.dataset.question ||
        button.textContent.trim();

      if (!question) return;

      if (chatWindow) {
        chatWindow.hidden = false;
      }

      sendChatMessage(question);

    });

  });


  console.log("👑 SULTAN WEB READY!");

});
