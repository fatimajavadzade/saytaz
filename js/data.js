const rangeData = [
    {
            "id": 1,
            "name": "Bloq",
            "price": 200,
            "type": "website_addons"
    },
    {
            "id": 2,
            "name": "Üzv girişi /‍‍‍ Profillər",
            "price": 400,
            "type": "website_addons"
    },
    {
            "id": 8,
            "name": "Responsive",
            "price": 100,
            "type": "website_addons"
    },
    {
            "id": 22,
            "name": "Forum",
            "price": 400,
            "type": "website_addons"
    },
    {
            "id": 23,
            "name": "Mesajlaşma",
            "price": 50,
            "type": "website_addons"
    },
    {
            "id": 24,
            "name": "Canlı Söhbət",
            "price": 50,
            "type": "website_addons"
    },
    {
            "id": 25,
            "name": "Qalereya",
            "price": 100,
            "type": "website_addons"
    },
    {
            "id": 26,
            "name": "Əlaqə Forması",
            "price": 100,
            "type": "website_addons"
    },
    {
            "id": 27,
            "name": "Saytda Axtarış",
            "price": 100,
            "type": "website_addons"
    },
    {
            "id": 28,
            "name": "Xəritə Məlumatı / Geolocation",
            "price": 100,
            "type": "website_addons"
    },
    {
            "id": 29,
            "name": "Rezervasyon",
            "price": 400,
            "type": "website_addons"
    },
    {
            "id": 30,
            "name": "Sosial Media inteqrasiyası",
            "price": 50,
            "type": "website_addons"
    },
    {
            "id": 31,
            "name": "Analitika / İzləmə",
            "price": 50,
            "type": "website_addons"
    },
    {
            "id": 36,
            "name": "Admin Panel",
            "price": 300,
            "type": "website_addons"
    }
]

const checkData = [
    {
            "id": 3,
            "name": "Başlıqlar & Meta",
            "price": 200,
            "type": "seo_addons"
    },
    {
            "id": 32,
            "name": "Açar söz",
            "price": 300,
            "type": "seo_addons"
    },
    {
            "id": 33,
            "name": "+20 Qabaqcıl Texnika",
            "price": 300,
            "type": "seo_addons"
    },
    {
            "id": 34,
            "name": "Başlıq Teqləri",
            "price": 100,
            "type": "seo_addons"
    },
    {
            "id": 35,
            "name": "Sitemap",
            "price": 100,
            "type": "seo_addons"
    }
]

const eccomerceData = [
    {
            "id": 38,
            "name": "Ödəniş",
            "price": 200,
            "type": "ecommerce"
    },
    {
            "id": 39,
            "name": "Səbət",
            "price": 500,
            "type": "ecommerce"
    },
    {
            "id": 40,
            "name": "Məhsullar",
            "price": 300,
            "type": "ecommerce"
    },
    {
            "id": 41,
            "name": "Bəyəndiklərim",
            "price": 300,
            "type": "ecommerce"
    },
    {
            "id": 42,
            "name": "Filtr",
            "price": 300,
            "type": "ecommerce"
    },
    {
            "id": 43,
            "name": "Məhsul Haqqında",
            "price": 200,
            "type": "ecommerce"
    }
]

const statik = document.getElementById('statik');
const elaveler = document.getElementById('elaveler');
const seo = document.getElementById('seo');
const ticaret = document.getElementById('ticaret');
const logo = document.getElementById('logo');
const totalpr = document.getElementById('totalpr'); // Total price element

// Statik səhifeler
const costDisplay = document.getElementById('costDisplay');
const inpPages = document.getElementById('inpPages');
const inpComplexity = document.getElementById('inpComplexity');

function updateCost() {
    let pageCount = inpPages.value;
    let complexity = inpComplexity.value; // 1 = Sadə, 2 = Orta, 3 = Xüsusi
    let baseCost = pageCount * 100;
    let finalCost = baseCost * complexity; 

    costDisplay.textContent = `${pageCount} səhifə / ₼ ${finalCost}`;
    statik.textContent = `₼ ${finalCost}`;
    updateTotal(); // Update total when statik price changes
}

inpPages.addEventListener('input', updateCost);
inpComplexity.addEventListener('input', updateCost);

// Veb sayt elaveleri
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const webCost = document.getElementById("webCost");

    function updateWebCost() {
        let totalCost = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const addon = rangeData.find(item => item.name === checkbox.name);
                if (addon) {
                    totalCost += addon.price;
                }
            }
        });

        webCost.textContent = `₼ ${totalCost}`;
        elaveler.textContent = `₼ ${totalCost}`;
        updateTotal(); // Update total when web cost changes
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateWebCost);
    });

    updateWebCost(); // Səhifə yüklənərkən xərci yenilə
});

// SEO qiyməti
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const searchCost = document.getElementById("searchCost");

    function updateSearchCost() {
        let totalCost = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const addon = checkData.find(item => item.name === checkbox.name);
                if (addon) {
                    totalCost += addon.price;
                }
            }
        });

        searchCost.textContent = `₼ ${totalCost}`;
        seo.textContent = `₼ ${totalCost}`;
        updateTotal(); // Update total when seo cost changes
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateSearchCost);
    });

    updateSearchCost(); // Səhifə yüklənərkən xərci yenilə
});

// E-ticarət qiyməti
document.addEventListener("DOMContentLoaded", function () {
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const ticaretCost = document.getElementById("ticaretCost");

    function updateTicaretCost() {
        let totalCost = 0;

        checkboxes.forEach(checkbox => {
            if (checkbox.checked) {
                const addon = eccomerceData.find(item => item.name === checkbox.name);
                if (addon) {
                    totalCost += addon.price;
                }
            }
        });

        ticaretCost.textContent = `₼ ${totalCost}`;
        ticaret.textContent = `₼ ${totalCost}`;
        updateTotal(); // Update total when ticaret cost changes
    }

    checkboxes.forEach(checkbox => {
        checkbox.addEventListener("change", updateTicaretCost);
    });

    updateTicaretCost(); // İlk dəfə səhifə yüklənərkən hesablasın
});

// Logo dizayn qiyməti
document.addEventListener("DOMContentLoaded", function () {
    const rangeInput = document.getElementById("inp3");
    const logoCost = document.getElementById("logoCost");

    function updateLogoCost() {
        const value = parseInt(rangeInput.value);

        let cost = 0;
        if (value === 1) {
            cost = 100;
        } else if (value === 2) {
            cost = 200;
        }

        logoCost.textContent = `₼ ${cost}`;
        logo.textContent = `₼ ${cost}`;
        updateTotal(); // Update total when logo cost changes
    }

    rangeInput.addEventListener("input", updateLogoCost);

    updateLogoCost(); // İlk dəfə səhifə yüklənərkən hesablasın
});

// Total price calculation function
function updateTotal() {
    // Get all individual section costs
    const statikCost = parseFloat(statik.textContent.replace('₼ ', '') || 0);
    const elavelerCost = parseFloat(elaveler.textContent.replace('₼ ', '') || 0);
    const seoCost = parseFloat(seo.textContent.replace('₼ ', '') || 0);
    const ticaretCost = parseFloat(ticaret.textContent.replace('₼ ', '') || 0);
    const logoCost = parseFloat(logo.textContent.replace('₼ ', '') || 0);

    // Calculate the total
    const totalCost = statikCost + elavelerCost + seoCost + ticaretCost + logoCost;

    // Update the total price display
    totalpr.textContent = `₼ ${totalCost}`;
}

updateTotal(); // Initial calculation when the page loads
