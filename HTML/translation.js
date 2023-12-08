function updateContent(langData) {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        element.textContent = langData[key];
    });
}

function setLanguagePreference(lang) {
    localStorage.setItem('language', lang);
    location.reload();
}

// Function to change language
async function changeLanguage(lang) {
    console.log("lang : " + lang);
    await setLanguagePreference(lang);

    const langData = await fetchLanguageData(lang);
    updateContent(langData);
}

async function fetchLanguageData(lang) {
    const response = await fetch(`languages/${lang}.json`);
    return response.json();
}

// Call updateContent() on page load
window.addEventListener('DOMContentLoaded', async () => {
    const userPreferredLanguage = localStorage.getItem('language') || 'fr';
    const langData = await fetchLanguageData(userPreferredLanguage);
    updateContent(langData);
});

let buttons = document.querySelector(".nav-links ul");
console.log("log : " + buttons);

let button = document.createElement("button");
button.value = "fr";
button.textContent = "Français";
button.id = "botBorder";
let li = document.createElement("li");
li.appendChild(button);
buttons.prepend(li);
button.addEventListener("click", () => changeLanguage('fr'));

button = document.createElement("button");
button.value = "en";
button.textContent = "English";
li = document.createElement("li");
li.appendChild(button);
buttons.prepend(li);
button.addEventListener("click", () => changeLanguage('en'));

button = document.createElement("button");
button.value = "elf";
button.textContent = "Elfique";
li = document.createElement("li");
li.appendChild(button);
buttons.prepend(li);
button.addEventListener("click", () => changeLanguage('elf'));