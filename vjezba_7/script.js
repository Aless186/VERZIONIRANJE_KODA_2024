"use strict";

const gumb = document.querySelector("#gumb");
const ispis = document.querySelector("#ispis");

gumb.addEventListener("click", () => {
  debugger;
  if (gumb.innerText === "update") {
    gumb.innerText = "Klikni me";
    ispis.innerText = "";
    return;
  }

  let tekst = "update";
  gumb.innerText = tekst;
  handleIspis();
  nutriBullet(4, 6);
  nutriBullet(2, 3);
  nutriBullet(5, 1);
});

function handleIspis() {
  debugger;
  let sadrzaj = "Gumb je stisnut";
  ispis.innerText = sadrzaj;
}

function komadiVoca(voce) {
  debugger;
  return voce * 4;
}

function nutriBullet(jabuke, narance) {
  debugger;
  const komadiJabuke = komadiVoca(jabuke);
  const komadiNarance = komadiVoca(narance);
  const sok = `Sok od ${komadiJabuke} komada jabuke i ${komadiNarance} komada narance.`;
  console.log(sok);
}
