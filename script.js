/* =========================================
   👑 SULTAN WEB - STYLE.CSS
   ========================================= */

/* ---------- رنگ‌ها ---------- */

:root {
  --primary: #755cff;
  --primary-dark: #5940df;
  --secondary: #00c2ff;
  --accent: #a78bfa;

  --bg: #f5f7ff;
  --surface: rgba(255, 255, 255, 0.92);
  --surface-solid: #ffffff;
  --surface-soft: #f0efff;

  --text: #17152b;
  --muted: #6b6880;
  --border: rgba(117, 92, 255, 0.14);

  --shadow: 0 15px 45px rgba(45, 35, 100, 0.12);
  --shadow-hover: 0 22px 55px rgba(45, 35, 100, 0.18);

  --radius: 20px;
}


/* ---------- حالت شب ---------- */

body.dark {
  --bg: #0d0d18;
  --surface: rgba(28, 28, 48, 0.94);
  --surface-solid: #1c1c30;
  --surface-soft: #252540;

  --text: #f5f3ff;
  --muted: #c0bdd2;
  --border: rgba(167, 139, 250, 0.2);

  --shadow: 0 15px 45px rgba(0, 0, 0, 0.35);
  --shadow-hover: 0 22px 55px rgba(0, 0, 0, 0.5);

  color: var(--text);
  background:
    radial-gradient(
      circle at top right,
      rgba(117, 92, 255, 0.18),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #0d0d18,
      #15152a
    );
}


/* =========================================
   🔄 RESET
   ========================================= */

* {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  scroll-behavior: smooth;
}

body {
  min-height: 100vh;
  font-family: Tahoma, Arial, sans-serif;
  color: var(--text);

  background:
    radial-gradient(
      circle at top right,
      rgba(117, 92, 255, 0.12),
      transparent 35%
    ),
    linear-gradient(
      135deg,
      #f5f7ff,
      #eef1ff
    );

  background-size: 200% 200%;
  animation: backgroundMove 15s ease infinite;

  transition:
    background 0.35s ease,
    color 0.35s ease;
}


/* =========================================
   🎬 انیمیشن پس‌زمینه
   ========================================= */

@keyframes backgroundMove {
  0% {
    background-position: 0% 50%;
  }

  50% {
    background-position: 100% 50%;
  }

  100% {
    background-position: 0% 50%;
  }
}


/* =========================================
   🧭 HEADER
   ========================================= */

header {
  width: 100%;
  position: sticky;
  top: 0;
  z-index: 1000;

  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 20px;

  padding: 15px 6%;

  background: var(--surface);
  backdrop-filter: blur(18px);
  -webkit-backdrop-filter: blur(18px);

  border-bottom: 1px solid var(--border);

  box-shadow: var(--shadow);

  transition:
    background 0.35s ease,
    box-shadow 0.35s ease;
}


/* =========================================
   👑 LOGO
   ========================================= */

.logo {
  display: flex;
  align-items: center;
  gap: 10px;

  color: var(--text);
  text-decoration: none;

  font-size: 20px;
  font-weight: bold;

  white-space: nowrap;
}

.logo img {
  width: 45px;
  height: 45px;

  object-fit: cover;

  border-radius: 50%;

  border: 2px solid var(--primary);

  box-shadow:
    0 5px 18px rgba(117, 92, 255, 0.25);
}


/* =========================================
   🔗 NAV
   ========================================= */

nav {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;

  flex-wrap: wrap;
}

nav a {
  color: var(--text);
  text-decoration: none;

  padding: 9px 13px;

  border-radius: 12px;

  transition:
    color 0.25s ease,
    background 0.25s ease,
    transform 0.25s ease;
}

nav a:hover {
  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--secondary)
    );

  transform: translateY(-2px);
}


/* =========================================
   🌙 THEME BUTTON
   ========================================= */

#themeButton {
  border: none;

  padding: 10px 15px;

  border-radius: 14px;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  font-family: inherit;
  font-size: 14px;
  font-weight: bold;

  cursor: pointer;

  box-shadow:
    0 8px 22px rgba(117, 92, 255, 0.25);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

