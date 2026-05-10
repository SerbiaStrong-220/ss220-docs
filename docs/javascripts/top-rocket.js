document.addEventListener("DOMContentLoaded", function() {
    const topButton = document.querySelector(".md-top");

    if (topButton) {
        topButton.innerHTML = "🚀";
        topButton.style.fontSize = "24px";
        topButton.style.textDecoration = "none";
        topButton.style.transition = "transform 0.3s ease, opacity 0.3s ease";

        let lastScrollTop = 0;
        let isAnimating = false;

        window.addEventListener("scroll", function() {
            if (isAnimating) return;

            let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

            if (currentScroll > lastScrollTop && currentScroll > 300) {
                topButton.style.transform = "translateY(80px) scale(0.8)";
                topButton.style.opacity = "0";
                topButton.style.pointerEvents = "none";
            } else if (currentScroll < lastScrollTop && currentScroll > 300) {
                topButton.style.transform = "translateY(0) scale(1)";
                topButton.style.opacity = "1";
                topButton.style.pointerEvents = "auto";
            } else if (currentScroll <= 300) {
                topButton.style.transform = "translateY(80px) scale(0.8)";
                topButton.style.opacity = "0";
                topButton.style.pointerEvents = "none";
            }

            lastScrollTop = currentScroll <= 0 ? 0 : currentScroll;
        });

        topButton.addEventListener("click", function(e) {
            isAnimating = true;

            topButton.style.transition = "transform 0.8s cubic-bezier(0.5, 0, 0.2, 1), opacity 0.8s ease";
            topButton.style.transform = "translateY(-1000px) scale(1.2)";
            topButton.style.opacity = "0";

            setTimeout(() => {
                topButton.style.transition = "none";
                topButton.style.transform = "translateY(80px) scale(0.8)";

                setTimeout(() => {
                    topButton.style.transition = "transform 0.3s ease, opacity 0.3s ease";
                    isAnimating = false;
                }, 50);
            }, 1000);
        });
    }
});
