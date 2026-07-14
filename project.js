const safetyImages = [
    "safety first/SF1.jpg",
    "safety first/SF2.jpg",
    "safety first/SF3.jpg",
    "safety first/SF4.jpg",
    "safety first/SF5.jpg",
    "safety first/SF6.jpg",
    "safety first/SF7.jpg",
    "safety first/SF8.jpg",
    "safety first/SF9.jpg",
    "safety first/SF10.jpg",
];

const equipmentImages = [
    "equipment mngt/EMS1.png",
    "equipment mngt/EMS2.png",
    "equipment mngt/EMS3.png",
    "equipment mngt/EMS4.png",
    "equipment mngt/EMS5.png",
    "equipment mngt/EMS6.png",
    "equipment mngt/EMS7.png",
    "equipment mngt/EMS8.png",
    "equipment mngt/EMS9.png",
    "equipment mngt/EMS10.png",
];

let currentImage = 0;
let currentImages = [];

const modal = document.getElementById("projectModal");
const details = document.getElementById("projectDetails");

function openProject(projectName) {
    if (projectName === "safety") {
        currentImages = safetyImages;
        currentImage = 0;

        details.innerHTML = `

<div class="modal-gallery">

    <button class="carousel-btn prev" onclick="prevImage(event)">

        <i class="fa-solid fa-chevron-left"></i>

    </button>

    <img
        id="carouselImage"
        src="safety first/SF1.jpg"
        alt="Safety First">

    <button class="carousel-btn next" onclick="nextImage(event)">

        <i class="fa-solid fa-chevron-right"></i>

    </button>

</div>

<div class="carousel-dots">

    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>

</div>


<div class="project-title-row">

    <div>

        <h2>
            "Safety First" Adventure:
            An Educational Game for Teaching Safety Rules
        </h2>

        <div class="modal-tags">

            <span>Educational Game</span>
            <span>Web-Based</span>
            <span>DRRM</span>
            <span>Road Safety</span>
            <span>Gamification</span>

        </div>

        <a
            href="https://meyhoon1.itch.io/safety-first-adventure"
            target="_blank"
            class="project-link">

            <i class="fa-solid fa-link"></i>
            Live Demo

        </a>

    </div>

    <div class="project-year">

        2025

    </div>

</div>

<hr>

<div class="project-section">

    <h3>
    <i class="fa-solid fa-book-open"></i>
    Introduction
</h3>

    <p>

        Safety First is a web-based educational game designed to improve disaster preparedness and road safety awareness among students through interactive gameplay. Players experience realistic scenarios such as earthquakes, floods, house fires, and road safety situations, allowing them to learn and apply proper safety procedures in an engaging and immersive environment. By combining gamification with educational content, the project makes learning safety rules more interactive, memorable, and accessible.

    </p>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-bullseye"></i>
    Objectives
</h3>

<ul class="objective-list">

<li>Improve students' awareness of Disaster Risk Reduction and Management (DRRM).</li>

<li>Teach proper emergency response procedures through interactive gameplay.</li>

<li>Promote road safety knowledge using engaging game scenarios.</li>

<li>Increase knowledge retention through gamification and experiential learning.</li>

<li>Provide an accessible web-based learning platform for disaster preparedness.</li>

</ul>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-star"></i>
    Features
</h3>

<ul class="feature-list">

<li>User Registration and Secure Login</li>

<li>Interactive Disaster Scenarios (Flood, House Fire, Earthquake, Road Safety)</li>

<li>Multiple Game Levels and Challenges</li>

<li>Educational Tutorials and Safety Information</li>

<li>Save Progress Functionality</li>

<li>Player Profile Management</li>

<li>Leaderboard System</li>

<li>Mini-Game (4 Pics One Word)</li>

<li>Responsive WebGL Deployment for Browser-Based Play</li>

</ul>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-code"></i>
    Tech Stack
</h3>

<div class="stack-group">

<h4>Programming Languages</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/csharp.svg">
<span>C#</span>
</div>

<div class="stack-item">
<img src="logo/html.svg">
<span>HTML5</span>
</div>

<div class="stack-item">
<img src="logo/css.svg">
<span>CSS3</span>
</div>

<div class="stack-item">
<img src="logo/javascript.svg">
<span>JavaScript</span>
</div>

</div>

</div>


<div class="stack-group">

<h4>Game Engine</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/unity.svg">
<span>Unity</span>
</div>

</div>

</div>


<div class="stack-group">

<h4>Database</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/firebase.svg">
<span>Firebase</span>
</div>

<div class="stack-item">
<img src="logo/playfab.svg">
<span>PlayFab</span>
</div>

</div>

</div>

<div class="stack-group">

<h4>Tools & Platforms</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/vscode.svg">
<span>Visual Studio Code</span>
</div>

<div class="stack-item">
<img src="logo/figma.svg">
<span>Figma</span>
</div>

<div class="stack-item">
<img src="logo/playfab.svg">
<span>PlayFab</span>
</div>

</div>

</div>

</div>

</div>

`;
    }

    if (projectName === "equipment") {
        currentImages = equipmentImages;
        currentImage = 0;

        details.innerHTML = `

<div class="modal-gallery">

    <button class="carousel-btn prev" onclick="prevImage(event)">
        <i class="fa-solid fa-chevron-left"></i>
    </button>

    <img
        id="carouselImage"
        src="equipment mngt/EMS1.png"
        alt="Equipment Management">

    <button class="carousel-btn next" onclick="nextImage(event)">
        <i class="fa-solid fa-chevron-right"></i>
    </button>

</div>

<div class="carousel-dots">

    <span class="dot active"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>
    <span class="dot"></span>

</div>

<div class="project-title-row">

    <div>

        <h2>Equipment Management System</h2>

        <div class="modal-tags">

            <span>Educational Game</span>
            <span>Inventory Management</span>
            <span>Equipment Tracking</span>
            <span>CRUD System</span>
            <span>Report Generation</span>

        </div>

    </div>

    <span class="project-year">
        2026
    </span>

</div>

<hr>

<div class="project-section">

    <h3>
    <i class="fa-solid fa-book-open"></i>
    Introduction
</h3>

    <p>

        The Equipment Management System is a web-based application developed to simplify the management of organizational equipment and assets. It enables administrators to efficiently record, update, monitor, and manage equipment information while maintaining accurate inventory records. The system also streamlines borrowing transactions and report generation, reducing manual work and improving overall inventory management.

    </p>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-bullseye"></i>
    Objectives
</h3>

<ul class="objective-list">

<li>Digitize the equipment inventory management process.</li>

<li>Track the availability and status of equipment.</li>

<li>Manage borrowing and returning transactions efficiently.</li>

<li>Generate inventory and transaction reports.</li>

<li>Improve data accuracy while reducing manual record-keeping.</li>

</ul>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-star"></i>
    Features
</h3>

<ul class="feature-list">

<li>Secure User Login and Authentication</li>

<li>Equipment Management (Add, Edit, Delete)</li>

<li>Category Management</li>

<li>Borrowing and Returning Records</li>

<li>Inventory Monitoring</li>

<li>Search and Filter Equipment</li>

<li>Dashboard with Equipment Statistics</li>

<li>Report Generation</li>

<li>User Account Management</li>

<li>Responsive Interface</li>

</ul>

</div>


<div class="project-section">

<h3>
    <i class="fa-solid fa-code"></i>
    Tech Stack
</h3>

<div class="stack-group">

<h4>Programming Languages</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/html.svg">
<span>HTML5</span>
</div>

<div class="stack-item">
<img src="logo/css.svg">
<span>CSS3</span>
</div>

<div class="stack-item">
<img src="logo/javascript.svg">
<span>JavaScript</span>
</div>

<div class="stack-item">
<img src="logo/php.svg">
<span>PHP</span>
</div>

</div>

</div>

<div class="stack-group">

<h4>Database</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/mysql.svg">
<span>MySQL</span>
</div>

</div>

</div>

<div class="stack-group">

<h4>Framework</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/bootstrap.svg">
<span>Bootstrap</span>
</div>

</div>

</div>

<div class="stack-group">

<h4>Development Tools</h4>

<div class="stack-list">

<div class="stack-item">
<img src="logo/vscode.svg">
<span>Visual Studio Code</span>
</div>

<div class="stack-item">
<img src="logo/xampp.svg">
<span>XAMPP</span>
</div>

<div class="stack-item">
<img src="logo/github.svg">
<span>GitHub</span>
</div>

</div>

</div>

</div>

`;
    }
    currentImage = 0;

    modal.style.display = "flex";

    updateCarousel();

    document.querySelector(".project-modal-content").scrollTop = 0;
}

