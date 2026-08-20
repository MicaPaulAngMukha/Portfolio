function scrollCarousel(direction, carouselId) {
    const carousel = document.getElementById(carouselId);
    carousel.scrollLeft += direction * 300;
}

const projects = [
    { name: "Meowsic", img: "Meowsic.png", description: "An Advertisement-free music app <br>where you can choose <br>how you want to experience your music.", url: "https://drive.google.com/file/d/11CJ_FfMzHvv3lmGSQvC8rTf-pu5cHQkm/view?usp=sharing" },
    { name: "The Garden Of Eden", img: "GardenOfEden.jpg", description: "A stressed college student seeks <br>to find an easier way than a late night <br>cram. Will he discover the truth <br>of Humanity's first home?", url: "https://drive.google.com/file/d/1CJKa0owCeKcwgqdl6TzgvawEbMQiPzpg/view?usp=sharing" },
    { name: "FindAFriend", img: "FindAFriend.png", description: "A local messaging app <br>made to send messages and conntect.", url: "https://drive.google.com/file/d/1yBq4vjOuHGR_HC_LAaGttMFp1r2ORhWr/view?usp=sharing" },
    { name: "ReviewEx", img: "ReviewEx.jpg", description: "An online reviewing app that <br>focuses on making mock exams.", url: "https://review-ex.vercel.app/"}
];

const competitions = [
    { name: "Collaboratech 2026", type: "Android Hackathon", placement: "Second Runner Up", description: "Built an e-commerce app named <br>'ShopLift' in under five (5) hours. <br>Worked the backend and database." },
    { name: "Tagisan ng Talino 2026", type: "Android Hackathon", placement: "Second Runner Up", description: "Built an e-commerce app <br>in under five (5) hours. <br>Worked the backend and database." },
    { name: "Collaboratech 2025", type: "UI/UX Design", placement: "Champion", description: "Created a mobile coffee shop design in under <br>three (3) hours with a partner. " },
    { name: "Hack-it! The New Era of Banking", type: "Hackathon", placement: "Participant", description: "Participated in a two (2) day hackathon with a team <br>consisting of four (4) members. Created a KYC application which <br>used Machine Learning (ML) to assist insurance underwriters." },
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
    {category: "Competitions", url: "ImagesCompe/HackITeam.jpg"},
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

// ── Scroll-triggered fade-in animations using Intersection Observer ──

function initScrollAnimations() {
    const animatedElements = document.querySelectorAll(
        '.fade-in, .fade-in-left, .fade-in-right, .fade-in-scale, .fade-in-stagger'
    );

    const observerOptions = {
        root: null,
        rootMargin: '0px 0px -60px 0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                // Once visible, stop observing to prevent re-triggering
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(el => {
        observer.observe(el);
    });
}

// ── Navbar scroll effect ──

function initNavbarScroll() {
    const navbar = document.getElementById('mainNav');
    if (!navbar) return;

    let lastScrollY = 0;

    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;

        if (currentScrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }

        lastScrollY = currentScrollY;
    }, { passive: true });
}

// ── Smooth scroll for navigation links ──

function initSmoothScroll() {
    document.querySelectorAll('.navbar-links a').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const navHeight = document.getElementById('mainNav').offsetHeight;
                const elementPosition = targetElement.getBoundingClientRect().top + window.scrollY;
                window.scrollTo({
                    top: elementPosition - navHeight - 10,
                    behavior: 'smooth'
                });
            }
        });
    });
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

    // Initialize scroll animations, navbar effects, and smooth scrolling
    initScrollAnimations();
    initNavbarScroll();
    initSmoothScroll();
});