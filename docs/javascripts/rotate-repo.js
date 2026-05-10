document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        {
            name: "Space Station 14",
            repo: "SerbiaStrong-220/space-station-14",
            url: "https://github.com/SerbiaStrong-220/space-station-14",
            stars: "...", forks: "..."
        },
        {
            name: "Exodus",
            repo: "SerbiaStrong-220/Monolith",
            url: "https://github.com/SerbiaStrong-220/Monolith",
            stars: "...", forks: "..."
        }
    ];

    const rotateInterval = 10000;

    const sourceBlock = document.querySelector('.md-source');
    if (!sourceBlock) return;

    const repoContainer = sourceBlock.querySelector('.md-source__repository');

    const originalFacts = repoContainer.querySelector('.md-source__facts');
    let factsTemplate = "";

    if (originalFacts) {
        factsTemplate = originalFacts.outerHTML;

        const initialFacts = originalFacts.querySelectorAll('.md-source__fact');
        if (initialFacts.length >= 2) {
            projects[0].stars = initialFacts[0].textContent.trim();
            projects[0].forks = initialFacts[1].textContent.trim();
        }
    }

    projects.forEach(proj => {
        fetch(`https://api.github.com/repos/${proj.repo}`)
            .then(response => response.json())
            .then(data => {
                if (data.stargazers_count !== undefined) {
                    proj.stars = data.stargazers_count;
                    proj.forks = data.forks_count;
                }
            })
            .catch(err => console.error(`Не удалось загрузить данные для ${proj.repo}`, err));
    });

    let currentIndex = 0;

    setInterval(() => {
        repoContainer.style.opacity = '0';

        setTimeout(() => {
            currentIndex = (currentIndex + 1) % projects.length;
            const currentProject = projects[currentIndex];

            sourceBlock.href = currentProject.url;
            sourceBlock.title = `Перейти к: ${currentProject.name}`;

            const tempDiv = document.createElement('div');
            tempDiv.innerHTML = factsTemplate;

            const facts = tempDiv.querySelectorAll('.md-source__fact');
            if (facts.length >= 2) {
                facts[0].textContent = currentProject.stars;
                facts[1].textContent = currentProject.forks;
            }

            repoContainer.innerHTML = `
                ${currentProject.name}
                ${tempDiv.innerHTML}
            `;

            repoContainer.style.opacity = '1';

        }, 500);

    }, rotateInterval);
});
