document.addEventListener("DOMContentLoaded", function() {
    const particlesDiv = document.createElement('div');
    particlesDiv.id = 'particles-js';
    document.body.prepend(particlesDiv);

    const style = document.createElement('style');
    style.innerHTML = '#particles-js canvas { image-rendering: pixelated; image-rendering: crisp-edges; }';
    document.head.appendChild(style);

    const checkParticles = setInterval(function() {
        if (typeof particlesJS !== 'undefined') {
            clearInterval(checkParticles);

            particlesJS("particles-js", {
                "particles": {
                    "number": {
                        "value": 60,
                        "density": { "enable": true, "value_area": 800 }
                    },
                    "color": { "value": "#ffffff" },
                    "shape": {
                        "type": "image",
                        "image": {
                            "src": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 9 9' shape-rendering='crispEdges'%3E%3Crect x='4' y='0' width='1' height='2' fill='%2319307B'/%3E%3Crect x='4' y='7' width='1' height='2' fill='%2319307B'/%3E%3Crect x='0' y='4' width='2' height='1' fill='%2319307B'/%3E%3Crect x='7' y='4' width='2' height='1' fill='%2319307B'/%3E%3Crect x='4' y='2' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='4' y='6' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='2' y='4' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='6' y='4' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='3' y='3' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='5' y='3' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='3' y='5' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='5' y='5' width='1' height='1' fill='%233A86FF'/%3E%3Crect x='4' y='3' width='1' height='1' fill='%23A0E8FF'/%3E%3Crect x='4' y='5' width='1' height='1' fill='%23A0E8FF'/%3E%3Crect x='3' y='4' width='1' height='1' fill='%23A0E8FF'/%3E%3Crect x='5' y='4' width='1' height='1' fill='%23A0E8FF'/%3E%3Crect x='4' y='4' width='1' height='1' fill='%23FFFFFF'/%3E%3C/svg%3E",
                            "width": 9,
                            "height": 9
                        }
                    },
                    "opacity": {
                        "value": 1,
                        "random": true,
                        "anim": { "enable": true, "speed": 1, "opacity_min": 0.3, "sync": false }
                    },
                    "size": {
                        "value": 12,
                        "random": true,
                        "anim": { "enable": true, "speed": 2, "size_min": 3, "sync": false }
                    },
                    "line_linked": { "enable": false },
                    "move": {
                        "enable": true,
                        "speed": 0.3,
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
                            "size": 15,
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
