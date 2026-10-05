// ========================================
// 👑 SULTAN WEB
// ========================================


// ========================================
// 🕐 ساعت و تاریخ
// ========================================

function updateClock() {

    const now = new Date();

    const hours =
        String(now.getHours()).padStart(2, "0");

    const minutes =
        String(now.getMinutes()).padStart(2, "0");

    const seconds =
        String(now.getSeconds()).padStart(2, "0");


    const clock =
        document.getElementById("clock");


    if (clock) {

        clock.textContent =
            `${hours}:${minutes}:${seconds}`;

    }


    const date =
        document.getElementById("date");


    if (date) {

        date.textContent =
            now.toLocaleDateString("fa-IR", {

                year: "numeric",

                month: "long",

                day: "numeric",

                weekday: "long"

            });

    }

}


updateClock();

setInterval(updateClock, 1000);


// ========================================
// 👁️ شمارنده بازدید
// ========================================

let visits =
    localStorage.getItem("visits");


if (visits === null) {

    visits = 0;

}


visits =
    Number(visits) + 1;


localStorage.setItem(
    "visits",
    visits
);


const visitCount =
    document.getElementById("visitCount");


if (visitCount) {

    visitCount.textContent =
        visits;

}


// ========================================
// 📝 TODO LIST
// ========================================

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


    if (todos.length === 0) {

        if (todoInfo) {

            todoInfo.textContent =
                "هنوز کاری اضافه نکرده‌ای.";

        }

        return;

    }


    if (todoInfo) {

        todoInfo.textContent =
            `تعداد کارها: ${todos.length}`;

    }


    todos.forEach(
        function(todo, index) {

            const li =
                document.createElement("li");


            const span =
                document.createElement("span");


            span.textContent =
                todo;


            const deleteButton =
                document.createElement("button");


            deleteButton.textContent =
                "حذف";


            deleteButton.addEventListener(
                "click",
                function() {

                    todos.splice(index, 1);

                    saveTodos();

                    renderTodos();

                }
            );


            li.appendChild(span);

            li.appendChild(deleteButton);

            todoList.appendChild(li);

        }
    );

}


if (todoForm) {

    todoForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            const value =
                todoInput.value.trim();


            if (value === "") {

                return;

            }


            todos.push(value);


            saveTodos();

            renderTodos();


            todoInput.value = "";

        }
    );

}


renderTodos();


// ========================================
// 💡 جمله انگیزشی
// ========================================

const quotes = [

    "هیچ‌وقت برای شروع دیر نیست! 🚀",

    "هر روز یک قدم به هدفت نزدیک‌تر شو. 💚",

    "با تمرین، برنامه‌نویسی آسان‌تر می‌شود. 💻",

    "اشتباه کردن بخشی از یادگیری است. 🔥",

    "ایده‌هایت را به پروژه تبدیل کن. 👑",

    "اگر ادامه بدهی، بالاخره موفق می‌شوی! ⭐",

    "هر خط کدی که می‌نویسی، یک قدم به حرفه‌ای شدن نزدیک‌ترت می‌کند. 💻"

];


const quoteText =
    document.getElementById("quote");


const quoteButton =
    document.getElementById("newQuote");


function showRandomQuote() {

    if (!quoteText) {

        return;

    }


    const randomIndex =
        Math.floor(
            Math.random() * quotes.length
        );


    quoteText.textContent =
        quotes[randomIndex];

}


showRandomQuote();


if (quoteButton) {

    quoteButton.addEventListener(
        "click",
        showRandomQuote
    );

}


// ========================================
// 💬 پیام سفارشی
// ========================================

const messageInput =
    document.getElementById("message");


const messageButton =
    document.getElementById("showMessage");


const messageResult =
    document.getElementById("customMessage");


if (messageButton) {

    messageButton.addEventListener(
        "click",
        function() {

            const message =
                messageInput
                    ? messageInput.value.trim()
                    : "";


            if (message === "") {

                if (messageResult) {

                    messageResult.textContent =
                        "لطفاً یک پیام بنویس.";

                }

                return;

            }


            if (messageResult) {

                messageResult.textContent =
                    `💚 پیام شما: ${message}`;

            }

        }
    );

}


// ========================================
// 🎨 تغییر رنگ سایت
// ========================================

const colorButtons =
    document.querySelectorAll(
        ".color-button"
    );


const colorThemes = {

    green: {

        primary: "#22c55e",

        primaryDark: "#16a34a",

        secondary: "#00ff88",

        accent: "#4ade80"

    },


    blue: {

        primary: "#3b82f6",

        primaryDark: "#2563eb",

        secondary: "#60a5fa",

        accent: "#93c5fd"

    },


    pink: {

        primary: "#ec4899",

        primaryDark: "#db2777",

        secondary: "#f472b6",

        accent: "#f9a8d4"

    },


    purple: {

        primary: "#a855f7",

        primaryDark: "#9333ea",

        secondary: "#c084fc",

        accent: "#d8b4fe"

    }

};


