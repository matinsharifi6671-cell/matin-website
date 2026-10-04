// ========================================
// 👑 SULTAN WEB
// ========================================


// ساعت و تاریخ
function updateClock() {

    const now = new Date();

    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    const seconds = String(now.getSeconds()).padStart(2, "0");

    const clock = document.getElementById("clock");

    if (clock) {
        clock.textContent =
            `${hours}:${minutes}:${seconds}`;
    }


    const date = document.getElementById("date");

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

let visits = localStorage.getItem("visits");


if (visits === null) {

    visits = 0;

}


visits = Number(visits) + 1;


localStorage.setItem("visits", visits);


const visitCount =
    document.getElementById("visitCount");


if (visitCount) {

    visitCount.textContent = visits;

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
    JSON.parse(localStorage.getItem("todos")) || [];



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


    todos.forEach(function(todo, index) {

        const li =
            document.createElement("li");


        const span =
            document.createElement("span");


        span.textContent = todo;


        const deleteButton =
            document.createElement("button");


        deleteButton.textContent = "حذف";


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

    });

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
// 💡 جملات انگیزشی
// ========================================

const quotes = [

    "هیچ‌وقت برای شروع دیر نیست! 🚀",

    "هر روز یک قدم به هدفت نزدیک‌تر شو. 💚",

    "با تمرین، برنامه‌نویسی آسان‌تر می‌شود. 💻",

    "اشتباه کردن بخشی از یادگیری است. 🔥",

    "ایده‌هایت را به پروژه تبدیل کن. 👑"

];


const quoteText =
    document.getElementById("quoteText");


const quoteButton =
    document.getElementById("quoteButton");


if (quoteButton) {

    quoteButton.addEventListener(
        "click",
        function() {

            const randomIndex =
                Math.floor(
                    Math.random() * quotes.length
                );


            if (quoteText) {

                quoteText.textContent =
                    quotes[randomIndex];

            }

        }
    );

}



// ========================================
// 💬 پیام سفارشی
// ========================================

const customMessage =
    document.getElementById("customMessage");

const messageButton =
    document.getElementById("messageButton");

const messageResult =
    document.getElementById("messageResult");


if (messageButton) {

    messageButton.addEventListener(
        "click",
        function() {

            const message =
                customMessage.value.trim();


            if (message === "") {

                messageResult.textContent =
                    "لطفاً یک پیام بنویس.";

                return;

            }


            messageResult.textContent =
                `💚 پیام شما: ${message}`;

        }
    );

}



// ========================================
// 🎨 تغییر رنگ
// ========================================

const colorButtons =
    document.querySelectorAll(".color-btn");


colorButtons.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            const color =
                button.dataset.color;


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

        }
    );

});



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



function addChatMessage(
    message,
    type
) {

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


    chatInput.value = "";


    setTimeout(
        function() {

            const response =
                getBotResponse(text);


            addChatMessage(
                response,
                "bot"
            );

        },
        900
    );

}



if (chatToggle) {

    chatToggle.addEventListener(
        "click",
        function() {

            chatWindow.hidden =
                !chatWindow.hidden;

        }
    );

}



if (chatClose) {

    chatClose.addEventListener(
        "click",
        function() {

            chatWindow.hidden = true;

        }
    );

}



if (chatForm) {

    chatForm.addEventListener(
        "submit",
        function(event) {

            event.preventDefault();

            sendChatMessage(
                chatInput.value
            );

        }
    );

}



const chatQuestions =
    document.querySelectorAll(
        ".chat-questions button"
    );


chatQuestions.forEach(function(button) {

    button.addEventListener(
        "click",
        function() {

            sendChatMessage(
                button.textContent
            );

        }
    );

});



console.log(
    "👑 SULTAN WEB READY!"
);
