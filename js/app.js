const sidebar = document.getElementById('sidebar')
const openSidebar = document.getElementById('openSidebar')
const closeSidebar = document.getElementById('closeSidebar')

document.getElementById("openSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.remove("hidden");
});

document.getElementById("closeSidebar").addEventListener("click", function() {
    document.getElementById("sidebar").classList.add("hidden");
});


