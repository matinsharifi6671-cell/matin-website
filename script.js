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

      clock.textContent =
        now.toLocaleTimeString("fa-IR", {
          hour: "2-digit",
          minute: "2-digit",
          second: "2-digit"
        });

    }

    if (date) {

      date.textContent =
        now.toLocaleDateString("fa-IR", {
          year: "numeric",
          month: "long",
          day: "numeric"
        });

    }

  }

  updateClock();

  setInterval(updateClock, 1000);


  /* =========================================
  🔢 شمارنده
  ========================================= */

  const counter = document.getElementById("counter");

  const increaseButton =
    document.getElementById("increase");

  const decreaseButton =
    document.getElementById("decrease");

  const resetButton =
    document.getElementById("reset");

  if (counter) {

    let count =
      Number(counter.textContent) || 0;


    if (increaseButton) {

      increaseButton.addEventListener(
        "click",
        function () {

          count++;

          counter.textContent = count;

        }
      );

    }


    if (decreaseButton) {

      decreaseButton.addEventListener(
        "click",
        function () {

          count--;

          counter.textContent = count;

        }
      );

    }


    if (resetButton) {

      resetButton.addEventListener(
        "click",
        function () {

          count = 0;

          counter.textContent = count;

        }
      );

    }

  }


  /* =========================================
  ❤️ نظرسنجی
  ========================================= */

  const likeButton =
    document.getElementById("like");

  const dislikeButton =
    document.getElementById("dislike");

  const resetVotes =
    document.getElementById("resetVotes");

  const votes =
    document.getElementById("votes");

  const voteMessage =
    document.getElementById("voteMessage");

  let likes = 0;
  let dislikes = 0;


  function updateVotes() {

    if (votes) {

      votes.textContent =
        "👍 " + likes +
        " | 👎 " + dislikes;

    }

  }


  if (likeButton) {

    likeButton.addEventListener(
      "click",
      function () {

        likes++;

        updateVotes();

        if (voteMessage) {
          voteMessage.textContent =
            "ممنون از نظرت! ❤️";
        }

      }
    );

  }


  if (dislikeButton) {

    dislikeButton.addEventListener(
      "click",
      function () {

        dislikes++;

        updateVotes();

        if (voteMessage) {
          voteMessage.textContent =
            "ممنون که نظرت رو گفتی! 👍";
        }

      }
    );

  }


  if (resetVotes) {

    resetVotes.addEventListener(
      "click",
      function () {

        likes = 0;

        dislikes = 0;

        updateVotes();

        if (voteMessage) {
          voteMessage.textContent = "";
        }

      }
    );

  }


  /* =========================================
  📝 TODO LIST
  ========================================= */

  const todoForm =
    document.getElementById("todoForm");

  const todoInput =
    document.getElementById("todoInput");

  const todoList =
    document.getElementById("todoList");

  const todoInfo =
    document.getElementById("todoInfo");


  function updateTodoCount() {

    if (todoInfo && todoList) {

      todoInfo.textContent =
        "تعداد کارها: " +
        todoList.children.length;

    }

  }


  if (
    todoForm &&
    todoInput &&
    todoList
  ) {

    todoForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();

        const text =
          todoInput.value.trim();

        if (!text) {
          return;
        }


        const li =
          document.createElement("li");


        const span =
          document.createElement("span");

        span.textContent = text;


        const deleteButton =
          document.createElement("button");

        deleteButton.type = "button";

        deleteButton.textContent = "حذف";


        deleteButton.addEventListener(
          "click",
          function () {

            li.remove();

            updateTodoCount();

          }
        );


        li.appendChild(span);

        li.appendChild(deleteButton);

        todoList.appendChild(li);


        todoInput.value = "";

        todoInput.focus();

        updateTodoCount();

      }
    );

  }


  /* =========================================
  🎨 تغییر رنگ
  ========================================= */

  const colorButtons =
    document.querySelectorAll(
      "[data-color]"
    );


  colorButtons.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const color =
            button.dataset.color;


          if (
            color &&
            color !== "default"
          ) {

            document.documentElement.style
              .setProperty(
                "--primary",
                color
              );

          }

        }
      );

    }
  );


  /* =========================================
  💡 جمله انگیزشی
  ========================================= */

  const quoteButton =
    document.getElementById("newQuote");

  const quoteText =
    document.getElementById("quote");


  const quotes = [

    "هر روز یک قدم جلوتر برو 🚀",

    "با تمرین، برنامه‌نویسی آسان‌تر می‌شود 💻",

    "ایده‌هایت را به کد تبدیل کن ✨",

    "هیچ برنامه‌نویسی از روز اول حرفه‌ای نبوده است 🔥",

    "یادگیری را ادامه بده 👑",

    "اشتباه کردن بخشی از یادگیری است 💚"

  ];


  if (
    quoteButton &&
    quoteText
  ) {

    quoteButton.addEventListener(
      "click",
      function () {

        const randomIndex =
          Math.floor(
            Math.random() *
            quotes.length
          );


        quoteText.textContent =
          quotes[randomIndex];

      }
    );

  }


  /* =========================================
  💬 پیام شخصی
  ========================================= */

  const messageInput =
    document.getElementById("message");

  const showMessageButton =
    document.getElementById("showMessage");

  const customMessage =
    document.getElementById("customMessage");


  if (
    messageInput &&
    showMessageButton &&
    customMessage
  ) {

    showMessageButton.addEventListener(
      "click",
      function () {

        const text =
          messageInput.value.trim();


        if (!text) {

          customMessage.textContent =
            "لطفاً اول یک پیام بنویس.";

          return;

        }


        customMessage.textContent =
          "💚 پیام تو: " + text;

      }
    );

  }


  /* =========================================
  ⬆️ دکمه رفتن به بالا
  ========================================= */

  const topButton =
    document.getElementById("topButton");


  if (topButton) {

    window.addEventListener(
      "scroll",
      function () {

        if (window.scrollY > 400) {

          topButton.classList.add("show");

        } else {

          topButton.classList.remove("show");

        }

      }
    );


    topButton.addEventListener(
      "click",
      function () {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  /* =========================================
  🤖 دستیار سلطان وب
  ========================================= */

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


  /* -----------------------------------------
  🚫 هنگام ورود بسته باشد
  ----------------------------------------- */

  if (chatWindow) {

    chatWindow.hidden = true;

  }


  /* -----------------------------------------
  ➕ اضافه کردن پیام
  ----------------------------------------- */

  function addChatMessage(
    text,
    type
  ) {

    if (!chatMessages) {
      return;
    }


    const message =
      document.createElement("div");


    if (type === "user") {

      message.className =
        "user-message";

    } else {

      message.className =
        "bot-message";

    }


    message.textContent = text;


    chatMessages.appendChild(
      message
    );


    chatMessages.scrollTop =
      chatMessages.scrollHeight;

  }


  /* -----------------------------------------
  🤖 باز کردن دستیار
  ----------------------------------------- */

  if (
    chatToggle &&
    chatWindow
  ) {

    chatToggle.addEventListener(
      "click",
      function () {

        chatWindow.hidden = false;


        if (chatInput) {

          setTimeout(
            function () {

              chatInput.focus();

            },
            100
          );

        }

      }
    );

  }


  /* -----------------------------------------
  ❌ بستن دستیار
  ----------------------------------------- */

  if (
    chatClose &&
    chatWindow
  ) {

    chatClose.addEventListener(
      "click",
      function () {

        chatWindow.hidden = true;

      }
    );

  }


  /* -----------------------------------------
  🤖 پاسخ دستیار
  ----------------------------------------- */

  function getBotAnswer(
    message
  ) {

    const text =
      message.toLowerCase();


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
      text.includes("جاوا") ||
      text.includes("جاوا اسکریپت")
    ) {

      return "JavaScript باعث می‌شود سایت تعاملی و پویا شود. ⚡";

    }


    if (
      text.includes("مهارت")
    ) {

      return "مهارت‌های فعلی سلطان وب شامل HTML، CSS و JavaScript است. 💻";

    }


    if (
      text.includes("پروژه")
    ) {

      return "برای دیدن پروژه‌ها روی بخش «پروژه‌ها» در منوی بالای سایت بزن. 🚀";

    }


    if (
      text.includes("تماس")
    ) {

      return "برای ارتباط با متین وارد بخش «تماس» شو. 📩";

    }


    if (
      text.includes("سایت") ||
      text.includes("وب")
    ) {

      return "سلطان وب یک سایت تمرینی برای یادگیری و ساخت پروژه‌های وب است. 👑💻";

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


    return "جالب بود! 🤖 فعلاً پاسخ این سؤال رو بلد نیستم. درباره HTML، CSS، JavaScript یا طراحی سایت بپرس.";
  }


  /* -----------------------------------------
  📩 ارسال پیام
  ----------------------------------------- */

  if (
    chatForm &&
    chatInput &&
    chatMessages
  ) {

    chatForm.addEventListener(
      "submit",
      function (event) {

        event.preventDefault();


        const message =
          chatInput.value.trim();


        if (!message) {
          return;
        }


        addChatMessage(
          message,
          "user"
        );


        chatInput.value = "";


        setTimeout(
          function () {

            const answer =
              getBotAnswer(message);


            addChatMessage(
              answer,
              "bot"
            );

          },
          500
        );

      }
    );

  }


  /* -----------------------------------------
  ⚡ دکمه‌های پیشنهاد چت
  ----------------------------------------- */

  const suggestions =
    document.querySelectorAll(
      ".chat-suggestions button"
    );


  suggestions.forEach(
    function (button) {

      button.addEventListener(
        "click",
        function () {

          const question =
            button.textContent.trim();


          if (!question) {
            return;
          }


          if (chatWindow) {

            chatWindow.hidden =
              false;

          }


          addChatMessage(
            question,
            "user"
          );


          setTimeout(
            function () {

              addChatMessage(
                getBotAnswer(question),
                "bot"
              );

            },
            500
          );

        }
      );

    }
  );


  /* =========================================
  ✅ آماده
  ========================================= */

  console.log(
    "SULTAN WEB READY! 👑"
  );

});
