AOS.init();

// MOOCs Cards

const moocs = document.querySelector(".moocs");
const moocscards = [

  {
    title: "CS50's Web Programming with Python and JavaScript",
    cardImage: "assets/images/education-page/harvard-university.svg", class:"harvard-logo",
    moocLink: "https://cs50.harvard.edu/certificates/8f5e7793-d9c6-4e1e-b418-99599384009f",
  },
  {
    title: "JCS50's Introduction to Artificial Intelligence with Python",
    cardImage: "assets/images/education-page/harvard-university.svg", class:"harvard-logo",
    moocLink: "https://cs50.harvard.edu/certificates/d7af3e5d-b1bb-4c88-bc2c-9bb100776397",
  },
  {
    title: "Schneider Electric University Professional in Energy Management",
    cardImage: "assets/images/education-page/schneider-electric.svg", class:"schneider-logo",
    moocLink: "https://drive.google.com/file/d/1kX6rwCtMHw2iSB5Fourh_t6V3CtVTxFk/view?usp=drivesdk",
  },
  {
    title: "Responsive Web Design",
    cardImage: "assets/images/education-page/free.svg",
    moocLink: "https://drive.google.com/file/d/1vihZdcN_V1sWT5SUz4FD1cNBLYOHEmm0/view?usp=sharing",
  },
  {
    title: "Account Management Accounting",
    cardImage: "assets/images/education-page/SENA.svg",
    moocLink:
      "https://drive.google.com/file/d/1gkGQgX593VTu09rIh9OwIPJGFavvJlpl/view?usp=sharing",
  },
  {
    title: "Application Development with In-Memory Data Handling in JAVA",
    cardImage: "assets/images/education-page/SENA.svg",
    moocLink: "https://drive.google.com/file/d/1C6ImLNepT5rfGRbLrwCmzfEl5b0IdQ4h/view?usp=sharing",
  },
  {
    title: "Programmable Logic Controllers (PLC)",
    cardImage: "assets/images/education-page/SENA.svg",
    moocLink: "https://drive.google.com/file/d/1xRdQ9jAVozp3_kMEc__DE6a9jMexrIk7/view?usp=sharing",
  },
  {
    title: "Design and Construction of Distribution Panels",
    cardImage: "assets/images/education-page/SENA.svg",
    moocLink:
      "https://drive.google.com/file/d/11QYfsVlKwtSpzdXxNqOi6P8VmlLYvn75/view?usp=sharing",
  },
  
];

const experience = [
  {
    img: "assets/images/education-page/c1.png",
  },
  {
    img: "assets/images/education-page/c2.jpg",
  },
  {
    img: "assets/images/education-page/c3.png",
  },
  {
    img: "assets/images/education-page/c4.png",
  },
  {
    img: "assets/images/education-page/c5.jpg",
  },
];

let currentItem = 0;

const img = document.getElementById("image");

const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");

window.addEventListener("DOMContentLoaded", function () {
  showExperience();
});

function showExperience() {
  setInterval(function () {
    if (currentItem === experience.length) {
      currentItem = 0;
    }
    const item = experience[currentItem];
    img.src = item.img;
    currentItem++;
  }, 3000);
}

const showCards = () => {
let output = "";
moocscards.forEach(
 ({ title, cardImage, moocLink, class: customClass }) =>
 (output += `
 <div class="col-12 col-sm-6 col-md-4 col-lg-3 column" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600" >
 <div class="card mb-3 mx-auto">
 <div class="content">
 <div class="content-overlay"></div>
 <img src=${cardImage} class="card-img-top content-image ${customClass || ''}">
 <div class="content-details fadeIn-bottom">
 <a href="${moocLink}" target="_blank"><i class="fa fa-info-circle fa-2x" aria-hidden="true" style="color: white;"></i></a>
 </div>
 </div>
 <div class="card-body">
 <h6 class="mt-0 py-2 text-center font-weight-bold mooc-title" style="font-size:12px;">${title}</h6>
 </div>
 </div>
 </div>
 `)
 );
moocs.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

/* Badges*/

const bagdes = document.querySelector(".badges");
const badgesection = [
  {
    title: "Google Developer Essentials",
    image: "assets/images/education-page/badge1.png",
    description: "Earned May 20, 2020",
  },
  {
    title: "VM Migration",
    image: "assets/images/education-page/badge2.png",
    description: "Earned June 20, 2020",
  },
  {
    title: "G Suite Essentials",
    image: "assets/images/education-page/badge3.png",
    description: "Earned July 20, 2020",
  },
];

const showCards1 = () => {
  let output = "";
  badgesection.forEach(
    ({ title, image, description }) =>
      (output += `       
      <div class="col-lg-4 col-md-6 p-2" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="600"> 
        <img class="img-fluid d-block mb-3 mx-auto hvr-grow" src="${image}" alt="Card image cap" width="200">
          <div class="text-center font-weight-bolder" style="font-size: 1.3em;">${title}</div>
          <div class="text-center text-muted font-weight-bolder p-2">${description}</div>
      </div>`)
  );
  bagdes.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards1);

/* Timeline Section*/

$(function () {
  window.sr = ScrollReveal();

  if ($(window).width() < 768) {
    if ($(".timeline-content").hasClass("js--fadeInLeft")) {
      $(".timeline-content")
        .removeClass("js--fadeInLeft")
        .addClass("js--fadeInRight");
    }

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  } else {
    sr.reveal(".js--fadeInLeft", {
      origin: "left",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });

    sr.reveal(".js--fadeInRight", {
      origin: "right",
      distance: "300px",
      easing: "ease-in-out",
      duration: 800,
    });
  }

  sr.reveal(".js--fadeInLeft", {
    origin: "left",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });

  sr.reveal(".js--fadeInRight", {
    origin: "right",
    distance: "300px",
    easing: "ease-in-out",
    duration: 800,
  });
});

