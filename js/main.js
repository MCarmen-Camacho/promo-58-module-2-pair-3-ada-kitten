"use strict";

const kittenDesc1 = `Porte elegante, su patrón de color tan característico y sus ojos
                de un azul intenso, pero su historia se remonta a Asía al menos
                hace 500 años, donde tuvo su origen muy posiblemente.`;
const kittenOne = `
<li class="card">
            <article>
              <img
                class="card_img"
                src="https://dev.adalab.es/gato-siames.webp"
                alt="siames-cat"
              />
              <h3 class="card_title">Anastacio</h3>
              <h4 class="card_race">Siamés</h4>
              <p class="card_description">${kittenDesc1}
              </p>
            </article>
          </li>`;

const kittenDesc2 = `Produce fascinación y curiosidad. Exótico, raro, bello, extraño…
              hasta con pinta de alienígena han llegado a definir a esta raza
              gatuna que se caracteriza por la «ausencia» de pelo.`;

const kittenTwo = `
<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/sphynx-gato.webp"
              alt="sphynx-cat"
            />
            <h3 class="card_title">Fiona</h3>
            <h4 class="card_race">Sphynx</h4>
            <p class="card_description">${kittenDesc2}
            </p>
          </li>`;

const kittenDesc3 = `Tienen la cabeza cuadrada y los ojos simétricos, por lo que su
              bella mirada se ha convertido en una de sus señas de identidad.
              Sus ojos son grandes y las orejas resultan largas y en punta.`;
const kittenThree = `
<li class="card">
            <img
              class="card_img"
              src="https://dev.adalab.es/maine-coon-cat.webp"
              alt="maine-coon-cat"
            />
            <h3 class="card_title">Cielo</h3>
            <h4 class="card_race">Maine Coon</h4>
            <p class="card_description">${kittenDesc3}  
            </p>
          </li>`;

document.querySelector(".js-list").innerHTML = kittenOne;
document.querySelector(".js-list").innerHTML += kittenTwo;
document.querySelector(".js-list").innerHTML += kittenThree;

const btnAdd = document.querySelector(".js-btn-add");
const sectionNewForm = document.querySelector(".js-new-form");

btnAdd.addEventListener(`click`, (ev) => {
  sectionNewForm.classList.toggle("collapsed");
});

const btnCancel = document.querySelector(".js_btn_cancel");

btnCancel.addEventListener("click", (ev) => {
  sectionNewForm.classList.toggle("collapsed");
});

const searchButton = document.querySelector(".js_button-search");
const descrSearchText = document.querySelector(".js_in_search_desc");

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
