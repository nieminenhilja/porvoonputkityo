document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");
    if (header) {
        header.innerHTML = `
            <h1>Porvoon Putkityö</h1>
            <nav>
                <ul>
                    <li><a href="index.html">Etusivu</a></li>
                    <li><a href="palvelut.html">Palvelut</a></li>
                    <li><a href="yhteystiedot.html">Yhteystiedot</a></li>
                    <li><a href="tarjouspyynto.html">Tarjouspyyntö</a></li>
                </ul>
            </nav>
        `;
    }

    const footer = document.querySelector("footer");
    if (footer) {
        footer.innerHTML = `
            <p>&copy; 2025 Porvoon Putkityö</p>
                <p class="credits">Sivuston toteutus: Kurpitsa Solutions</p>
        `;
    }
});
