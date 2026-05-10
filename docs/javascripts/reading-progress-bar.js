document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.createElement("div");
    progressBar.id = "reading-progress";
    progressBar.style.position = "fixed";
    progressBar.style.top = "61px";
    progressBar.style.left = "0";
    progressBar.style.height = "3px";
    progressBar.style.background = "var(--md-accent-fg-color)";
    progressBar.style.width = "0%";
    progressBar.style.zIndex = "99";
    progressBar.style.boxShadow = "var(--custom-shadow-glow)";
    document.body.appendChild(progressBar);

    window.addEventListener("scroll", () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        progressBar.style.width = scrolled + "%";
    });
});
