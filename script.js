document.addEventListener("DOMContentLoaded", () => {
    const openBtn = document.getElementById("open-btn");
    const notebookCover = document.getElementById("notebook-cover");
    const opAudio = document.getElementById("mha-op-audio");
    
    const dekuAudio = document.getElementById("deku-audio");
    const bakugoAudio = document.getElementById("bakugo-audio");
    const dekuArtTrigger = document.getElementById("deku-art-trigger");
    const bakugoArtTrigger = document.getElementById("bakugo-art-trigger");

    const pages = document.querySelectorAll(".page-spread");
    const nextButtons = document.querySelectorAll(".next-page-btn");
    const prevButtons = document.querySelectorAll(".prev-page-btn");
    const navTriggers = document.querySelectorAll(".nav-page-trigger");

    // 1. Open Notebook Cover Flip & Start Theme Music
    if (openBtn && notebookCover) {
        openBtn.addEventListener("click", () => {
            notebookCover.classList.add("flipped");
            if (opAudio) {
                opAudio.volume = 0.4;
                opAudio.play().catch((e) => console.log("Audio autoplay restricted:", e));
            }
        });
    }

    // 2. Page Navigation Handler
    function showPage(pageNum) {
        pages.forEach((page) => {
            page.classList.remove("active-page");
        });
        const targetPage = document.getElementById(`page-${pageNum}`);
        if (targetPage) {
            targetPage.classList.add("active-page");
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }

    nextButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const nextTarget = btn.getAttribute("data-next");
            showPage(nextTarget);
        });
    });

    prevButtons.forEach((btn) => {
        btn.addEventListener("click", (e) => {
            e.preventDefault();
            const prevTarget = btn.getAttribute("data-prev");
            showPage(prevTarget);
        });
    });

    navTriggers.forEach((trigger) => {
        trigger.addEventListener("click", (e) => {
            e.preventDefault();
            const target = trigger.getAttribute("data-target");
            showPage(target);
        });
    });

    // 3. Interactive Audio Triggers for Sketches
    if (dekuArtTrigger && dekuAudio) {
        dekuArtTrigger.addEventListener("click", () => {
            dekuAudio.currentTime = 0;
            dekuAudio.play().catch((err) => console.warn("Deku audio play blocked:", err));
        });
    }

    if (bakugoArtTrigger && bakugoAudio) {
        bakugoArtTrigger.addEventListener("click", () => {
            bakugoAudio.currentTime = 0;
            bakugoAudio.play().catch((err) => console.warn("Bakugo audio play blocked:", err));
        });
    }
});
const urarakaAudio = document.getElementById("uraraka-audio");
    const urarakaArtTrigger = document.getElementById("uraraka-art-trigger");

    if (urarakaArtTrigger && urarakaAudio) {
        urarakaArtTrigger.addEventListener("click", () => {
            urarakaAudio.currentTime = 0;
            urarakaAudio.play().catch((err) => console.warn("Uraraka audio play blocked:", err));
        });
    }
    const iidaAudio = document.getElementById("iida-audio");
const iidaArtTrigger = document.getElementById("iida-art-trigger");

if (iidaArtTrigger && iidaAudio) {
    iidaArtTrigger.addEventListener("click", () => {
        iidaAudio.currentTime = 0;
        iidaAudio.play().catch((err) => console.warn("Iida audio play blocked:", err));
    });
}
// Todoroki Audio Trigger Setup
const todorokiAudio = document.getElementById("todoroki-audio");
const todorokiArtTrigger = document.getElementById("todoroki-art-trigger");

if (todorokiArtTrigger && todorokiAudio) {
    todorokiArtTrigger.addEventListener("click", () => {
        todorokiAudio.currentTime = 0;
        todorokiAudio.play().catch((err) => {
            console.warn("Todoroki audio play blocked or interrupted:", err);
        });
    });
}
const openBtn = document.getElementById("open-btn");
const notebookCover = document.getElementById("notebook-cover");

if (openBtn && notebookCover) {
    openBtn.addEventListener("click", () => {
        notebookCover.style.display = "none";
    });
}