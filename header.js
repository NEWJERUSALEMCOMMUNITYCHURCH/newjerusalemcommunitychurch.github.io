document.addEventListener("DOMContentLoaded", function() {
    const headerHTML = `
    <header class="wrapper">
        <div class="navigation">
            <div class="primary-nav">
                <a href="home.html" class="logo"></a>
                <ul class="desktop-nav gradient-text-nav" style="display: flex; gap: 1.2rem; list-style: none; margin: 0; padding: 0;">
                    <li><a href="home.html">HOME</a></li>
                    <li><a href="about.html">ABOUT</a></li>
                    <li><a href="portfolio.html">PORTFOLIO</a></li>
                    <li><a href="services.html">SERVICES</a></li>
                    <li><a href="contact.html">CONTACT</a></li>
                </ul>
                <button class="menu-toggle" id="menuToggle" onclick="toggleSidebar()" style="display: none; background: transparent; border: none; color: #ffd700; font-size: 1.5rem; cursor: pointer;">
                    <i class="fa-solid fa-bars"></i>
                </button>
            </div>
        </div>
    </header>

    <div class="sidebar-overlay" id="sidebarOverlay" onclick="toggleSidebar()"></div>
    <aside class="sidebar" id="navSidebar">
        <button class="close-sidebar" onclick="toggleSidebar()" style="align-self: flex-end; font-size: 1.8rem; color: #9ca3af; cursor: pointer; background: none; border: none;">&times;</button>
        <a href="home.html" class="logo" style="width: 150px; height: 60px; display: block; margin-bottom: 1rem;"></a>
        <div class="sidebar-links" style="display: flex; flex-direction: column; gap: 1.2rem; margin-top: 1rem;">
            <a href="home.html" style="color: #f8f9fa; text-decoration: none; font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-house" style="color: #ffd700; margin-right: 10px;"></i> HOME</a>
            <a href="about.html" style="color: #f8f9fa; text-decoration: none; font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-circle-info" style="color: #ffd700; margin-right: 10px;"></i> ABOUT</a>
            <a href="portfolio.html" style="color: #f8f9fa; text-decoration: none; font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-images" style="color: #ffd700; margin-right: 10px;"></i> PORTFOLIO</a>
            <a href="services.html" style="color: #f8f9fa; text-decoration: none; font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-hands-praying" style="color: #ffd700; margin-right: 10px;"></i> SERVICES</a>
            <a href="contact.html" style="color: #f8f9fa; text-decoration: none; font-weight: 700; font-size: 0.95rem;"><i class="fa-solid fa-envelope" style="color: #ffd700; margin-right: 10px;"></i> CONTACT</a>
        </div>
    </aside>
    `;

    document.body.insertAdjacentHTML('afterbegin', headerHTML);
});

function toggleSidebar() {
    const sidebar = document.getElementById("navSidebar");
    const overlay = document.getElementById("sidebarOverlay");
    if(sidebar && overlay) {
        sidebar.classList.toggle("active");
        overlay.classList.toggle("active");
    }
}