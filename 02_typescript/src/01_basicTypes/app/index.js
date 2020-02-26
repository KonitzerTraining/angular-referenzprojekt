// Implizte Typzuweisung
let a = 234; // a soll nun number sein
a = '234';
// Explizite Typzuweisung mit :
let b1;
b1 = null;
b1 = undefined;
b1 = 34;
console.log(b1);
let b2 = 'egal';
let b3;
// Oder
let path = 'asdf';
path = ['asdf'];
// Collection
let list = ['234', 234];
// Tuple
let record;
record = [23, 'Hans', 'Berlin'];
// Enum
var Sendung;
(function (Sendung) {
    Sendung[Sendung["Verschollen"] = 0] = "Verschollen";
    Sendung[Sendung["Gelagert"] = 1] = "Gelagert";
    Sendung[Sendung["Unterwegs"] = 2] = "Unterwegs";
    Sendung[Sendung["Geliefert"] = 3] = "Geliefert";
})(Sendung || (Sendung = {}));
let myPost = Sendung.Verschollen;
if (myPost === Sendung.Verschollen) {
    console.log('weg');
}
let c1 = {
    id: 5,
    name: 'hans',
    phone: '02934890',
};
// Typ-Casting (Typescript)
// Hat keinen Einfluß auf JavaScript
let data = { id: 5, name: 'Peter' };
// (data as Date).toLocaleString();
console.log(data.name);
//# sourceMappingURL=index.js.map