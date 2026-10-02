document.addEventListener("DOMContentLoaded", function () {

  // =========================================
  // 🌙 1. حالت شب / روز
  // =========================================

  const themeButton = document.getElementById("themeButton");

  if (themeButton) {

    // حالت ذخیره‌شده
    const savedTheme = localStorage.getItem("theme");

    if (savedTheme === "dark") {
      document.body.classList.add("dark");
      themeButton.textContent = "☀️ حالت روز";
    } else {
      document.body.classList.remove("dark");
      themeButton.textContent = "🌙 حالت شب";
    }

    // تغییر حالت
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


  // =========================================
  // 🕐 2. ساعت و تاریخ
  // =========================================

  const clock = document.getElementById("clock");
  const date = document.getElementById("date");

  function updateDateTime() {

    const now = new Date();

    if (clock) {
      clock.textContent = now.toLocaleTimeString("fa-IR");
    }

    if (date) {
      date.textContent = now.toLocaleDateString("fa-IR", {
        weekday: "long",
        year: "numeric",
        month: "long",
        day: "numeric"
      });
    }
  }

  updateDateTime();
  setInterval(updateDateTime, 1000);


  // =========================================
  // 🔢 3. شمارنده
  // =========================================

  const counter = document.getElementById("counter");
  const increase = document.getElementById("increase");
  const decrease = document.getElementById("decrease");
  const reset = document.getElementById("reset");

  if (counter && increase && decrease && reset) {

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
      localStorage.setItem("counter", 0);
    });
  }


  // =========================================
  // ❤️ 4. لایک و دیسلایک
  // =========================================

  const votes = document.getElementById("votes");
  const like = document.getElementById("like");
  const dislike = document.getElementById("dislike");
  const resetVotes = document.getElementById("resetVotes");
  const voteMessage = document.getElementById("voteMessage");

  if (votes && like && dislike && resetVotes) {

    let likes = Number(localStorage.getItem("likes")) || 0;
    let dislikes = Number(localStorage.getItem("dislikes")) || 0;

    function updateVotes() {
      votes.textContent = `👍 ${likes} | 👎 ${dislikes}`;
    }

    updateVotes();

    like.addEventListener("click", function () {
      likes++;
      localStorage.setItem("likes", likes);
      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "❤️ ممنون که سایت رو دوست داشتی!";
      }
    });

    dislike.addEventListener("click", function () {
      dislikes++;
      localStorage.setItem("dislikes", dislikes);
      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "👍 ممنون از نظرت!";
      }
    });

    resetVotes.addEventListener("click", function () {
      likes = 0;
      dislikes = 0;

      localStorage.setItem("likes", 0);
      localStorage.setItem("dislikes", 0);

      updateVotes();

      if (voteMessage) {
        voteMessage.textContent = "رأی‌ها پاک شدند.";
      }
    });
  }


  // =========================================
  // 📝 5. فهرست کارها
  // =========================================

  const todoForm = document.getElementById("todoForm");
  const todoInput = document.getElementById("todoInput");
  const todoList = document.getElementById("todoList");
  const todoInfo = document.getElementById("todoInfo");

  if (todoForm && todoInput && todoList) {

    let todos = [];

    try {
      todos = JSON.parse(localStorage.getItem("todos")) || [];
    } catch (error) {
      todos = [];
    }

    function showTodos() {

      todoList.innerHTML = "";

      todos.forEach(function (todo, index) {

        const li = document.createElement("li");

        const span = document.createElement("span");
        span.textContent = todo;

        const button = document.createElement("button");
        button.type = "button";
        button.textContent = "❌";

        button.addEventListener("click", function () {

          todos.splice(index, 1);

          localStorage.setItem(
            "todos",
            JSON.stringify(todos)
          );

          showTodos();
        });

        li.appendChild(span);
        li.appendChild(button);

        todoList.appendChild(li);
      });

      if (todoInfo) {
        todoInfo.textContent = `تعداد کارها: ${todos.length}`;
      }
    }

    todoForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const newTodo = todoInput.value.trim();

      if (!newTodo) return;

      todos.push(newTodo);

      localStorage.setItem(
        "todos",
        JSON.stringify(todos)
      );

      todoInput.value = "";

      showTodos();
    });

    showTodos();
  }


  // =========================================
  // 🎨 6. تغییر رنگ سایت
  // =========================================

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
      changeColor(button.dataset.color);
    });

  });

  const savedColor = localStorage.getItem("siteColor");

  if (savedColor) {
    changeColor(savedColor);
  }


  // =========================================
  // 💡 7. جمله انگیزشی
  // =========================================

  const quote = document.getElementById("quote");
  const newQuote = document.getElementById("newQuote");

  const quotes = [
    "هر روز یک قدم کوچک، یعنی یک قدم به جلو.",
    "با تمرین، برنامه‌نویسی ساده‌تر می‌شود.",
    "اشتباه کردن بخشی از یادگیری است.",
    "امروز می‌تواند شروع یک مهارت جدید باشد.",
    "کدی که امروز یاد می‌گیری، پایه‌ای برای فرداست.",
    "هیچ برنامه‌نویسی از روز اول حرفه‌ای نبوده است! 🚀"
  ];

  if (quote && newQuote) {

    newQuote.addEventListener("click", function () {

      const randomIndex =
        Math.floor(Math.random() * quotes.length);

      quote.textContent = quotes[randomIndex];
    });
  }


  // =========================================
  // 🎉 8. پیام مخصوص
  // =========================================

  const showMessage = document.getElementById("showMessage");
  const message = document.getElementById("message");

  if (showMessage && message) {

    showMessage.addEventListener("click", function () {

      message.textContent =
        "🎉 سلام متین! ادامه بده؛ داری قدم‌به‌قدم سایتت رو حرفه‌ای‌تر می‌کنی. 🚀";

    });
  }


  // =========================================
  // ⬆️ 9. بازگشت به بالا
  // =========================================

  const topButton = document.getElementById("topButton");

  if (topButton) {

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
  }


  // =========================================
  // 📩 10. فرم تماس
  // =========================================

  const contactForm = document.getElementById("contactForm");
  const formResult = document.getElementById("formResult");

  if (contactForm && formResult) {

    contactForm.addEventListener("submit", function (event) {

      event.preventDefault();

      const name = document.getElementById("name");

      if (name) {

        formResult.textContent =
          `✅ ممنون ${name.value}! پیام آزمایشی تو ثبت شد.`;

      }
    });
  }


  // =========================================
  // 🤖 11. چت‌بات
  // =========================================

  const chatToggle = document.getElementById("chat-toggle");
  const chatWindow = document.getElementById("chat-window");
  const chatClose = document.getElementById("chat-close");
  const chatMessages = document.getElementById("chat-messages");
  const chatForm = document.getElementById("chat-form");
  const chatInput = document.getElementById("chat-input");
  const questionButtons =
    document.querySelectorAll("[data-question]");


  if (chatToggle && chatWindow) {

    function openChat() {

      chatWindow.hidden = false;

      chatToggle.setAttribute(
        "aria-expanded",
        "true"
      );
    }

    function closeChat() {

      chatWindow.hidden = true;

      chatToggle.setAttribute(
        "aria-expanded",
        "false"
      );
    }

    chatToggle.addEventListener("click", function () {

      if (chatWindow.hidden) {
        openChat();
      } else {
        closeChat();
      }

    });


    if (chatClose) {
      chatClose.addEventListener(
        "click",
        closeChat
      );
    }


    function addChatMessage(text, type) {

      if (!chatMessages) return;

      const element =
        document.createElement("div");

      element.className =
        type === "user"
          ? "user-message"
          : "bot-message";

      element.textContent = text;

      chatMessages.appendChild(element);

      chatMessages.scrollTop =
        chatMessages.scrollHeight;
    }


    function getBotAnswer(question) {

      const q = question.toLowerCase();

      if (q.includes("سلام")) {
        return "👋 سلام! خوش اومدی به سلطان وب!";
      }

      if (
        q.includes("درباره") ||
        q.includes("سایت")
      ) {
        return "🚀 سلطان وب یک سایت شخصی برای معرفی و تمرین طراحی سایت و برنامه‌نویسی است.";
      }

      if (
        q.includes("راهنما") ||
        q.includes("امکانات") ||
        q.includes("چه کار")
      ) {
        return "📚 اینجا می‌تونی ساعت رو ببینی، شمارنده رو امتحان کنی، کار اضافه کنی، رنگ سایت رو عوض کنی و حالت شب رو فعال کنی.";
      }

      if (q.includes("متین")) {
        return "😎 متین در حال یادگیری HTML، CSS و JavaScript است.";
      }

      return "🤖 پیامت رو دریافت کردم! یکی از گزینه‌های راهنما رو امتحان کن.";
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

        sendChat(button.dataset.question);

      });

    });


    if (chatForm && chatInput) {

      chatForm.addEventListener(
        "submit",
        function (event) {

          event.preventDefault();

          const question =
            chatInput.value.trim();

          if (!question) return;

          sendChat(question);

          chatInput.value = "";
        }
      );
    }
  }


  // =========================================
  // 🚀 پایان
  // =========================================

  console.log("🚀 SULTAN WEB READY!");

});
