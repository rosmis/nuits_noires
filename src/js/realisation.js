window.addEventListener("load", () => {
    const box = document.getElementById("next-project"),
        docHeight = document.documentElement.offsetHeight;

    window.addEventListener("scroll", () => {
        const scrolled = window.scrollY / (docHeight - window.innerHeight),
            transformValue = `scale(${scrolled})`;

        if (scrolled < 0.8) return;

        box.style.transform = transformValue;
    });
});
