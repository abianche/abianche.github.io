const texts = {
  en: {
    desc1:
      "Throughout my life, I have maintained an unwavering passion for computer science.",
    desc2:
      "My commitment to continuous growth drives me to constantly refine my skills while staying laser-focused on my goals.",
    desc3:
      "I maintain a keen awareness of emerging trends and developments within the field.",
    desc4:
      "As an early adopter, I eagerly embrace cutting-edge technologies, and my work as a remote professional allows me to leverage my expertise from any location.",
    desc5:
      "I embrace the discipline and strength of kickboxing, a pursuit that not only keeps me physically fit but also instills a sense of balance and determination that permeates my professional endeavors.",
  },
  it: {
    desc1:
      "Durante tutta la mia vita, ho mantenuto una passione incondizionata per l'informatica.",
    desc2:
      "Il mio impegno per una crescita continua mi spinge a raffinare costantemente le mie abilità rimanendo concentrato sui miei obiettivi.",
    desc3:
      "Mantengo una consapevolezza acuta delle tendenze emergenti e degli sviluppi nel campo.",
    desc4:
      "Come early adopter, abbraccio con entusiasmo le tecnologie all'avanguardia, e il mio lavoro come professionista remoto mi permette di sfruttare la mia esperienza da qualsiasi luogo.",
    desc5:
      "Abbraccio la disciplina e la forza della kickboxing, un'attività che non solo mi mantiene in forma fisicamente ma infonde anche un senso di equilibrio e determinazione che permea i miei sforzi professionali.",
  },
};

const userLang = navigator.language || navigator.userLanguage;
const defaultLang = userLang.startsWith("it") ? "it" : "en";

function changeLanguage(lang) {
  document.getElementById("desc1").innerText = texts[lang].desc1;
  document.getElementById("desc2").innerText = texts[lang].desc2;
  document.getElementById("desc3").innerText = texts[lang].desc3;
  document.getElementById("desc4").innerText = texts[lang].desc4;
  document.getElementById("desc5").innerText = texts[lang].desc5;
}

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
};
