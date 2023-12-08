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

let buttons = document.createElement("div");

let button = document.createElement("option");
button.value = "fr";
button.text = "français";
buttons.appendChild(button);
button.addEventListener("click", () => changeLanguage('fr'));

button = document.createElement("option");
button.value = "en";
button.text = "english";
buttons.appendChild(button);
button.addEventListener("click", () => changeLanguage('en'));

button = document.createElement("option");
button.value = "elf";
button.text = "elfique";
buttons.appendChild(button);
button.addEventListener("click", () => changeLanguage('elf'));

document.querySelector("body").prepend(buttons);