#themeButton:hover {
  transform: translateY(-2px);

  box-shadow:
    0 12px 28px rgba(117, 92, 255, 0.35);
}


/* =========================================
   🚀 HERO
   ========================================= */

.hero {
  width: min(1000px, 90%);

  margin: 60px auto 30px;

  padding: 65px 30px;

  text-align: center;

  border-radius: 30px;

  background:
    linear-gradient(
      135deg,
      rgba(117, 92, 255, 0.14),
      rgba(0, 194, 255, 0.08)
    );

  border: 1px solid var(--border);

  box-shadow: var(--shadow);

  transition:
    background 0.35s ease,
    box-shadow 0.35s ease;
}

.hero-badge {
  display: inline-block;

  padding: 8px 15px;

  margin-bottom: 18px;

  color: var(--primary);

  background: var(--surface-soft);

  border: 1px solid var(--border);

  border-radius: 999px;

  font-weight: bold;
}

.hero h1 {
  font-size: clamp(32px, 6vw, 62px);

  line-height: 1.4;

  margin-bottom: 20px;
}

.hero h1 span {
  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--secondary)
    );

  -webkit-background-clip: text;
  background-clip: text;

  color: transparent;
}

.hero p {
  max-width: 720px;

  margin: 0 auto 25px;

  color: var(--muted);

  line-height: 2;
  font-size: 17px;
}


/* =========================================
   🔘 BUTTONS
   ========================================= */

.hero-buttons {
  display: flex;

  justify-content: center;
  align-items: center;

  gap: 12px;

  flex-wrap: wrap;

  margin-top: 20px;
}

.btn {
  display: inline-flex;

  align-items: center;
  justify-content: center;

  border: none;

  padding: 12px 20px;

  border-radius: 14px;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  font-family: inherit;
  font-size: 15px;
  font-weight: bold;

  text-decoration: none;

  cursor: pointer;

  box-shadow:
    0 8px 22px rgba(117, 92, 255, 0.22);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease;
}

.btn:hover {
  transform: translateY(-3px);

  box-shadow:
    0 14px 30px rgba(117, 92, 255, 0.3);
}

.secondary-btn {
  background:
    linear-gradient(
      135deg,
      var(--secondary),
      #1688e8
    );
}


/* =========================================
   🖼️ MAIN LOGO
   ========================================= */

.main-logo {
  display: flex;
  justify-content: center;

  margin: 35px auto;
}

.main-logo img {
  width: min(250px, 70vw);
  height: min(250px, 70vw);

  object-fit: cover;

  border-radius: 50%;

  border: 5px solid var(--primary);

  box-shadow:
    0 20px 50px rgba(117, 92, 255, 0.25);

  transition:
    transform 0.3s ease,
    box-shadow 0.3s ease;
}

.main-logo img:hover {
  transform: scale(1.04);
}


/* =========================================
   📦 CONTAINER
   ========================================= */

.container {
  width: min(1050px, 90%);

  margin: 30px auto;

  padding: 30px;

  background: var(--surface);

  border: 1px solid var(--border);

  border-radius: var(--radius);

  box-shadow: var(--shadow);

  transition:
    background 0.35s ease,
    color 0.35s ease,
    box-shadow 0.35s ease;
}

.center {
  text-align: center;
}

.container h2 {
  margin-bottom: 20px;

  font-size: 25px;
}


/* =========================================
   💻 CARDS
   ========================================= */

.cards {
  display: grid;

  grid-template-columns:
    repeat(3, 1fr);

  gap: 20px;
}

.card {
  padding: 25px;

  background: var(--surface-solid);

  border: 1px solid var(--border);

  border-radius: 18px;

  box-shadow: 0 8px 25px rgba(0, 0, 0, 0.06);

  transition:
    transform 0.25s ease,
    box-shadow 0.25s ease,
    background 0.35s ease;
}

.card:hover {
  transform: translateY(-7px);

  box-shadow: var(--shadow-hover);
}

.card .emoji {
  font-size: 45px;

  margin-bottom: 12px;
}

