function scrollCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += direction * 300;
}

const projects = [
    { name: "Meowsic", img: "Meowsic.png", description: "An Advertisement-free music app <br>where you can choose <br>how you want to experience your music.", url: "https://drive.google.com/file/d/11CJ_FfMzHvv3lmGSQvC8rTf-pu5cHQkm/view?usp=sharing" },
    { name: "The Garden Of Eden", img: "GardenOfEden.jpg", description: "A stressed college student seeks <br>to find an easier way than a late night <br>cram. Will he discover the truth <br>of Humanity's first home?", url: "https://github.com/..." },
    { name: "FindAFriend", img: "FindAFriend.png", description: "A local messaging app <br>made to send messages and conntect.", url: "https://drive.google.com/file/d/1yBq4vjOuHGR_HC_LAaGttMFp1r2ORhWr/view?usp=sharing" },
];

const competitions = [
    { name: "Collaboratech 2026", type: "Android Hackathon", placement: "Second Runner Up", description: "Short description here" },
    { name: "Tagisan ng Talino 2026", type: "Android Hackathon", placement: "Second Runner Up", description: "Short description here" },
    { name: "Collaboratech 2025", type: "UI/UX Design", placement: "Champion", description: "Short description here" },
    { name: "Hack-it! The New Era of Banking", type: "Hackathon", placement: "Participant", description: "Short description here" },
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

const Gallery = [
    {category: "Competitions", url: "ImagesCompe/CollaboratechTeam.jpg"},
    {category: "Competitions", url: "ImagesCompe/CollaboratechJudging.jpg"},
    {category: "Competitions", url: "ImagesCompe/TagisanNgTalinoTeam.jpg"},    
    {category: "Competitions", url: "ImagesCompe/FigmaWorkshop.jpg"},
    {category: "Competitions", url: "ImagesCompe/HackIteam.jpg"},
    {category: "Competitions", url: "ImagesCompe/HackItParticipants.jpg"},

];

function renderCarousel(carouselId, dataArray, cardTemplate) {
    const carousel = document.getElementById(carouselId);
    carousel.innerHTML = dataArray.map(cardTemplate).join('');
}

function techCategory(section) {
    const tagHTML = section.tags.map(tag => `<span class="tag">${tag}</span>`).join('');
    return `
        <p class="stackCategory">${section.category}</p>
        <div class="tagContainer">${tagHTML}</div>
    `;
}

function projectCard(project) {
    return `
        <div class="projectCard" style="display: flex; flex-direction: column; justify-content:center; align-items: center;">
            <img src="${project.img}" alt="${project.name}" style="height: 150px; width: 150px;">
            <h2>${project.name}</h2>
            <p>${project.description}</p>
            <a href="${project.url}" target="_blank" rel="noopener noreferrer">
                <button class="viewButton">View Project</button>
            </a>
        </div>
    `;
}

function competitionCard(competition) {
    return `
        <div class="projectCard">
            <h2>${competition.name}</h2>
            <h3>${competition.type}</h3>
            <h4>${competition.placement}</h4>
            <p>${competition.description}</p>
        </div>
    `;
}

function galleryCard(photo) {
    return `
        <img class="galleryImg" src="${photo.url}" alt="gallery photo">
    `;
}


function toggleTheme() {
    const body = document.body;
    const icon = document.getElementById('themeIcon');
    
    body.classList.toggle('night');
    
    if (body.classList.contains('night')) {
        icon.src = 'icons8-sun-50.png';
        localStorage.setItem('theme', 'night');
    } else {
        icon.src = 'icons8-moon-and-stars-50.png';
        localStorage.setItem('theme', 'day');
    }
}

document.addEventListener('DOMContentLoaded', () => {
    renderCarousel('projectCarousel', projects, projectCard);
    renderCarousel('competitionsCarousel', competitions, competitionCard);
    renderCarousel('galleryCarousel', Gallery, galleryCard);

    const techStackContainer = document.querySelector('#TechStack .container');
    techStackContainer.innerHTML = techStack.map(techCategory).join('');

    const devToolsContainer = document.querySelector('#DevelopmentTools .container');
    devToolsContainer.innerHTML = devTools.map(techCategory).join('');

    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'night') {
        document.body.classList.add('night');
        document.getElementById('themeIcon').src = 'icons8-sun-50.png';
    }
});