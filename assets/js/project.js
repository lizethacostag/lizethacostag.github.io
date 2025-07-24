AOS.init();

/* Project Cards */
const projectcards = document.querySelector(".projectcards");

// Array of object for projects
const projects = [
  {
    title: "Auctions",
    cardImage: "assets/images/project-page/auctions.png",
    description: "",
    tagimg: "https://cdn.iconscout.com/icon/free/png-512/react-1-282599.png",
    Previewlink: "#",
    Githublink: "https://github.com/lizethacostag/auctions",
  },
  {
    title: "Minesweeper",
    cardImage: "assets/images/project-page/minesweeper.png",
    description: "",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "#",
    Githublink: "https://github.com/lizethacostag/minesweeper",
  },
  {
    title: "Crossword",
    cardImage: "assets/images/project-page/crossword.png",
    description: "",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "#",
    Githublink: "https://github.com/lizethacostag/crossword",
  },
  {
    title: "MyMusic",
    cardImage: "assets/images/project-page/mymusic.png",
    description: "Exercise tracker built using basic redux.",
    tagimg: "https://miro.medium.com/max/2800/0*U2DmhXYumRyXH6X1.png",
    Previewlink: "#",
    Githublink: "https://github.com/lizethacostag/music",
  },
  {
    title: "Portfolio",
    cardImage: "assets/images/project-page/portfolio.png",
    description: "Poker game built using typescript.",
    tagimg: "https://miro.medium.com/max/816/1*mn6bOs7s6Qbao15PMNRyOA.png",
    Previewlink: "#",
    Githublink: "https://github.com/lizethacostag/lizethacostag.github.io",
  },
];

// function for rendering project cards data
const showCards = () => {
  let output = "";
  projects.forEach(({ title, cardImage, Previewlink, Githublink }) => {
    output += `       
        <div class="column skill-card card" style="margin: 15px;" data-aos="zoom-in-up" data-aos-easing="linear" data-aos-delay="300" data-aos-duration="600">
          <div class="wrapper" style="background: url(${cardImage}) center / cover no-repeat;">
            <div class="header">
            </div>
            <div class="data">
              <div class="content">
                <div class="title-div">
                  <h1 class="title"><a href="#">${title}</a></h1>
                </div>
                <ul class="menu-content"><br>
                  <li><a href="${Previewlink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-monitor"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg></a></li>
                  <li><a href="${Githublink}" class="social-icon"><svg xmlns="http://www.w3.org/2000/svg" width="30" height="25" viewBox="0 0 30 28" fill="none" stroke="#fff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" class="feather feather-github"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path></svg></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>`;
  });
  projectcards.innerHTML = output;
};

// Inicializar las tarjetas cuando el DOM esté cargado
document.addEventListener("DOMContentLoaded", showCards);

// Función de búsqueda corregida
function myFunction() {
  // Verificar que el input existe
  const input = document.getElementById("myInput");
  if (!input) {
    console.error("No se encontró el elemento con ID 'myInput'");
    return;
  }

  let filterValue = input.value.toUpperCase();
  const skillCards = document.getElementsByClassName("skill-card");
  const titles = document.getElementsByClassName("title");

  // Loop através de todas las tarjetas para mostrar/ocultar según la búsqueda
  for (let i = 0; i < skillCards.length; i++) {
    const titleText = titles[i] ? titles[i].textContent || titles[i].innerText : "";
    
    if (titleText.toUpperCase().indexOf(filterValue) > -1) {
      skillCards[i].style.display = "";
    } else {
      skillCards[i].style.display = "none";
    }
  }
}

// Función adicional para debugging
function debugProjects() {
  console.log("Elemento projectcards:", projectcards);
  console.log("Número de proyectos:", projects.length);
  console.log("Tarjetas generadas:", document.getElementsByClassName("skill-card").length);
}

