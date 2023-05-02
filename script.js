let meno = "Justín";
let priezvisko = "Takáč";
let bydlisko = "Úľany nad Žitavou";

//vypísanie hodnoty do konzole
console.log(meno + " " + priezvisko + " býva v " + bydlisko);

//načítal som si hodnoty a vytvoril funkciu
function zmenaNadpisu() {
    document.getElementById("info").innerHTML =meno + " " + priezvisko + " býva v " + bydlisko;
}