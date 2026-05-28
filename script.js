function scrollCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += direction * 300;
}

const projects = [
    { name: "Meowsic", img: "meowsic.png", description: "A music app for cats", url: "https://github.com/..." },
    { name: "The Garden Of Eden", img: "eden.png", description: "A visual novel", url: "https://github.com/..." },
    { name: "FindAFriend", img: "findafriend.png", description: "A pet adoption app", url: "https://github.com/..." },
    { name: "Enroll360", img: "enroll360.png", description: "An enrollment system", url: "https://github.com/..." },
];

// FIX 1: competitions data was missing entirely!
const competitions = [
    { name: "Collaboratech 2026 - Android Hackathon", img: "meowsic.png", placement: "Second Runner Up", description: "Short description here" },
    { name: "Tagisan ng Talino 2026 - Android Hackathon", img: "eden.png", placement: "Second Runner Up", description: "Short description here" },
    { name: "Collaboratech 2025 - Figma Workshop", img: "findafriend.png", placement: "Champion", description: "Short description here" },
    { name: "hack-it! The New Era of Banking", img: "enroll360.png", placement: "Participant", description: "Short description here" },
];

const techStack = [
    { category: "Front End", tags: ["HTML/CSS", "Python Tkinter", "JavaScript"] },
    { category: "Back End", tags: ["Java", "Python", "C#", "SQL Server", "Node.JS"] },
    { category: "Database", tags: ["SQL Server", "SQLite (Android)", "PostgreSQL"] },
];

const devTools = [
    { category: "IDEs", tags: ["Visual Studio Code", "PyCharm", "Android Studio", "Ren'Py"] },
    { category: "Database Management", tags: ["SQL Server Management Studio", "PostgreSQL", "MongoDB"] },
    { category: "Sprite/Art Creation", tags: ["Clip Studio Paint"] },
];

function renderCarousel(carouselId, dataArray, cardTemplate) {
    const carousel = document.getElementById(carouselId);
    carousel.innerHTML = dataArray.map(cardTemplate).join('');
}

// FIX 2: techCategory was defined twice, removed the duplicate
function techCategory(section) {
    const tagHTML = section.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `
        <p class="stackCategory">${section.category}</p>
        <div class="tagContainer">${tagHTML}</div>
    `;
}

function projectCard(project) {
    return `
        <div class="projectCard">
            <img src="${project.img}" alt="${project.name}">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                <button class="viewButton">View Project</button>
            </a>
        </div>
    `;
}

// FIX 3: competitionCard was missing entirely!
function competitionCard(competition) {
    return `
        <div class="projectCard">
            <img src="${competition.img}" alt="${competition.name}">
            <h2>${competition.name}</h2>
            <h4>${competition.placement}</h4>
            <p>${competition.description}</p>
        </div>
    `;
}

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel('projectCarousel', projects, projectCard);
    renderCarousel('competitionsCarousel', competitions, competitionCard);

    const techStackContainer = document.querySelector('#TechStack .container');
    techStackContainer.innerHTML = techStack.map(techCategory).join('');

    // FIX 4: devToolsContainer was declared twice with const, removed the duplicate
    const devToolsContainer = document.querySelector('#DevelopmentTools .container');
    devToolsContainer.innerHTML = devTools.map(techCategory).join('');
});