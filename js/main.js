"use strict";

// ========================
// MOSTRAR Y BUSCAR GATITOS
// ========================

// QUERY-SELECTOR

const kittenData1 = {
  name: "Anastacio",
  race: "Siamés",
  image: "https://dev.adalab.es/gato-siames.webp",
  desc: `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`,
};
const kittenData2 = {
  name: "Fiona",
  race: "Sphynx",
  image: "https://dev.adalab.es/sphynx-gato.webp",
  desc: `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.`,
};
const kittenData3 = {
  name: "Cielo",
  race: "Maine Coon",
  image: "https://dev.adalab.es/maine-coon-cat.webp",
  desc: `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.`,
};

const kittenDataList = [kittenData1, kittenData2, kittenData3];

const kittensUl = document.querySelector(".js-list");
const searchButton = document.querySelector(".js_button-search");
const descrSearchText = document.querySelector(".js_in_search_desc");

// DATOS

/*const kittenDesc1 = {
  image: "https://dev.adalab.es/gato-siames.webp",
  name: "Anastacio",
  desc: `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`,
  race: "Siamés",
};*/

// Plantilla con el li de cada gato donde la rellenamos con los datos del gato 1 que proviene de un objeto.
const kittenOne = `
<li class="card">
            <article>
              <img
                class="card_img"
                src=${kittenDataList[0].image}
                alt="siames-cat"
              />
              <h3 class="card_title">${kittenDataList[0].name}</h3>
              <h4 class="card_race">${kittenDataList[0].race}</h4>
              <p class="card_description">${kittenDataList[0].desc}
              </p>
            </article>
          </li>`;

const kittenTwo = `
<li class="card">
            <img
              class="card_img"
              src=${kittenDataList[1].image}
              alt="sphynx-cat"
            />
            <h3 class="card_title">${kittenDataList[1].name}</h3>
            <h4 class="card_race">${kittenDataList[1].race}</h4>
            <p class="card_description">${kittenDataList[1].desc}
            </p>
          </li>`;

const kittenThree = `
<li class="card">
            <img
              class="card_img"
              src=${kittenDataList[2].image}
              alt="maine-coon-cat"
            />
            <h3 class="card_title">${kittenDataList[2].name}</h3>
            <h4 class="card_race">${kittenDataList[2].race}</h4>
            <p class="card_description">${kittenDataList[2].desc}  
            </p>
          </li>`;

// FUNCIONES

// EVENTOS

// Evento que filtra y muestra los gatitos que contengan el texto introducido en el campo de búsqueda
searchButton.addEventListener("click", (ev) => {
  ev.preventDefault();
  const descrValue = descrSearchText.value;
  document.querySelector(".js-list").innerHTML = "";
  if (kittenDesc1.includes(descrValue)) {
    document.querySelector(".js-list").innerHTML = kittenOne;
  }
  if (kittenDesc2.includes(descrValue)) {
    document.querySelector(".js-list").innerHTML += kittenTwo;
  }
  if (kittenDesc3.includes(descrValue)) {
    document.querySelector(".js-list").innerHTML += kittenThree;
  }
});

// CODIGO AL CARGAR LA PAG.

// Mostrar los gatitos
// Pone los <li> dentro del <ul>

kittensUl.innerHTML = kittenOne;
kittensUl.innerHTML += kittenTwo;
kittensUl.innerHTML += kittenThree;

// ========================
// FORMULARIO NUEVO GATITO
// ========================

// QUERY-SELECTOR

const btnAdd = document.querySelector(".js-btn-add");
const sectionNewForm = document.querySelector(".js-new-form");
const btnCancel = document.querySelector(".js_btn_cancel");

// DATOS

// FUNCIONES

function showNewCatForm() {
  newForm.classList.remove("collapsed");
}

function hideNewCatForm() {
  newForm.classList.add("collapsed");
}

// EVENTOS

btnAdd.addEventListener(`click`, (ev) => {
  // sectionNewForm.classList.remove("collapsed");
  showNewCatForm();
});

btnCancel.addEventListener("click", (ev) => {
  sectionNewForm.classList.toggle("collapsed");
});

// CODIGO AL CARGAR LA PAG.
