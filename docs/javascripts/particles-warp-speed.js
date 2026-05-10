document.addEventListener("DOMContentLoaded", function() {
    document.addEventListener("click", function(e) {
        const link = e.target.closest(".md-nav__link");

        if (link && window.pJSDom && window.pJSDom.length > 0) {
            const pJS = window.pJSDom[0].pJS;

            const originalSpeed = pJS.particles.move.speed;

            pJS.particles.move.speed = 30;
            pJS.particles.move.direction = "bottom";

            setTimeout(() => {
                pJS.particles.move.speed = originalSpeed;
                pJS.particles.move.direction = "none";
            }, 800);
        }
    });
});