.card h3 {
  margin-bottom: 10px;
}

.card p {
  color: var(--muted);

  line-height: 1.8;
}


/* =========================================
   🕐 CLOCK
   ========================================= */

#clock {
  margin: 10px 0;

  font-size: clamp(35px, 8vw, 65px);

  font-weight: bold;

  color: var(--primary);
}

#date {
  color: var(--muted);

  font-size: 16px;
}


/* =========================================
   🔢 COUNTER
   ========================================= */

#counter {
  margin: 10px 0 20px;

  font-size: 55px;

  font-weight: bold;

  color: var(--primary);
}


/* =========================================
   ❤️ VOTES
   ========================================= */

#votes {
  margin: 15px 0;

  font-size: 25px;

  font-weight: bold;

  color: var(--primary);
}

#voteMessage {
  margin-top: 15px;

  color: var(--muted);
}


/* =========================================
   📝 TODO
   ========================================= */

#todoForm {
  display: flex;

  gap: 10px;

  margin-bottom: 15px;
}

#todoInput {
  flex: 1;

  min-width: 0;

  padding: 13px 15px;

  border: 1px solid var(--border);

  border-radius: 13px;

  outline: none;

  color: var(--text);

  background: var(--surface-solid);

  font-family: inherit;
  font-size: 15px;

  transition:
    border 0.25s ease,
    box-shadow 0.25s ease,
    background 0.35s ease;
}

#todoInput:focus {
  border-color: var(--primary);

  box-shadow:
    0 0 0 4px rgba(117, 92, 255, 0.12);
}

#todoInfo {
  margin-bottom: 12px;

  color: var(--muted);
}

#todoList {
  list-style: none;

  display: flex;

  flex-direction: column;

  gap: 10px;
}

#todoList li {
  display: flex;

  align-items: center;
  justify-content: space-between;

  gap: 15px;

  padding: 12px 15px;

  background: var(--surface-soft);

  border-radius: 12px;

  border: 1px solid var(--border);

  color: var(--text);
}

#todoList button {
  border: none;

  background: transparent;

  cursor: pointer;

  font-size: 17px;
}


/* =========================================
   💡 QUOTE
   ========================================= */

#quote {
  max-width: 700px;

  margin: 0 auto 18px;

  color: var(--muted);

  line-height: 2;

  font-size: 17px;
}


/* =========================================
   🎉 MESSAGE
   ========================================= */

#message {
  margin-top: 18px;

  color: var(--primary);

  font-weight: bold;

  line-height: 1.8;
}


/* =========================================
   📩 FORM
   ========================================= */

form input,
form textarea,
form select {
  width: 100%;

  padding: 13px 15px;

  margin-bottom: 12px;

  border: 1px solid var(--border);

  border-radius: 13px;

  outline: none;

  color: var(--text);

  background: var(--surface-solid);

  font-family: inherit;

  transition:
    border 0.25s ease,
    box-shadow 0.25s ease,
    background 0.35s ease;
}

form input:focus,
form textarea:focus,
form select:focus {
  border-color: var(--primary);

  box-shadow:
    0 0 0 4px rgba(117, 92, 255, 0.12);
}

form textarea {
  min-height: 140px;

  resize: vertical;
}

#formResult {
  margin-top: 15px;

  color: var(--primary);

  font-weight: bold;
}


/* =========================================
   ⬆️ TOP BUTTON
   ========================================= */

#topButton {
  position: fixed;

  left: 20px;
  bottom: 20px;

  width: 48px;
  height: 48px;

  border: none;

  border-radius: 50%;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  cursor: pointer;

  opacity: 0;

  visibility: hidden;

  transform: translateY(15px);

  transition:
    opacity 0.25s ease,
    visibility 0.25s ease,
    transform 0.25s ease;

  z-index: 900;
}

#topButton.show {
  opacity: 1;

  visibility: visible;

  transform: translateY(0);
}


/* =========================================
   🤖 CHATBOT
   ========================================= */

