const modal = document.getElementById("projectModal");
const details = document.getElementById("projectDetails");

function openProject(projectName) {
if(projectName === "safety"){

details.innerHTML = `

<div class="modal-gallery">

    <img src="safety first/SF1.jpg" class="active">

</div>

<div class="modal-dots">

    <span class="active"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

</div>


<div class="modal-header">

    <div>

        <h2>"Safety First" Adventure: An Educational Game for Teaching Safety Rules</h2>

        <div class="modal-tags">

            <span>Educational Game</span>
            <span>Web-Based Game</span>
            <span>Disaster Risk Reduction</span>
            <span>Road Safety</span>
            <span>Gamification</span>

        </div>

        <a
            href="https://meyhoon1.itch.io/safety-first-adventure"
            target="_blank"
            class="project-link">

            <i class="fa-solid fa-link"></i>
            Project Link

        </a>

    </div>

    <span class="project-year">
        2025
    </span>

</div>

<hr>

<div class="project-section">

    <h3>Introduction</h3>

    <p>

        Safety First is a web-based educational game designed to improve disaster preparedness and road safety awareness among students through interactive gameplay. Players experience realistic scenarios such as earthquakes, floods, house fires, and road safety situations, allowing them to learn and apply proper safety procedures in an engaging and immersive environment. By combining gamification with educational content, the project makes learning safety rules more interactive, memorable, and accessible.

    </p>

</div>


<div class="project-section">

<h3>Objectives</h3>

<ul>

<li>Improve students' awareness of Disaster Risk Reduction and Management (DRRM).</li>

<li>Teach proper emergency response procedures through interactive gameplay.</li>

<li>Promote road safety knowledge using engaging game scenarios.</li>

<li>Increase knowledge retention through gamification and experiential learning.</li>

<li>Provide an accessible web-based learning platform for disaster preparedness.</li>

</ul>

</div>


<div class="project-section">

<h3>Features</h3>

<ul>

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

<h3>Tech Stack</h3>

<div class="stack-grid">

<div>

<h4>Programming Languages</h4>

<ul>

<li>C#</li>

<li>HTML5</li>

<li>CSS3</li>

<li>JavaScript</li>

</ul>

</div>


<div>

<h4>Game Engine</h4>

<ul>

<li>Unity</li>

</ul>

</div>


<div>

<h4>Database</h4>

<ul>

<li>Firebase</li>

</ul>

</div>


<div>

<h4>Tools & Platforms</h4>

<ul>

<li>Visual Studio Code</li>

<li>Figma</li>

<li>PlayFab</li>

<li>itch.io</li>

</ul>

</div>

</div>

</div>

`;

}

if(projectName === "equipment"){

details.innerHTML = `

<div class="modal-gallery">

    <img src="equipment mngt/EMS1.png" class="active">

</div>

<div class="modal-dots">

    <span class="active"></span>
    <span></span>
    <span></span>
    <span></span>
    <span></span>

</div>


<div class="modal-header">

    <div>

        <h2>Equipment Management System</h2>

        <div class="modal-tags">

            <span>Educational Game</span>
            <span>Inventory Management</span>
            <span>Equipment Tracking</span>
            <span>CRUD System</span>
            <span>Report Generation</span>

        </div>

        <a
            href="#"
            class="project-link">

            <i class="fa-solid fa-link"></i>
            Project Link

        </a>

    </div>

    <span class="project-year">
        2025
    </span>

</div>

<hr>

<div class="project-section">

    <h3>Introduction</h3>

    <p>

        The Equipment Management System is a web-based application developed to simplify the management of organizational equipment and assets. It enables administrators to efficiently record, update, monitor, and manage equipment information while maintaining accurate inventory records. The system also streamlines borrowing transactions and report generation, reducing manual work and improving overall inventory management.

    </p>

</div>


<div class="project-section">

<h3>Objectives</h3>

<ul>

<li>Digitize the equipment inventory management process.</li>

<li>Track the availability and status of equipment.</li>

<li>Manage borrowing and returning transactions efficiently.</li>

<li>Generate inventory and transaction reports.</li>

<li>Improve data accuracy while reducing manual record-keeping.</li>

</ul>

</div>


<div class="project-section">

<h3>Features</h3>

<ul>

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

<h3>Tech Stack</h3>

<div class="stack-grid">

<div>

<h4>Programming Languages</h4>

<ul>

<li>HTML5</li>

<li>CSS3</li>

<li>JavaScript</li>

<li>PHP</li>

</ul>

</div>


<div>

<h4>Database</h4>

<ul>

<li>MySQL</li>

</ul>

</div>


<div>

<h4>Frameworks</h4>

<ul>

<li>Bootstrap</li>

</ul>

</div>


<div>

<h4>Development Tools</h4>

<ul>

<li>Visual Studio Code</li>

<li>XAMPP</li>

<li>GitHub</li>

</ul>

</div>

</div>

</div>

`;

}
    modal.style.display = "flex";

}

function closeProject(){

    modal.style.display = "none";

}