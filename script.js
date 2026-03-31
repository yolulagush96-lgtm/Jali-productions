const toggle =
document.getElementById("darkModeToggle");

toggle.addEventListener("change", () =>{
    document.body.classList.toggle("dark-mode");
});

// SELECT PROJECT ITEMS
const portfolioItems = document.querySelectorAll(".portfolio-item");

// SELECT GRID LIGHTBOXES
const gridLightboxes = document.querySelectorAll(".grid-lightbox");
const gridCloseBtns = document.querySelectorAll(".grid-close");

// FULLSCREEN LIGHTBOX (your original one)
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.getElementById("lightbox-close");


// 1️⃣ OPEN GRID LIGHTBOX WHEN CLICKING PROJECT
portfolioItems.forEach(item => {
    item.addEventListener("click", () => {

        const project = item.getAttribute("data-project");
        const targetLightbox = document.getElementById(project + "-lightbox");

        if (targetLightbox) {
            targetLightbox.style.display = "flex";
        }
    });
});


// 2️⃣ CLOSE GRID LIGHTBOX
gridCloseBtns.forEach(btn => {
    btn.addEventListener("click", (e) => {
        e.target.closest(".grid-lightbox").style.display = "none";
    });
});


// 3️⃣ CLICK IMAGE INSIDE GRID → OPEN FULLSCREEN

const gridImages =
document.querySelectorAll("grid-images img");

gridCloseBtns.forEach(img => {
    img.addEventListener("click", () =>{
        lightbox.style.display = "flex";
        lightboxImg.src = img.src;
    });
});


// 4️⃣ CLOSE FULLSCREEN LIGHTBOX
closeBtn.addEventListener("click", () => {
    lightbox.style.display = "none";
});


// 5️⃣ OPTIONAL: CLICK OUTSIDE TO CLOSE (VERY NICE UX)

// close grid when clicking outside
gridLightboxes.forEach(box => {
    box.addEventListener("click", (e) => {
        if (e.target === box) {
            box.style.display = "none";
        }
    });
});

// close fullscreen when clicking outside image
lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = "none";
    }
});