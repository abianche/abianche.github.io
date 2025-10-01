const texts = {
  en: {
    desc1: "I've always had a genuine passion for computer science.",
    desc2: "I enjoy constantly learning and building new skills.",
    desc3:
      "I like keeping up with new ideas and technologies, and I'm often excited to try them out early.",
    desc4:
      "Working remotely gives me the freedom to apply my expertise from anywhere, while staying connected and effective.",
    desc5:
      "Outside of tech, I practice combat sports, which help me stay active, focused, and balanced - qualities that I bring into my professional life as well.",
  },
  it: {
    desc1: "Ho sempre avuto una vera passione per l'informatica.",
    desc2: "Mi piace continuare ad apprendere e sviluppare nuove competenze.",
    desc3:
      "Mi entusiasma seguire le nuove idee e tecnologie, e sono spesso tra i primi a provarle.",
    desc4:
      "Lavorare da remoto mi dà la libertà di mettere in pratica le mie competenze ovunque, restando connesso ed efficace.",
    desc5:
      "Al di fuori della tecnologia, pratico sport da combattimento, che mi aiutano a restare attivo, concentrato ed equilibrato - qualità che porto anche nella mia vita professionale.",
  },
};

const userLang = navigator.language ?? navigator.userLanguage;
const defaultLang = userLang.startsWith("it") ? "it" : "en";
const themeStorageKey = "theme-preference";
const themeToggleButton = document.getElementById("themeToggle");
const themeToggleIcon = document.getElementById("themeToggleIcon");
const metaThemeColor = document.querySelector('meta[name="theme-color"]');

function changeLanguage(lang) {
  document.getElementById("desc1").innerText = texts[lang].desc1;
  document.getElementById("desc2").innerText = texts[lang].desc2;
  document.getElementById("desc3").innerText = texts[lang].desc3;
  document.getElementById("desc4").innerText = texts[lang].desc4;
  document.getElementById("desc5").innerText = texts[lang].desc5;
}

function getStoredTheme() {
  try {
    const storedTheme = localStorage.getItem(themeStorageKey);
    if (storedTheme === "light" || storedTheme === "dark") {
      return storedTheme;
    }
  } catch {
    return null;
  }
}

function applyTheme(theme) {
  const resolvedTheme = theme === "light" ? "light" : "dark";
  const isLight = resolvedTheme === "light";

  document.body.classList.toggle("light-theme", isLight);
  document.body.classList.toggle("dark-theme", !isLight);

  if (themeToggleIcon) {
    themeToggleIcon.classList.toggle("fa-sun", isLight);
    themeToggleIcon.classList.toggle("fa-moon", !isLight);
  }

  if (themeToggleButton) {
    themeToggleButton.setAttribute(
      "aria-label",
      isLight ? "Switch to dark theme" : "Switch to light theme"
    );
    themeToggleButton.setAttribute("aria-pressed", isLight ? "true" : "false");
  }

  if (metaThemeColor) {
    metaThemeColor.setAttribute("content", isLight ? "#f5f5f5" : "#212121");
  }

  try {
    localStorage.setItem(themeStorageKey, resolvedTheme);
  } catch {
    // Ignore storage errors so the toggle keeps working
  }
}

if (themeToggleButton) {
  themeToggleButton.addEventListener("click", function () {
    const nextTheme = document.body.classList.contains("light-theme")
      ? "dark"
      : "light";
    applyTheme(nextTheme);
  });
}

const storedTheme = getStoredTheme();
const prefersLightTheme = window.matchMedia
  ? window.matchMedia("(prefers-color-scheme: light)").matches
  : false;
const initialTheme = storedTheme || (prefersLightTheme ? "light" : "dark");
applyTheme(initialTheme);

document
  .getElementById("languageSwitcher")
  .addEventListener("change", function (e) {
    changeLanguage(e.target.value);
  });

const currentYear = new Date().getFullYear();
document.getElementById(
  "copyright"
).innerText = `©${currentYear} Alessio Bianchetti`;

window.onload = function () {
  changeLanguage(defaultLang);
  document.getElementById("content").style.display = "block";
};
