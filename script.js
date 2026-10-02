document.addEventListener("DOMContentLoaded", () => {

  /* =========================
     حالت شب و روز
  ========================= */

  const themeButton = document.getElementById("themeButton");

  function updateThemeButton() {
    if (!themeButton) return;

    if (document.body.classList.contains("light-mode")) {
      themeButton.textContent = "☀️ حالت روز";
    } else {
      themeButton.textContent = "🌙 حالت شب";
    }
  }

  const savedTheme = localStorage.getItem("theme");

  if (savedTheme === "light") {
    document.body.classList.add("light-mode");
  }

  updateThemeButton();

  if (themeButton) {
    themeButton.addEventListener("click", () => {

      document.body.classList.toggle("light-mode");

      const isLight =
        document.body.classList.contains("light-mode");

      localStorage.setItem(
        "theme",
        isLight ? "light" : "dark"
      );

      updateThemeButton();
    });
  }


  /* =========================
     ساعت و تاریخ
  ========================= */

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
        now.toLocaleDateString("fa-IR", {
          weekday: "long",
          year: "numeric",
          month: "long",
          day: "numeric"
        });
    }
  }

  updateDateTime();

  setInterval(updateDateTime, 1000);


  /* =========================
     شمارنده
  ========================= */

  const counterElement =
    document.getElementById("counter");

  const increaseButton =
    document.getElementById("increase");

  const decreaseButton =
    document.getElementById("decrease");

  const resetButton =
    document.getElementById("reset");

  let counter =
    Number(localStorage.getItem("counter")) || 0;

  function updateCounter() {

    if (counterElement) {
      counterElement.textContent = counter;
    }

    localStorage.setItem(
      "counter",
      counter
    );
  }

  updateCounter();

  if (increaseButton) {
    increaseButton.addEventListener("click", () => {
      counter++;
      updateCounter();
    });
  }

  if (decreaseButton) {
    decreaseButton.addEventListener("click", () => {
      counter--;
      updateCounter();
    });
  }

  if (resetButton) {
    resetButton.addEventListener("click", () => {
      counter = 0;
      updateCounter();
    });
  }


  /* =========================
     لایک و دیسلایک
  ========================= */

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
    Number(localStorage.getItem("likes")) || 0;

  let dislikes =
    Number(localStorage.getItem("dislikes")) || 0;

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

  updateVotes();

  if (likeButton) {
    likeButton.addEventListener("click", () => {

      likes++;

      updateVotes();

      if (voteMessage) {
        voteMessage.textContent =
          "ممنون از نظرت! ❤️";
      }
    });
  }

  if (dislikeButton) {
    dislikeButton.addEventListener("click", () => {

      dislikes++;

      updateVotes();

      if (voteMessage) {
        voteMessage.textContent =
          "ممنون که نظرت رو گفتی! 💜";
      }
    });
  }

  if (resetVotesButton) {
    resetVotesButton.addEventListener("click", () => {

      likes = 0;
      dislikes = 0;

      updateVotes();

      if (voteMessage) {
        voteMessage.textContent =
          "آمار نظرسنجی صفر شد.";
      }
    });
  }


  /* =========================
     Todo List
  ========================= */

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
      localStorage.getItem("todos") || "[]"
    );

  function saveTodos() {

    localStorage.setItem(
      "todos",
      JSON.stringify(todos)
    );
  }

  function renderTodos() {

    if (!todoList) return;

    todoList.innerHTML = "";

    todos.forEach((todo, index) => {

      const li = document.createElement("li");

      const text = document.createElement("span");

      text.textContent = todo;

      const deleteButton =
        document.createElement("button");

      deleteButton.textContent = "🗑️ حذف";

      deleteButton.className = "btn";

      deleteButton.type = "button";

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

  renderTodos();

  if (todoForm) {

    todoForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        const value =
          todoInput.value.trim();

        if (!value) return;

        todos.push(value);

        saveTodos();

        renderTodos();

        todoInput.value = "";

        todoInput.focus();
      }
    );
  }


  /* =========================
     تغییر رنگ سایت
  ========================= */

  const colorButtons =
    document.querySelectorAll(
      "[data-color]"
    );

  const savedColor =
    localStorage.getItem("siteColor");

  function setSiteColor(color) {

    if (color === "blue") {

      document.documentElement.style.setProperty(
        "--primary",
        "#2563eb"
      );

      document.documentElement.style.setProperty(
        "--secondary",
        "#06b6d4"
      );

    } else if (color === "pink") {

      document.documentElement.style.setProperty(
        "--primary",
        "#ec4899"
      );

      document.documentElement.style.setProperty(
        "--secondary",
        "#a855f7"
      );

    } else if (color === "green") {

      document.documentElement.style.setProperty(
        "--primary",
        "#10b981"
      );

      document.documentElement.style.setProperty(
        "--secondary",
        "#22c55e"
      );

    } else {

      document.documentElement.style.setProperty(
        "--primary",
        "#755cff"
      );

      document.documentElement.style.setProperty(
        "--secondary",
        "#00b4ff"
      );
    }

    localStorage.setItem(
      "siteColor",
      color
    );
  }

  if (savedColor) {
    setSiteColor(savedColor);
  }

  colorButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const color =
          button.dataset.color;

        setSiteColor(color);
      }
    );
  });


  /* =========================
     جمله انگیزشی
  ========================= */

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

  function showRandomQuote() {

    if (!quoteElement) return;

    const randomIndex =
      Math.floor(
        Math.random() * quotes.length
      );

    quoteElement.textContent =
      quotes[randomIndex];
  }

  if (quoteElement) {
    showRandomQuote();
  }

  if (newQuoteButton) {
    newQuoteButton.addEventListener(
      "click",
      showRandomQuote
    );
  }


  /* =========================
     پیام شخصی
  ========================= */

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

        if (!customMessage) return;

        if (!message) {

          customMessage.textContent =
            "اول یک پیام بنویس 😊";

          return;
        }

        customMessage.textContent =
          `پیامت دریافت شد: ${message} 💜`;
      }
    );
  }


  /* =========================
     دکمه رفتن به بالا
  ========================= */

  const topButton =
    document.getElementById("topButton");

  function updateTopButton() {

    if (!topButton) return;

    if (window.scrollY > 400) {
      topButton.classList.add("show");
    } else {
      topButton.classList.remove("show");
    }
  }

  window.addEventListener(
    "scroll",
    updateTopButton
  );

  updateTopButton();

  if (topButton) {

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


  /* =========================
     فرم تماس
  ========================= */

  const contactForm =
    document.getElementById("contactForm");

  const formResult =
    document.getElementById("formResult");

  if (contactForm) {

    contactForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        if (!formResult) return;

        formResult.textContent =
          "پیامت با موفقیت ثبت شد! 🚀";

        contactForm.reset();
      }
    );
  }


  /* =========================
     Chatbot
  ========================= */

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

  const questionButtons =
    document.querySelectorAll(
      "[data-question]"
    );


  function addChatMessage(
    message,
    type = "bot"
  ) {

    if (!chatMessages) return;

    const div =
      document.createElement("div");

    div.className =
      type === "user"
        ? "user-message"
        : "bot-message";

    div.textContent = message;

    chatMessages.appendChild(div);

    chatMessages.scrollTop =
      chatMessages.scrollHeight;
  }


  function getBotAnswer(message) {

    const text =
      message.toLowerCase().trim();

    if (
      text.includes("سلام") ||
      text.includes("hello") ||
      text.includes("hi")
    ) {
      return "سلام 👋 به سلطان وب خوش آمدی!";
    }

    if (
      text.includes("سلطان وب") ||
      text.includes("سایت")
    ) {
      return "سلطان وب یک سایت تمرینی برای یادگیری و ساخت پروژه‌های وب است 👑";
    }

    if (
      text.includes("مهارت") ||
      text.includes("html") ||
      text.includes("css") ||
      text.includes("javascript")
    ) {
      return "در این سایت روی HTML، CSS و JavaScript تمرین می‌کنیم 💻";
    }

    if (
      text.includes("تماس")
    ) {
      return "برای تماس می‌توانی از صفحه «تماس با من» استفاده کنی 📩";
    }

    if (
      text.includes("پروژه")
    ) {
      return "در صفحه پروژه‌ها می‌توانی پروژه‌های سلطان وب را ببینی 🚀";
    }

    if (
      text.includes("ممنون") ||
      text.includes("مرسی")
    ) {
      return "خواهش می‌کنم! 💜";
    }

    return "سؤال جالبی بود! 😊 می‌توانی درباره سایت، پروژه‌ها، HTML، CSS یا JavaScript از من بپرسی.";
  }


  if (chatToggle) {

    chatToggle.addEventListener(
      "click",
      () => {

        if (chatWindow) {
          chatWindow.classList.toggle("open");
        }
      }
    );
  }


  if (chatClose) {

    chatClose.addEventListener(
      "click",
      () => {

        if (chatWindow) {
          chatWindow.classList.remove("open");
        }
      }
    );
  }


  questionButtons.forEach(button => {

    button.addEventListener(
      "click",
      () => {

        const question =
          button.dataset.question;

        if (!question) return;

        addChatMessage(
          question,
          "user"
        );

        setTimeout(() => {

          addChatMessage(
            getBotAnswer(question),
            "bot"
          );

        }, 300);
      }
    );
  });


  if (chatForm) {

    chatForm.addEventListener(
      "submit",
      (event) => {

        event.preventDefault();

        if (!chatInput) return;

        const message =
          chatInput.value.trim();

        if (!message) return;

        addChatMessage(
          message,
          "user"
        );

        chatInput.value = "";

        setTimeout(() => {

          addChatMessage(
            getBotAnswer(message),
            "bot"
          );

        }, 400);
      }
    );
  }


  /* =========================
     شروع انیمیشن صفحه
  ========================= */

  document
    .querySelectorAll(
      ".container, .main-logo, .hero"
    )
    .forEach(element => {

      element.style.opacity = "1";
    });

});
