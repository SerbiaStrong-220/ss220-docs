document.addEventListener("DOMContentLoaded", function() {
    // Коды клавиш: ↑ ↑ ↓ ↓ ← → ← → B A
    const konamiCode = [38, 38, 40, 40, 37, 39, 37, 39, 66, 65];
    let konamiIndex = 0;

    document.addEventListener("keydown", function(e) {
        if (e.keyCode === konamiCode[konamiIndex]) {
            konamiIndex++;
            if (konamiIndex === konamiCode.length) {
                activateEasterEgg();
                konamiIndex = 0;
            }
        } else {
            konamiIndex = 0;
        }
    });

    function activateEasterEgg() {
        if (!window.confetti) {
            const script = document.createElement('script');
            script.src = "https://cdn.jsdelivr.net/npm/canvas-confetti@1.6.0/dist/confetti.browser.min.js";
            script.onload = () => {
                launchFireworks();
                showMotivationModal();
            };
            document.head.appendChild(script);
        } else {
            launchFireworks();
            showMotivationModal();
        }
    }

    function launchFireworks() {
        const duration = 3 * 1000;
        const animationEnd = Date.now() + duration;
        const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 9999 };

        function randomInRange(min, max) {
            return Math.random() * (max - min) + min;
        }

        const interval = setInterval(function() {
            const timeLeft = animationEnd - Date.now();

            if (timeLeft <= 0) {
                return clearInterval(interval);
            }

            const particleCount = 50 * (timeLeft / duration);
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } }));
            confetti(Object.assign({}, defaults, { particleCount, origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } }));
        }, 250);
    }

    function showMotivationModal() {
        if (document.getElementById('easter-egg-modal')) return;

        const modalOverlay = document.createElement('div');
        modalOverlay.id = 'easter-egg-modal';
        Object.assign(modalOverlay.style, {
            position: 'fixed', top: '0', left: '0', width: '100%', height: '100%',
            backgroundColor: 'rgba(0, 0, 0, 0.7)', backdropFilter: 'blur(8px)',
            display: 'flex', justifyContent: 'center', alignItems: 'center',
            zIndex: '10000', opacity: '0', transition: 'opacity 0.3s ease',
            padding: '20px'
        });

        const modalContent = document.createElement('div');
        Object.assign(modalContent.style, {
            background: 'var(--custom-panel-gradient, rgba(22, 17, 48, 0.95))',
            border: 'var(--custom-glass-border, 1px solid rgba(255,255,255,0.2))',
            borderRadius: 'var(--radius-card, 24px)',
            padding: '3rem',
            width: '100%',
            maxWidth: '660px',
            textAlign: 'center',
            boxShadow: 'var(--custom-shadow-glow, 0 0 30px rgba(176, 160, 224, 0.4))',
            transform: 'scale(0.8)', transition: 'transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)'
        });

        modalContent.innerHTML = `
            <div style="font-size: 45px; margin-bottom: 15px;">🎉</div>
            <h2 style="margin-top: 0; color: var(--custom-heading-color, #fff); font-family: var(--font-primary); font-size: 24px; line-height: 1.5; text-transform: uppercase;">
                СЕКРЕТ РАСКРЫТ!
            </h2>
            <p style="color: var(--custom-text-color, #e8e6f4); font-family: var(--font-body); font-size: 18px; line-height: 1.7; margin: 25px 0;">
                Konami Code?!<br><br>
                Да ладно заливать, подсмотрели небось на гитхабе. Но настоящая магия происходит не в поиске пасхалок, а в процессе разработки. Хватит изучать теорию — пора переходить к практике!<br><br>Присоединяйтесь к разработке проекта.
            </p>
            <div style="display: flex; gap: 20px; justify-content: center; margin-top: 35px; flex-wrap: wrap;">
                <button id="easter-egg-close" style="
                    padding: 16px 32px; cursor: pointer;
                    background: transparent; color: var(--custom-text-color, #fff);
                    border: 2px solid var(--md-primary-fg-color, #8b7ec8);
                    border-radius: var(--radius-btn, 12px);
                    font-family: var(--font-primary, sans-serif); font-size: 11px;
                    text-transform: uppercase; letter-spacing: 1px;
                    white-space: nowrap; /* Запрещаем перенос текста */
                    transition: all 0.2s;
                ">Закрыть</button>

                <a href="https://github.com/SerbiaStrong-220/space-station-14" target="_blank" id="easter-egg-github" style="
                    padding: 16px 32px; cursor: pointer; text-decoration: none;
                    background: var(--md-primary-fg-color, #8b7ec8); color: #fff;
                    border: 2px solid var(--md-primary-fg-color, #8b7ec8);
                    border-radius: var(--radius-btn, 12px);
                    font-family: var(--font-primary, sans-serif); font-size: 11px;
                    text-transform: uppercase; letter-spacing: 1px;
                    display: inline-flex; align-items: center; justify-content: center; gap: 12px;
                    white-space: nowrap; /* Запрещаем перенос текста */
                    transition: all 0.2s;
                ">
                    <svg height="26" width="26" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    SS14
                </a>

                <a href="https://github.com/SerbiaStrong-220/Monolith" target="_blank" id="easter-egg-github" style="
                    padding: 16px 32px; cursor: pointer; text-decoration: none;
                    background: var(--md-primary-fg-color, #8b7ec8); color: #fff;
                    border: 2px solid var(--md-primary-fg-color, #8b7ec8);
                    border-radius: var(--radius-btn, 12px);
                    font-family: var(--font-primary, sans-serif); font-size: 11px;
                    text-transform: uppercase; letter-spacing: 1px;
                    display: inline-flex; align-items: center; justify-content: center; gap: 12px;
                    white-space: nowrap; /* Запрещаем перенос текста */
                    transition: all 0.2s;
                ">
                    <svg height="26" width="26" viewBox="0 0 16 16" fill="currentColor"><path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.013 8.013 0 0016 8c0-4.42-3.58-8-8-8z"></path></svg>
                    Exodus
                </a>
            </div>
        `;

        modalOverlay.appendChild(modalContent);
        document.body.appendChild(modalOverlay);

        requestAnimationFrame(() => {
            modalOverlay.style.opacity = '1';
            modalContent.style.transform = 'scale(1)';
        });

        const btnClose = document.getElementById('easter-egg-close');
        const btnGithub = document.getElementById('easter-egg-github');

        btnClose.addEventListener('mouseover', () => {
            btnClose.style.background = 'rgba(255, 255, 255, 0.1)';
        });
        btnClose.addEventListener('mouseout', () => {
            btnClose.style.background = 'transparent';
        });

        btnGithub.addEventListener('mouseover', () => {
            btnGithub.style.transform = 'translateY(-3px)';
            btnGithub.style.boxShadow = '0 6px 20px rgba(139, 126, 200, 0.6)';
        });
        btnGithub.addEventListener('mouseout', () => {
            btnGithub.style.transform = 'translateY(0)';
            btnGithub.style.boxShadow = 'none';
        });

        const closeModal = () => {
            modalOverlay.style.opacity = '0';
            modalContent.style.transform = 'scale(0.8)';
            setTimeout(() => modalOverlay.remove(), 300);
        };

        btnClose.addEventListener('click', closeModal);

        modalOverlay.addEventListener('click', (e) => {
            if (e.target === modalOverlay) closeModal();
        });
    }
});