function applyColorTheme(themeName) {

    const theme =
        colorThemes[themeName];


    if (!theme) {

        return;

    }


    document.documentElement
        .style
        .setProperty(
            "--primary",
            theme.primary
        );


    document.documentElement
        .style
        .setProperty(
            "--primary-dark",
            theme.primaryDark
        );


    document.documentElement
        .style
        .setProperty(
            "--secondary",
            theme.secondary
        );


    document.documentElement
        .style
        .setProperty(
            "--accent",
            theme.accent
        );


    localStorage.setItem(
        "siteColor",
        themeName
    );

}


colorButtons.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                const color =
                    button.dataset.color;


                if (colorThemes[color]) {

                    applyColorTheme(color);

                }

            }
        );

    }
);


const savedColor =
    localStorage.getItem("siteColor");


if (
    savedColor &&
    colorThemes[savedColor]
) {

    applyColorTheme(savedColor);

}


// ========================================
// ⬆️ دکمه بالا
// ========================================

const topButton =
    document.getElementById("topButton");


window.addEventListener(
    "scroll",
    function() {

        if (!topButton) {

            return;

        }


        if (window.scrollY > 400) {

            topButton.classList.add("show");

        }

        else {

            topButton.classList.remove("show");

        }

    }
);


if (topButton) {

    topButton.addEventListener(
        "click",
        function() {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        }
    );

}


// ========================================
// 🤖 CHATBOT
// ========================================

const chatToggle =
    document.getElementById(
        "chat-toggle"
    );


const chatWindow =
    document.getElementById(
        "chat-window"
    );


const chatClose =
    document.getElementById(
        "chat-close"
    );


const chatForm =
    document.getElementById(
        "chat-form"
    );


const chatInput =
    document.getElementById(
        "chat-input"
    );


const chatMessages =
    document.getElementById(
        "chat-messages"
    );


// مهم:
// ربات هنگام ورود سایت بسته باشد

if (chatWindow) {

    chatWindow.hidden = true;

}


function addChatMessage(
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


function getBotResponse(message) {

    const text =
        message.toLowerCase();


    if (
        text.includes("سلام") ||
        text.includes("hello")
    ) {

        return "سلام 👋 خوش آمدی!";

    }


    if (text.includes("html")) {

        return "HTML ساختار اصلی صفحه وب را می‌سازد. 🌐";

    }


    if (text.includes("css")) {

        return "CSS ظاهر و طراحی سایت را کنترل می‌کند. 🎨";

    }


    if (
        text.includes("javascript") ||
        text.includes("جاوا")
    ) {

        return "JavaScript باعث می‌شود سایت تعاملی و پویا شود. ⚡";

    }


    if (
        text.includes("مهارت") ||
        text.includes("skill")
    ) {

        return "HTML، CSS و JavaScript از مهارت‌های این سایت هستند. 💻";

    }


    if (
        text.includes("پروژه") ||
        text.includes("project")
    ) {

        return "می‌توانی پروژه‌ها را در صفحه «پروژه‌ها» ببینی. 🚀";

    }


    if (
        text.includes("تماس") ||
        text.includes("contact")
    ) {

        return "برای ارتباط می‌توانی وارد صفحه تماس شوی. 📩";

    }


    if (
        text.includes("سلطان وب") ||
        text.includes("سایت")
    ) {

        return "سلطان وب یک سایت شخصی برای نمایش مهارت‌ها و پروژه‌هاست. 👑";

    }


    if (
        text.includes("کمک") ||
        text.includes("help")
    ) {

        return "درباره HTML، CSS، JavaScript یا پروژه‌ها از من سؤال کن. 🤖";

    }


    if (text.includes("متین")) {

        return "متین، امیدوارم از ساخت سایت لذت ببری! 👑💚";

    }


    return "این سؤال را هنوز یاد نگرفته‌ام 😄 درباره HTML، CSS، JavaScript یا پروژه‌ها سؤال کن.";

}


function sendChatMessage(message) {

    const text =
        message.trim();


    if (text === "") {

        return;

    }


    addChatMessage(
        text,
        "user"
    );


    if (chatInput) {

        chatInput.value = "";

    }


    setTimeout(
        function() {

            const response =
                getBotResponse(text);


            addChatMessage(
                response,
                "bot"
            );

        },
        700
    );

}


// باز کردن ربات

if (chatToggle) {

    chatToggle.addEventListener(
        "click",
        function() {

            if (!chatWindow) {

                return;

            }


            chatWindow.hidden =
                !chatWindow.hidden;

        }
    );

}


// بستن ربات

if (chatClose) {

    chatClose.addEventListener(
        "click",
        function() {

            if (chatWindow) {

                chatWindow.hidden =
                    true;

            }

        }
    );

}


// ارسال پیام

if (chatForm) {

    chatForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();


            if (chatInput) {

                sendChatMessage(
                    chatInput.value
                );

            }

        }
    );

}


// سوال‌های آماده

const chatQuestions =
    document.querySelectorAll(
        ".chat-questions button"
    );


chatQuestions.forEach(
    function(button) {

        button.addEventListener(
            "click",
            function() {

                sendChatMessage(
                    button.textContent
                );

            }
        );

    }
);


// ========================================
// 👑 پایان
// ========================================

console.log(
    "👑 SULTAN WEB READY!"
);