function closeProject() {

    modal.style.display = "none";

    document.querySelector(".project-modal-content").scrollTop = 0;

}
function updateCarousel() {
    const image = document.getElementById("carouselImage");

    if (!image) return;

    image.src = currentImages[currentImage];

    const dots = document.querySelectorAll(".dot");

    dots.forEach((dot, index) => {
        if (index === currentImage) {
            dot.classList.add("active");
        } else {
            dot.classList.remove("active");
        }
    });
}

function nextImage(event) {
    event.stopPropagation();

    currentImage++;

    if (currentImage >= currentImages.length) {
        currentImage = 0;
    }

    updateCarousel();
}

function prevImage(event) {
    event.stopPropagation();

    currentImage--;

    if (currentImage < 0) {
        currentImage = currentImages.length - 1;
    }

    updateCarousel();
}
document.addEventListener("keydown", function (event) {

    if (event.key === "Escape") {

        closeProject();

    }

});
modal.addEventListener("click", function (event) {

    if (event.target === modal) {

        closeProject();

    }

});

const searchInput = document.getElementById("searchInput");

searchInput.addEventListener("keyup", function () {

    const value = this.value.toLowerCase();

    const cards = document.querySelectorAll(".project-card");

    cards.forEach(card => {

        const project = card.dataset.name.toLowerCase();

        if (project.includes(value)) {

            card.style.display = "";

        } else {

            card.style.display = "none";

        }

    });

});