const page = document.getElementById("page");
const pageContent = document.getElementById("pageContent");

function openPage(type) {
    page.classList.remove("hidden");
}

function goBack() {
    page.classList.add("hidden");
}