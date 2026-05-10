document.addEventListener("DOMContentLoaded", function() {
    const particlesDiv = document.createElement('div');
    particlesDiv.id = 'particles-js';
    document.body.prepend(particlesDiv);

    const checkParticles = setInterval(function() {
        if (typeof particlesJS !== 'undefined') {
            clearInterval(checkParticles);

            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 80,
                        "density": { "enable": true, "value_area": 800 }
                    },
                    "color": { "value": "#ffffff" },
                    "shape": { "type": "circle" },
                    "opacity": {
                        "value": 0.8,
                        "random": true,
                        "anim": { "enable": true, "speed": 1, "opacity_min": 0.1, "sync": false }
                    },
                    "size": {
                        "value": 2.5,
                        "random": true,
                        "anim": { "enable": false }
                    },
                    "line_linked": { "enable": false },
                    "move": {
                        "enable": true,
                        "speed": 0.4,
                        "direction": "none",
                        "random": true,
                        "straight": false,
                        "out_mode": "out",
                        "bounce": false
                    }
                },
                "interactivity": {
                    "detect_on": "window",
                    "events": {
                        "onhover": { "enable": true, "mode": "bubble" },
                        "onclick": { "enable": false },
                        "resize": true
                    },
                    "modes": {
                        "bubble": {
                            "distance": 150,
                            "size": 4,
                            "duration": 2,
                            "opacity": 1,
                            "speed": 3
                        }
                    }
                },
                "retina_detect": true
            });
        }
    }, 100);
});
