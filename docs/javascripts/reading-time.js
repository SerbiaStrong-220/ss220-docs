document.addEventListener("DOMContentLoaded", function() {
    const article = document.querySelector(".md-content__inner");

    if (article) {
        article.style.position = "relative";

        const text = article.innerText || article.textContent;
        const wordCount = text.trim().split(/\s+/).length;
        const readingTime = Math.ceil(wordCount / 200);
        const metaInfo = document.createElement("div");

        Object.assign(metaInfo.style, {
            position: "absolute",
            top: "30px",
            right: "35px",
            fontFamily: "var(--font-primary, monospace)",
            fontSize: "9px",
            color: "var(--md-accent-fg-color, #b0a0e0)",
            opacity: "0.6",
            letterSpacing: "1px",
            pointerEvents: "none",
            zIndex: "10"
        });
        metaInfo.innerHTML = `SYS_DECODE_TIME: ~${readingTime} МИН.`;
        article.appendChild(metaInfo);
    }
});
