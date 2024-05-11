const suma = require("./testovi");

test("Zbroji 2 i 2 da budu 4", () => {
  expect(suma.add(2, 2)).toBe(4);
});

test("Zbroji 2 i 2 da nije 5", () => {
  expect(suma.add(2, 2)).not.toBe(5);
});

test("Trebao bi biti null", () => {
  expect(suma.isNull()).toBeNull();
});

/* toBeFalsy - proći će test, jer očekuje falsy value */
test("Trebao bi biti falsy", () => {
  expect(suma.provjeri(0)).toBeFalsy();
});

test("Osoba bi trebao biti objekat", () => {
  expect(suma.kreiraj()).toEqual({ ime: "Pera", prezime: "Peric" });
});

test("Suma je manja od 10", () => {
  const a = 4;
  const b = 5;
  expect(a + b).toBeLessThan(10);
});

test("Maja mora biti u listi", () => {
  const listaImena = ["Marija", "Mara", "Maja"];
  expect(listaImena).toContain("Maja");
});

test("Korisnik mora biti Leanne Graham", () => {
  expect.assertions(1);
  return suma.fetchOsoba().then((data) => {
    expect(data.name).toEqual("Leanne Graham");
  });
});

//Async-await
test("Korisnik mora biti Leanne Graham", async () => {
  expect.assertions(1);
  const data = await suma.fetchOsoba();
  expect(data.name).toEqual("Leanne Graham");
});
