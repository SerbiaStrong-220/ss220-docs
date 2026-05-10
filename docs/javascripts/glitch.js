document.addEventListener("DOMContentLoaded", function() {
    const style = document.createElement('style');
    style.innerHTML = `
        @keyframes textGlitch {
            0% { text-shadow: 2px 0 red, -2px 0 blue; transform: translate(1px, 1px); }
            20% { text-shadow: -2px 0 red, 2px 0 blue; transform: translate(-1px, -1px); }
            40% { text-shadow: 2px 0 red, -2px 0 blue; transform: translate(2px, 0); }
            60% { text-shadow: -2px 0 red, 2px 0 blue; transform: translate(-2px, 0); }
            80% { text-shadow: 2px 0 red, -2px 0 blue; transform: translate(0, 1px); }
            100% { text-shadow: none; transform: translate(0, 0); }
        }
        .sys-glitch {
            animation: textGlitch 0.3s linear infinite;
            color: #fff !important;
        }
    `;
    document.head.appendChild(style);

    const headers = document.querySelectorAll(".md-content__inner h2, .md-content__inner h3");
    if (headers.length === 0) return;

    setInterval(() => {
        const randomHeader = headers[Math.floor(Math.random() * headers.length)];

        randomHeader.classList.add("sys-glitch");

        setTimeout(() => {
            randomHeader.classList.remove("sys-glitch");
        }, 300);

    }, Math.random() * 10000 + 10000);
});
