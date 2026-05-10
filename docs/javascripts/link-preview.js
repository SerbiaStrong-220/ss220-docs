document.addEventListener("DOMContentLoaded", function() {
    const previewBox = document.createElement("div");
    Object.assign(previewBox.style, {
        position: "absolute", width: "300px", padding: "15px",
        background: "var(--custom-panel-gradient, rgba(22, 17, 48, 0.95))",
        backdropFilter: "blur(10px)", border: "1px solid rgba(176, 160, 224, 0.3)",
        borderRadius: "12px", boxShadow: "0 10px 30px rgba(0,0,0,0.5)",
        color: "var(--custom-text-color, #fff)", fontSize: "13px", fontFamily: "var(--font-body)",
        pointerEvents: "none", opacity: "0", transition: "opacity 0.2s",
        zIndex: "9999", display: "none"
    });
    document.body.appendChild(previewBox);

    const cache = {};
    let hoverTimeout;

    document.querySelectorAll(".md-content__inner a").forEach(link => {
        if (link.hostname !== window.location.hostname || link.hash) return;

        link.addEventListener("mouseenter", (e) => {
            const url = link.href;

            hoverTimeout = setTimeout(() => {
                previewBox.style.display = "block";
                previewBox.innerHTML = '<span style="color: var(--md-accent-fg-color)">Загрузка данных...</span>';

                const rect = link.getBoundingClientRect();
                previewBox.style.left = Math.min(rect.left, window.innerWidth - 320) + "px";
                previewBox.style.top = (rect.bottom + window.scrollY + 10) + "px";
                previewBox.style.opacity = "1";

                if (cache[url]) {
                    previewBox.innerHTML = cache[url];
                } else {
                    fetch(url)
                        .then(res => res.text())
                        .then(html => {
                            const parser = new DOMParser();
                            const doc = parser.parseFromString(html, "text/html");
                            const firstParagraph = doc.querySelector(".md-content__inner p");
                            if (firstParagraph) {
                                let text = firstParagraph.innerText;
                                if (text.length > 150) text = text.substring(0, 150) + "...";
                                cache[url] = `<strong style="font-family: var(--font-primary); font-size: 11px; display: block; margin-bottom: 8px; color: var(--md-accent-fg-color)">[SYS.PREVIEW]</strong>${text}`;
                                previewBox.innerHTML = cache[url];
                            } else {
                                cache[url] = "Нет данных для предпросмотра.";
                                previewBox.innerHTML = cache[url];
                            }
                        }).catch(() => {
                            previewBox.innerHTML = "Ошибка связи с сервером.";
                        });
                }
            }, 500);
        });

        link.addEventListener("mouseleave", () => {
            clearTimeout(hoverTimeout);
            previewBox.style.opacity = "0";
            setTimeout(() => { previewBox.style.display = "none"; }, 200);
        });
    });
});
