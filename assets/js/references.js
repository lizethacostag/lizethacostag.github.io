/* Reference Details Table */
// Changes made 07/02/2025:
// Actualizados los mensajes para Lizeth Acosta

const referenceTable = document.querySelector(".pain");

const references = [
  {
    sl1: 1,
    name1: "Smaranjit Ghose",
    designation1: "Product Manager, Microsoft",
    image1: "https://avatars.githubusercontent.com/u/46641503?v=4",
    message1:
      "Lizeth es una persona muy concienzuda a quien mentoreé durante JWOC'2021. Sus habilidades de resolución de problemas y su gran interés por aprender nuevas tecnologías son notables. Su ética de trabajo y capacidad de liderazgo de equipos la hacen destacar.",
    sl2: 2,
    name2: "Anush Bhatia",
    designation2: "Senior Analyst, Capgemini",
    image2: "https://avatars.githubusercontent.com/u/40017559?v=4",
    message2:
      "Lizeth tiene la mejor capacidad de asimilación que he visto en una nueva desarrolladora. La conocí en GSSOC'2021 cuando la mentoreé, y su crecimiento durante la competición fue excepcional. Hizo contribuciones increíbles y tiene buena experiencia en Open Source.",
  },
  {
    sl1: 3,
    name1: "Aditya Jyoti Paul",
    designation1: "Technical Analyst, Amazon",
    image1:
      "https://media-exp1.licdn.com/dms/image/C5603AQGEV-kzawPxjw/profile-displayphoto-shrink_800_800/0/1588602102622?e=1651708800&v=beta&t=8nxhFoR-WB4OKVltyYaVjmRpig_kQcvFsoa-eLjJPBQ",
    message1:
      "Lizeth y yo hemos trabajado en varios proyectos. Además de sus habilidades técnicas, posee excelentes soft skills. Tiene experiencia en depuración de código y unas cualidades de liderazgo realmente destacables.",
    sl2: 4,
    name2: "Arnab Dutta Purkayastha",
    designation2: "Data Scientist, Flipkart",
    image2: "https://avatars.githubusercontent.com/u/59832779?v=4",
    message2:
      "Lizeth y yo colaboramos en un hackathon y lo que más me sorprendió fue su dominio de los fundamentos. Brindó ayuda sincera al equipo durante toda la competición. Es una solucionadora de problemas impresionante, capaz de gestionar retos complejos con estrategia y confianza.",
  },
];

AOS.init();

const fillData = () => {
  let output = "";

  references.forEach(
    ({
      sl1,
      image1,
      name1,
      designation1,
      message1,
      sl2,
      image2,
      name2,
      designation2,
      message2,
    }) => {
      output += `
        <tr data-aos="zoom-in-left">
          <td class="imgCol"><img src="${image1}" class="rImg"></td>
          <td class="referenceTitleName">
            <div>
              <span class="imgResponsive">
                <img src="${image1}" class="imgRes">
              </span>
            </div>
            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
            <a href="#0" class="paperTitle">${name1}</a>
            <div>${designation1}</div>
            <div class="rConferences">
              <div class="referenceY">${message1}</div>
            </div>
          </td>
        </tr>
        <tr data-aos="zoom-in-left">
          <td class="referenceTitleName">
            <div>
              <span class="imgResponsive">
                <img src="${image2}" class="imgRes">
              </span>
            </div>
            <img src="https://img.icons8.com/fluency/48/000000/quote-left.png"/>
            <a href="#0" class="paperTitle">${name2}</a>
            <div>${designation2}</div>
            <div class="rConferences">
              <div class="referenceY">${message2}</div>
            </div>
          </td>
          <td class="imgCol"><img src="${image2}" class="rImg1"></td>
        </tr>
      `;
    }
  );

  referenceTable.innerHTML = output;
};

document.addEventListener("DOMContentLoaded", fillData);
