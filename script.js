// ==================================================
// 👑 SULTAN WEB - JAVASCRIPT
// ==================================================

document.addEventListener("DOMContentLoaded", () => {

  // ==================================================
  // 🌙 حالت شب و روز
  // ==================================================

  const themeButton = document.getElementById("themeButton");

  if (themeButton) {

    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "light") {
      document.body.classList.add("light-mode");
      themeButton.textContent = "☀️ حالت روز";
    }

    themeButton.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");

      const isLight =
        document.body.classList.contains("light-mode");

      localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
      );

      themeButton.textContent =
        isLight
          ? "☀️ حالت روز"
          : "🌙 حالت شب";

    });

  }


  // ==================================================
  // 🕐 ساعت و تاریخ
  // ==================================================

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  function updateDateTime() {

    const now = new Date();

    if (clock) {

      clock.textContent =
        now.toLocaleTimeString("fa-IR");

    }

    if (date) {

      date.textContent =
        now.toLocaleDateString(
          "fa-IR",
          {
            weekday: "long",
            year: "numeric",
            month: "long",
            day: "numeric"
          }
        );

    }

  }

  updateDateTime();

  setInterval(updateDateTime, 1000);


  // ==================================================
  // 🔢 شمارنده
  // ==================================================

  const counterElement =
    document.getElementById("counter");

  const increaseButton =
    document.getElementById("increase");

  const decreaseButton =
    document.getElementById("decrease");

  const resetButton =
    document.getElementById("reset");


  let counter =
    Number(
      localStorage.getItem("counter")
    ) || 0;


  function updateCounter() {

    if (counterElement) {

      counterElement.textContent =
        counter;

    }

    localStorage.setItem(
      "counter",
      counter
    );

  }


  if (increaseButton) {

    increaseButton.addEventListener(
      "click",
      () => {

        counter++;

        updateCounter();

      }
    );

  }


  if (decreaseButton) {

    decreaseButton.addEventListener(
      "click",
      () => {

        counter--;

        updateCounter();

      }
    );

  }


  if (resetButton) {

    resetButton.addEventListener(
      "click",
      () => {

        counter = 0;

        updateCounter();

      }
    );

  }


  updateCounter();


  // ==================================================
  // ❤️ لایک و دیسلایک
  // ==================================================

  const votesElement =
    document.getElementById("votes");

  const likeButton =
    document.getElementById("like");

  const dislikeButton =
    document.getElementById("dislike");

  const resetVotesButton =
    document.getElementById("resetVotes");

  const voteMessage =
    document.getElementById("voteMessage");


  let likes =
    Number(
      localStorage.getItem("likes")
    ) || 0;


  let dislikes =
    Number(
      localStorage.getItem("dislikes")
    ) || 0;


  function updateVotes() {

    if (votesElement) {

      votesElement.textContent =
        `👍 ${likes} | 👎 ${dislikes}`;

    }

    localStorage.setItem(
      "likes",
      likes
    );

    localStorage.setItem(
      "dislikes",
      dislikes
    );

  }


  if (likeButton) {

    likeButton.addEventListener(
      "click",
      () => {

        likes++;

        if (voteMessage) {
          voteMessage.textContent =
            "ممنون از نظرت! ❤️";
        }

        updateVotes();

      }
    );

  }


  if (dislikeButton) {

    dislikeButton.addEventListener(
      "click",
      () => {

        dislikes++;

        if (voteMessage) {
          voteMessage.textContent =
            "ممنون که نظرت رو گفتی! 👍";
        }

        updateVotes();

      }
    );

  }


  if (resetVotesButton) {

    resetVotesButton.addEventListener(
      "click",
      () => {

        likes = 0;
        dislikes = 0;

        if (voteMessage) {
          voteMessage.textContent =
            "رأی‌ها پاک شدند.";
        }

        updateVotes();

      }
    );

  }


  updateVotes();


  // ==================================================
  // 📝 Todo List
  // ==================================================

  const todoForm =
    document.getElementById("todoForm");

  const todoInput =
    document.getElementById("todoInput");

  const todoList =
    document.getElementById("todoList");

  const todoInfo =
    document.getElementById("todoInfo");


  let todos =
    JSON.parse(
      localStorage.getItem("todos")
    ) || [];


  function saveTodos() {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );

  }


  function renderTodos() {

    if (!todoList) {
      return;
    }

    todoList.innerHTML = "";


    todos.forEach((todo, index) => {

      const li =
        document.createElement("li");


      const text =
        document.createElement("span");

      text.textContent =
        todo;


      const deleteButton =
        document.createElement("button");

      deleteButton.textContent =
        "🗑️";

      deleteButton.className =
        "btn";


      deleteButton.addEventListener(
        "click",
        () => {

          todos.splice(index, 1);

          saveTodos();

          renderTodos();

        }
      );


      li.appendChild(text);

      li.appendChild(deleteButton);

      todoList.appendChild(li);

    });


    if (todoInfo) {

      todoInfo.textContent =
        `تعداد کارها: ${todos.length}`;

    }

  }


  if (todoForm) {

    todoForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        const value =
          todoInput.value.trim();


        if (!value) {

          todoInput.focus();

          return;

        }


        todos.push(value);

        saveTodos();

        renderTodos();


        todoInput.value = "";

        todoInput.focus();

      }
    );

  }


  renderTodos();


  // ==================================================
  // 🎨 تغییر رنگ
  // ==================================================

  const colorButtons =
    document.querySelectorAll(
      "[data-color]"
    );


  const savedColor =
    localStorage.getItem("siteColor");


  function applyColor(color) {

    const root =
      document.documentElement;


    if (color === "blue") {

      root.style.setProperty(
        "--primary",
        "#2196f3"
      );

      root.style.setProperty(
        "--secondary",
        "#00c6ff"
      );

    }

    else if (color === "pink") {

      root.style.setProperty(
        "--primary",
        "#ff4f9a"
      );

      root.style.setProperty(
        "--secondary",
        "#ff8acb"
      );

    }

    else if (color === "green") {

      root.style.setProperty(
        "--primary",
        "#00b894"
      );

      root.style.setProperty(
        "--secondary",
        "#00cec9"
      );

    }

    else {

      root.style.setProperty(
        "--primary",
        "#755cff"
      );

      root.style.setProperty(
        "--secondary",
        "#00b4ff"
      );

    }

  }


  if (savedColor) {
    applyColor(savedColor);
  }


  colorButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const color =
            button.dataset.color;

          applyColor(color);

          localStorage.setItem(
            "siteColor",
            color
          );

        }
      );

    }
  );


  // ==================================================
  // 💡 جمله تصادفی
  // ==================================================

  const quoteElement =
    document.getElementById("quote");

  const newQuoteButton =
    document.getElementById("newQuote");


  const quotes = [

    "هر روز یک قدم جلوتر برو 🚀",

    "اشتباه کردن بخشی از یادگیری است 💪",

    "ایده‌هایت را به پروژه تبدیل کن 💡",

    "با تمرین بهتر می‌شوی 🔥",

    "کدنویسی یعنی ساختن چیزهای جدید 💻",

    "امروز شروع کن؛ منتظر فردا نباش 🌟"

  ];


  if (newQuoteButton) {

    newQuoteButton.addEventListener(
      "click",
      () => {

        const randomIndex =
          Math.floor(
            Math.random() *
            quotes.length
          );


        if (quoteElement) {

          quoteElement.textContent =
            quotes[randomIndex];

        }

      }
    );

  }


  // ==================================================
  // 💬 پیام شخصی
  // ==================================================

  const messageInput =
    document.getElementById("message");

  const showMessageButton =
    document.getElementById("showMessage");

  const customMessage =
    document.getElementById("customMessage");


  if (showMessageButton) {

    showMessageButton.addEventListener(
      "click",
      () => {

        const message =
          messageInput
            ? messageInput.value.trim()
            : "";


        if (!customMessage) {
          return;
        }


        if (!message) {

          customMessage.textContent =
            "اول یک پیام بنویس 😊";

          return;

        }


        customMessage.textContent =
          message;

      }
    );

  }


  // ==================================================
  // ⬆️ رفتن به بالای صفحه
  // ==================================================

  const topButton =
    document.getElementById("topButton");


  if (topButton) {

    window.addEventListener(
      "scroll",
      () => {

        if (window.scrollY > 400) {

          topButton.classList.add("show");

        }

        else {

          topButton.classList.remove("show");

        }

      }
    );


    topButton.addEventListener(
      "click",
      () => {

        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });

      }
    );

  }


  // ==================================================
  // 🤖 چت‌بات
  // ==================================================

  const chatToggle =
    document.getElementById("chat-toggle");

  const chatWindow =
    document.getElementById("chat-window");

  const chatClose =
    document.getElementById("chat-close");

  const chatMessages =
    document.getElementById("chat-messages");

  const chatForm =
    document.getElementById("chat-form");

  const chatInput =
    document.getElementById("chat-input");


  function openChat() {

    if (chatWindow) {

      chatWindow.classList.add("open");

    }

  }


  function closeChat() {

    if (chatWindow) {

      chatWindow.classList.remove("open");

    }

  }


  if (chatToggle) {

    chatToggle.addEventListener(
      "click",
      () => {

        if (
          chatWindow &&
          chatWindow.classList.contains("open")
        ) {

          closeChat();

        }

        else {

          openChat();

        }

      }
    );

  }


  if (chatClose) {

    chatClose.addEventListener(
      "click",
      closeChat
    );

  }


  function addMessage(
    message,
    type
  ) {

    if (!chatMessages) {
      return;
    }


    const div =
      document.createElement("div");


    div.className =
      type === "user"
        ? "user-message"
        : "bot-message";


    div.textContent =
      message;


    chatMessages.appendChild(div);


    chatMessages.scrollTop =
      chatMessages.scrollHeight;

  }


  function getBotAnswer(message) {

    const text =
      message.toLowerCase();


    if (
      text.includes("سلام") ||
      text.includes("hello")
    ) {

      return "سلام 👋 خوش اومدی به سلطان وب!";

    }


    if (
      text.includes("سلطان وب") ||
      text.includes("سایت")
    ) {

      return "سلطان وب یک سایت تمرینی و شخصی برای یادگیری و ساخت پروژه‌های وب است. 👑";

    }


    if (
      text.includes("مهارت") ||
      text.includes("html") ||
      text.includes("css") ||
      text.includes("javascript")
    ) {

      return "مهارت‌های اصلی این پروژه HTML، CSS و JavaScript هستند. 💻";

    }


    if (
      text.includes("تماس")
    ) {

      return "برای اطلاعات تماس می‌تونی وارد صفحه «تماس با من» بشی. 📩";

    }


    if (
      text.includes("پروژه")
    ) {

      return "برای دیدن پروژه‌ها وارد بخش «پروژه‌های من» شو. 🚀";

    }


    if (
      text.includes("ممنون") ||
      text.includes("مرسی")
    ) {

      return "خواهش می‌کنم! 😎";

    }


    return "سؤال جالبیه! فعلاً پاسخ آماده‌ای برای این سؤال ندارم، ولی می‌تونیم قابلیت‌های بیشتری به من اضافه کنیم. 🤖";

  }


  if (chatForm) {

    chatForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();


        if (!chatInput) {
          return;
        }


        const message =
          chatInput.value.trim();


        if (!message) {
          return;
        }


        addMessage(
          message,
          "user"
        );


        chatInput.value = "";


        setTimeout(
          () => {

            const answer =
              getBotAnswer(message);

            addMessage(
              answer,
              "bot"
            );

          },
          400
        );

      }
    );

  }


  // ==================================================
  // 🤖 سوال‌های آماده چت‌بات
  // ==================================================

  const questionButtons =
    document.querySelectorAll(
      "[data-question]"
    );


  questionButtons.forEach(
    (button) => {

      button.addEventListener(
        "click",
        () => {

          const question =
            button.dataset.question;


          addMessage(
            question,
            "user"
          );


          setTimeout(
            () => {

              addMessage(
                getBotAnswer(question),
                "bot"
              );

            },
            300
          );

        }
      );

    }
  );


  // ==================================================
  // ✨ ورود نرم صفحه
  // ==================================================

  const animatedElements =
    document.querySelectorAll(
      ".container, .main-logo, .hero"
    );


  animatedElements.forEach(
    (element) => {

      element.style.opacity = "1";

    }
  );


});
