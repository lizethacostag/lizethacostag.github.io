/* ---- particles.js config ---- */

// Variable global para controlar las partículas
window.particlesInstance = null;

// Función para inicializar partículas con color específico
function initParticles(color) {
  // Si ya existe una instancia, destruirla
  if (window.particlesInstance) {
    try {
      if (window.pJSDom && window.pJSDom[0]) {
        window.pJSDom[0].pJS.fn.vendors.destroypJS();
        window.pJSDom = [];
      }
    } catch (e) {
      console.log('Error al destruir partículas:', e);
    }
  }

  // Crear nueva instancia
  particlesJS("particles-js", {
    particles: {
      number: {
        value: 140,
        density: {
          enable: true,
          value_area: 800,
        },
      },
      color: {
        value: color
      },
      shape: {
        type: "circle",
        stroke: {
          width: 0,
          color: "#fff",
        },
        polygon: {
          nb_sides: 5,
        },
        image: {
          src: "https://cdn.freebiesupply.com/logos/large/2x/slack-logo-icon.png",
          width: 100,
          height: 100,
        },
      },
      opacity: {
        value: 1,
        random: false,
        anim: {
          enable: false,
          speed: 1,
          opacity_min: 0.1,
          sync: false,
        },
      },
      size: {
        value: 2,
        random: true,
        anim: {
          enable: false,
          speed: 5,
          size_min: 10,
          sync: false,
        },
      },
      line_linked: {
        enable: true,
        distance: 100,
        color: color,
        opacity: 0.4,
        width: 0.5,
      },
      move: {
        enable: true,
        speed: 2,
        direction: "none",
        random: false,
        straight: false,
        out_mode: "out",
        bounce: false,
        attract: {
          enable: false,
          rotateX: 600,
          rotateY: 1200,
        },
      },
    },
    interactivity: {
      detect_on: "window",
      events: {
        onhover: {
          enable: true,
          mode: "repulse",
        },
        onclick: {
          enable: true,
          mode: "push",
        },
      },
      modes: {
        repulse: {
          distance: 70,
          duration: 0.4,
        },
        push: {
          particles_nb: 4,
        },
      },
    },
    retina_detect: true,
  });
  
  window.particlesInstance = true;
}

// Función para cambiar color de partículas
function updateParticleTheme() {
  let color;
  if (localStorage.getItem("lightMode") === "light") {
    color = "#462B56"; 
  } else {
    color = "#CCCCCC"; 
  }
  
  console.log("Cambiando partículas a color:", color);
  initParticles(color);
}

// Inicializar con el color correcto según el tema actual
document.addEventListener('DOMContentLoaded', function() {
  updateParticleTheme();
});

// Si el DOM ya está cargado
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', updateParticleTheme);
} else {
  updateParticleTheme();
}

const allElements = document.querySelectorAll(".animated-text");

// It checks if there is at least one element
if (allElements.length > 0) {
  //It runs the script for each found element
  allElements.forEach((element) => {
    const txtElement = element,
      wordsList = txtElement.getAttribute("data-words"),
      words = wordsList.split(", "); // It makes an array of words from data attribute

    let wordsCount = 0;

    entry();

    // Initial function
    function entry() {
      if (wordsCount < words.length) {
        // It runs the code for each word
        let word = words[wordsCount],
          txtArr = word.split(""), // It makes an array of letters in the word
          count = 0;

        txtElement.textContent = ""; // It removes the previous text from the element

        // For each letter in the array
        txtArr.forEach((letter) => {
          // It replaces the empty space for the "non-break-space" HTML...
          // ... This is needed to separate the words properly
          let _letter = letter === " " ? "&nbsp;" : letter;

          // It wraps every letter with a "span" and puts all they back to the element
          txtElement.innerHTML += `<span>${_letter}</span>`;
        });

        let spans = txtElement.childNodes;

        // It sets the interval between each letter showing
        const letterInterval = setInterval(activeLetter, 70);

        function activeLetter() {
          spans[count].classList.add("active");
          count++;

          if (count === spans.length) {
            clearInterval(letterInterval);

            // It waits 4 seconds to start erasing the word
            setTimeout(() => {
              eraseText();
            }, 600);
          }
        }

        function eraseText() {
          // It sets the interval between each letter hiding
          let removeInterval = setInterval(removeLetter, 40);
          count--;

          function removeLetter() {
            spans[count].classList.remove("active");
            count--;

            if (count === -1) {
              clearInterval(removeInterval);
              wordsCount++;

              // After removing the last letter, call the initial function again
              entry();
            }
          }
        }
      } else {
        // If the code reaches the last word
        // It resets the words counter...
        wordsCount = 0;
        // ...and calls the initial function again.
        entry();
      }
    }
  });
}