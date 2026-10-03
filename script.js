document.addEventListener("DOMContentLoaded", function () {

  /* =========================
     🌙 حالت شب / روز
  ========================= */

  const themeButton = document.getElementById("themeButton");

  if (themeButton) {
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
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
  }


  /* =========================
     🕐 ساعت و تاریخ
  ========================= */

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


  /* =========================
     🔢 شمارنده
  ========================= */

  const counter = document.getElementById("counter");
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");

  if (counter) {
    let count = Number(counter.textContent) || 0;

    if (increase) {
      increase.addEventListener("click", function () {
        count++;
        counter.textContent = count;
      });
    }

    if (decrease) {
      decrease.addEventListener("click", function () {
        count--;
        counter.textContent = count;
      });
    }

    if (reset) {
      reset.addEventListener("click", function () {
        count = 0;
        counter.textContent = count;
      });
    }
  }


  /* =========================
     ❤️ رأی دادن
  ========================= */

  const like = document.getElementById("like");
  const dislike = document.getElementById("dislike");
  const resetVotes = document.getElementById("resetVotes");
  const votes = document.getElementById("votes");
  const voteMessage = document.getElementById("voteMessage");

  let likes = 0;
  let dislikes = 0;

  function updateVotes() {
    if (votes) {
      votes.textContent =
        "👍 " + likes + " | 👎 " + dislikes;
    }
  }

  if (like) {
    like.addEventListener("click", function () {
      likes++;
      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "ممنون از نظرت! ❤️";
      }
    });
  }

  if (dislike) {
    dislike.addEventListener("click", function () {
      dislikes++;
      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "ممنون که نظرت رو گفتی! 👍";
      }
    });
  }

  if (resetVotes) {
    resetVotes.addEventListener("click", function () {
      likes = 0;
      dislikes = 0;
      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "";
      }
    });
  }


  /* =========================
     📝 فهرست کارها
  ========================= */

  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const todoInfo = document.getElementById("todoInfo");

  function updateTodoCount() {
    if (todoInfo && todoList) {
      todoInfo.textContent =
        "تعداد کارها: " + todoList.children.length;
    }
  }

  if (todoForm && todoInput && todoList) {

    todoForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const text = todoInput.value.trim();

      if (!text) return;

      const li = document.createElement("li");

      const span = document.createElement("span");
      span.textContent = text;

      const button = document.createElement("button");
      button.type = "button";
      button.textContent = "حذف";

      button.addEventListener("click", function () {
        li.remove();
        updateTodoCount();
      });

      li.appendChild(span);
      li.appendChild(button);
      todoList.appendChild(li);

      todoInput.value = "";

      updateTodoCount();
    });
  }


  /* =========================
     💡 جمله امروز
  ========================= */

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


  /* =========================
     💬 پیام شخصی
  ========================= */

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


  /* =========================
     ⬆️ رفتن به بالا
  ========================= */

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


  /* =========================
     🤖 دستیار سلطان وب
  ========================= */

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


  /* هنگام ورود بسته باشد */

  if (chatWindow) {
    chatWindow.hidden = true;
  }


  /* =========================
     💬 اضافه کردن پیام
  ========================= */

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


  /* =========================
     ⌨️ در حال تایپ
  ========================= */

  function showTyping() {

    if (!chatMessages) return;

    const oldTyping =
      document.getElementById("typing-message");

    if (oldTyping) {
      oldTyping.remove();
    }

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


  /* =========================
     🤖 باز کردن دستیار
  ========================= */

  if (chatToggle && chatWindow) {

    chatToggle.addEventListener(
      "click",
      function () {

        chatWindow.hidden = false;

        if (chatInput) {
          setTimeout(function () {
            chatInput.focus();
          }, 100);
        }

      }
    );
  }


  /* =========================
     ❌ بستن دستیار
  ========================= */

  if (chatClose && chatWindow) {

    chatClose.addEventListener(
      "click",
      function () {

        chatWindow.hidden = true;

      }
    );
  }


  /* =========================
     🧠 پاسخ‌های دستیار
  ========================= */

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
      return "برای دیدن پروژه‌ها روی بخش «پروژه‌ها» در منوی سایت بزن. 🚀";
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


  /* =========================
     📤 ارسال پیام اصلی
  ========================= */

  function sendChatMessage(text) {

    if (!text || !chatMessages) {
      return;
    }

    addChatMessage(text, "user");

    showTyping();

    setTimeout(function () {

      removeTyping();

      const answer =
        getBotAnswer(text);

      addChatMessage(answer, "bot");

    }, 900);
  }


  /* =========================
     📩 فرم چت
  ========================= */

  if (chatForm && chatInput) {

    chatForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const text =
          chatInput.value.trim();

        if (!text) {
          return;
        }

        chatInput.value = "";

        sendChatMessage(text);

      }
    );
  }


  /* =========================
     ⚡ دکمه‌های آماده چت
  ========================= */

  const chatButtons =
    document.querySelectorAll(
      ".chat-questions button, .chat-suggestions button"
    );


  chatButtons.forEach(function (button) {

    button.addEventListener(
      "click",
      function () {

        const question =
          button.dataset.question ||
          button.textContent.trim();

        if (!question) {
          return;
        }


        /* اگر بسته بود بازش کن */

        if (chatWindow) {
          chatWindow.hidden = false;
        }


        /* سؤال را داخل کادر قرار بده */

        if (chatInput) {
          chatInput.value = question;
        }


        /*
          بعد از قرار دادن سؤال،
          همان پیام را ارسال کن
        */

        sendChatMessage(question);


        /* کادر را خالی کن */

        if (chatInput) {
          chatInput.value = "";
        }

      }
    );

  });


  console.log(
    "👑 SULTAN WEB READY!"
  );

});
