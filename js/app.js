const sidebar = document.getElementById('sidebar')
const openSidebar = document.getElementById('openSidebar')
const closeSidebar = document.getElementById('closeSidebar')

document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("hidden");
});

document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("hidden");
});


function makeActive(type) { 
    const ayliq = document.getElementById("ayliq");
    const illik = document.getElementById("illik");

    const ekonomAyliq = document.getElementById("ekonomAyliq");
    const standartAyliq = document.getElementById("standartAyliq");
    const profAyliq = document.getElementById("profAyliq");

    const ekonomAy = document.getElementById("ekonomAY");
    const standartAy = document.getElementById("standartAy");
    const profAy = document.getElementById("profAy");

    if (type === "ayliq") {
        ayliq.style.backgroundColor = "#a271f2";
        ayliq.style.color = "#fff";
        illik.style.backgroundColor = "transparent";
        illik.style.color = "#94A3B8";

        ekonomAyliq.textContent = `₼5`;
        standartAyliq.textContent = `₼10`;
        profAyliq.textContent = `₼20`;

        ekonomAy.textContent = `/ay`;
        standartAy.textContent = `/ay`;
        profAy.textContent = `/ay`;
    } else {
        illik.style.backgroundColor = "#a271f2";
        illik.style.color = "#fff";
        ayliq.style.backgroundColor = "transparent";
        ayliq.style.color = "#94A3B8";

        ekonomAyliq.textContent = `₼${5 * 12}`;
        standartAyliq.textContent = `₼${10 * 12}`;
        profAyliq.textContent = `₼${20 * 12}`;

        ekonomAy.textContent = `/il`;
        standartAy.textContent = `/il`;
        profAy.textContent = `/il`;
    }
}

function makeCardActive(selectedCard) {
    const cards = document.querySelectorAll(".card");
    const buttons = document.querySelectorAll(".card button");

    // Bütün kart və button-lardan aktiv sinifləri sil
    cards.forEach(card => card.classList.remove("border-[#a271f2]", "shadow-xl"));
    buttons.forEach(button => button.classList.remove("bg-[#a271f2]", "text-white"));

    // Seçilmiş karta aktivlik siniflərini əlavə et
    selectedCard.classList.add("border-[#a271f2]", "shadow-xl");

    // Seçilmiş kartın içindəki button-u tap və aktiv et
    const selectedButton = selectedCard.querySelector("button");
    if (selectedButton) {
        selectedButton.classList.add("bg-[#a271f2]", "text-white");
    }
}

// Səhifə yüklənəndə ortadakı kartı aktiv et
document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll(".card");
    if (cards.length > 0) {
        const middleIndex = Math.floor(cards.length / 2);
        makeCardActive(cards[middleIndex]);
    }
});