#chat-toggle {
  position: fixed;

  right: 20px;
  bottom: 20px;

  width: 58px;
  height: 58px;

  border: none;

  border-radius: 50%;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--secondary)
    );

  font-size: 25px;

  cursor: pointer;

  box-shadow: var(--shadow);

  z-index: 1001;

  transition:
    transform 0.25s ease;
}

#chat-toggle:hover {
  transform: scale(1.08);
}

#chat-window {
  position: fixed;

  right: 20px;
  bottom: 90px;

  width: min(360px, calc(100vw - 40px));

  max-height: 600px;

  display: flex;

  flex-direction: column;

  overflow: hidden;

  background: var(--surface-solid);

  border: 1px solid var(--border);

  border-radius: 20px;

  box-shadow: var(--shadow-hover);

  z-index: 1000;
}

#chat-window[hidden] {
  display: none;
}

#chat-header {
  display: flex;

  align-items: center;
  justify-content: space-between;

  padding: 15px;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--secondary)
    );
}

#chat-close {
  border: none;

  background: transparent;

  color: white;

  font-size: 18px;

  cursor: pointer;
}

#chat-messages {
  min-height: 200px;
  max-height: 300px;

  overflow-y: auto;

  padding: 15px;

  display: flex;

  flex-direction: column;

  gap: 10px;
}

.bot-message,
.user-message {
  max-width: 85%;

  padding: 10px 13px;

  border-radius: 14px;

  line-height: 1.7;

  word-break: break-word;
}

.bot-message {
  align-self: flex-start;

  background: var(--surface-soft);

  color: var(--text);
}

.user-message {
  align-self: flex-end;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );
}

.chat-questions {
  display: flex;

  flex-wrap: wrap;

  gap: 7px;

  padding: 0 15px 10px;
}

.chat-questions button {
  border: 1px solid var(--border);

  padding: 7px 10px;

  border-radius: 10px;

  color: var(--text);

  background: var(--surface-soft);

  font-family: inherit;

  cursor: pointer;
}

#chat-form {
  display: flex;

  gap: 8px;

  padding: 10px 15px 15px;
}

#chat-form input {
  margin: 0;
}

#chat-form button {
  width: 48px;

  border: none;

  border-radius: 12px;

  color: white;

  background:
    linear-gradient(
      135deg,
      var(--primary),
      var(--primary-dark)
    );

  cursor: pointer;
}


/* =========================================
   🦶 FOOTER
   ========================================= */

footer {
  margin-top: 50px;

  padding: 30px 20px;

  text-align: center;

  color: var(--muted);

  border-top: 1px solid var(--border);

  background: var(--surface);
}


/* =========================================
   📱 TABLET
   ========================================= */

@media (max-width: 850px) {

  header {
    flex-wrap: wrap;

    justify-content: center;
  }

  .logo {
    width: 100%;

    justify-content: center;
  }

  .cards {
    grid-template-columns: 1fr 1fr;
  }
}


/* =========================================
   📱 MOBILE
   ========================================= */

@media (max-width: 600px) {

  header {
    position: relative;

    padding: 14px;
  }

  nav {
    width: 100%;

    gap: 5px;
  }

  nav a {
    font-size: 13px;

    padding: 8px 9px;
  }

  #themeButton {
    width: 100%;
  }

  .hero {
    width: 92%;

    margin-top: 30px;

    padding: 40px 18px;
  }

  .hero p {
    font-size: 15px;
  }

  .container {
    width: 92%;

    padding: 22px 17px;
  }

  .cards {
    grid-template-columns: 1fr;
  }

  #todoForm {
    flex-direction: column;
  }

  #todoForm .btn {
    width: 100%;
  }

  #chat-window {
    right: 10px;
    bottom: 85px;

    width: calc(100vw - 20px);
  }

  #chat-toggle {
    right: 15px;
    bottom: 15px;
  }

  #topButton {
    left: 15px;
    bottom: 15px;
  }
}


/* =========================================
   ♿ کاهش حرکت
   ========================================= */

@media (prefers-reduced-motion: reduce) {

  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;

    animation-duration: 0.01ms !important;

    animation-iteration-count: 1 !important;

    transition-duration: 0.01ms !important;
  }
}
