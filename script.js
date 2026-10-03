/* =========================================
👑 SULTAN WEB — JAVASCRIPT
========================================= */

document.addEventListener("DOMContentLoaded", function () {

  /* =========================================
  🌙 حالت شب / روز
  ========================================= */

  const themeButton = document.getElementById("themeButton");

  if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeButton.textContent = "☀️ حالت روز";
    } else {
      document.body.classList.remove("dark");
      themeButton.textContent = "🌙 حالت شب";
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
  }


  /* =========================================
  🕐 ساعت و تاریخ
  ========================================= */

  function updateClock() {

    const clock = document.getElementById("clock");
    const date = document.getElementById("date");

    const now = new Date();

    if (clock) {

      clock.textContent = now.toLocaleTimeString("fa-IR", {
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit"
      });

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


  /* =========================================
  📊 شمارنده
  ========================================= */

  const counter = document.getElementById("counter");

  if (counter) {

    let count = Number(counter.textContent) || 0;

    const target = Number(counter.dataset.target) || count;

    if (count < target) {

      const interval = setInterval(function () {

        count++;

        counter.textContent = count;

        if (count >= target) {
          clearInterval(interval);
        }

      }, 30);

    }

  }


  /* =========================================
  👍 لایک و 👎 دیسلایک
  ========================================= */

  const likeButton = document.getElementById("likeButton");
  const dislikeButton = document.getElementById("dislikeButton");

  const likeCount = document.getElementById("likeCount");
  const dislikeCount = document.getElementById("dislikeCount");

  if (likeButton && likeCount) {

    likeButton.addEventListener("click", function () {

      let count = Number(likeCount.textContent) || 0;

      count++;

      likeCount.textContent = count;

    });

  }

  if (dislikeButton && dislikeCount) {

    dislikeButton.addEventListener("click", function () {

      let count = Number(dislikeCount.textContent) || 0;

      count++;

      dislikeCount.textContent = count;

    });

  }


  /* =========================================
  📝 TODO LIST
  ========================================= */

  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");

  if (todoForm && todoInput && todoList) {

    todoForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const text = todoInput.value.trim();

      if (!text) {
        return;
      }

      const li = document.createElement("li");

      const span = document.createElement("span");

      span.textContent = text;

      const deleteButton = document.createElement("button");

      deleteButton.type = "button";
      deleteButton.textContent = "حذف";

      deleteButton.addEventListener("click", function () {

        li.remove();

      });

      li.appendChild(span);
      li.appendChild(deleteButton);

      todoList.appendChild(li);

      todoInput.value = "";

      todoInput.focus();

    });

  }


  /* =========================================
  🎨 تغییر رنگ
  ========================================= */

  const colorButtons = document.querySelectorAll("[data-color]");

  colorButtons.forEach(function (button) {

    button.addEventListener("click", function () {

      const color = button.dataset.color;

      if (color) {

        document.documentElement.style.setProperty(
          "--primary",
          color
        );

      }

    });

  });


  /* =========================================
  💬 نقل قول
  ========================================= */

  const quoteButton = document.getElementById("quoteButton");
  const quoteText = document.getElementById("quoteText");

  const quotes = [
    "هر روز یک قدم جلوتر برو 🚀",
    "با تمرین، برنامه‌نویسی آسان‌تر می‌شود 💻",
    "ایده‌هایت را به کد تبدیل کن ✨",
    "هیچ برنامه‌نویسی از روز اول حرفه‌ای نبوده است 🔥",
    "یادگیری را ادامه بده 👑"
  ];

  if (quoteButton && quoteText) {

    quoteButton.addEventListener("click", function () {

      const randomIndex =
        Math.floor(Math.random() * quotes.length);

      quoteText.textContent = quotes[randomIndex];

    });

  }


  /* =========================================
  💡 پیام ویژه
  ========================================= */

  const messageButton = document.getElementById("messageButton");
  const specialMessage = document.getElementById("specialMessage");

  if (messageButton && specialMessage) {

    messageButton.addEventListener("click", function () {

      specialMessage.textContent =
        "🔥 متین، ادامه بده! سایت سلطان وب روزبه‌روز حرفه‌ای‌تر می‌شود.";

    });

  }


  /* =========================================
  ⬆️ رفتن به بالای صفحه
  ========================================= */

  const topButton = document.getElementById("topButton");

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


  /* =========================================
  🤖 دستیار سلطان وب
  ========================================= */

  const chatToggle = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("chat-window");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.querySelector("#chat-form input");
  const chatMessages = document.getElementById("chat-messages");

  const chatClose = document.querySelector(
    "#chat-window .chat-close"
  );


  /* -----------------------------------------
  🚫 مهم:
  دستیار هنگام ورود بسته باشد
  ----------------------------------------- */

  if (chatWindow) {
    chatWindow.hidden = true;
  }


  /* -----------------------------------------
  ➕ اضافه کردن پیام
  ----------------------------------------- */

  function addChatMessage(text, type) {

    if (!chatMessages) {
      return;
    }

    const message = document.createElement("div");

    message.className =
      type === "user"
        ? "user-message"
        : "bot-message";

    message.textContent = text;

    chatMessages.appendChild(message);

    chatMessages.scrollTop =
      chatMessages.scrollHeight;
  }


  /* -----------------------------------------
  👋 پیام شروع دستیار
  ----------------------------------------- */

  let welcomeShown = false;

  function showWelcomeMessage() {

    if (welcomeShown) {
      return;
    }

    addChatMessage(
      "سلام 👋 من دستیار سلطان وب هستم! 🤖 هر سؤالی درباره سایت یا برنامه‌نویسی داری بپرس.",
      "bot"
    );

    welcomeShown = true;
  }


  /* -----------------------------------------
  🤖 باز و بسته کردن دستیار
  ----------------------------------------- */

  if (chatToggle && chatWindow) {

    chatToggle.addEventListener("click", function () {

      const isClosed = chatWindow.hidden;

      chatWindow.hidden = !isClosed;

      if (isClosed) {

        showWelcomeMessage();

        if (chatInput) {
          setTimeout(function () {
            chatInput.focus();
          }, 100);
        }

      }

    });

  }


  /* -----------------------------------------
  ❌ دکمه بستن
  ----------------------------------------- */

  if (chatClose && chatWindow) {

    chatClose.addEventListener("click", function () {

      chatWindow.hidden = true;

    });

  }


  /* -----------------------------------------
  💬 پاسخ دستیار
  ----------------------------------------- */

  function getBotAnswer(message) {

    const text = message.toLowerCase();

    if (
      text.includes("سلام") ||
      text.includes("hello")
    ) {

      return "سلام 👋 خوش اومدی به سلطان وب! 👑";

    }

    if (
      text.includes("html")
    ) {

      return "HTML ساختار اصلی صفحات وب را می‌سازد. 🧱";

    }

    if (
      text.includes("css")
    ) {

      return "CSS برای طراحی و زیباسازی سایت استفاده می‌شود. 🎨";

    }

    if (
      text.includes("javascript") ||
      text.includes("جاوا")
    ) {

      return "JavaScript باعث می‌شود سایت تعاملی و پویا شود. ⚡";

    }

    if (
      text.includes("سایت") ||
      text.includes("وب")
    ) {

      return "تو الان داخل سایت سلطان وب هستی! 👑💻";

    }

    if (
      text.includes("کمک")
    ) {

      return "حتماً! درباره HTML، CSS، JavaScript یا طراحی سایت ازم بپرس. 🚀";

    }

    if (
      text.includes("متین")
    ) {

      return "متین، ادامه بده! داری قدم‌به‌قدم حرفه‌ای‌تر می‌شی. 🔥";

    }

    return "جالب بود! 🤖 فعلاً پاسخ این سؤال رو بلد نیستم، ولی می‌تونی درباره HTML، CSS، JavaScript یا طراحی سایت ازم سؤال کنی.";
  }


  /* -----------------------------------------
  📩 ارسال پیام
  ----------------------------------------- */

  if (chatForm && chatInput && chatMessages) {

    chatForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const message = chatInput.value.trim();

      if (!message) {
        return;
      }

      addChatMessage(message, "user");

      chatInput.value = "";

      setTimeout(function () {

        const answer = getBotAnswer(message);

        addChatMessage(answer, "bot");

      }, 500);

    });

  }


  /* -----------------------------------------
  ⚡ پیشنهادهای آماده چت
  ----------------------------------------- */

  const suggestions =
    document.querySelectorAll(
      ".chat-suggestions button"
    );

  suggestions.forEach(function (button) {

    button.addEventListener("click", function () {

      const question =
        button.textContent.trim();

      if (!question) {
        return;
      }

      if (chatWindow) {
        chatWindow.hidden = false;
      }

      showWelcomeMessage();

      addChatMessage(question, "user");

      setTimeout(function () {

        addChatMessage(
          getBotAnswer(question),
          "bot"
        );

      }, 500);

    });

  });


  /* =========================================
  ✅ سایت آماده است
  ========================================= */

  console.log("SULTAN WEB READY! 👑");

});
