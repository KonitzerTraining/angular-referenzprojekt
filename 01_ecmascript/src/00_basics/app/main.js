// ES6 Primer

// Konstanten
const baustein = 'Platzhalter';
const abc = `Mehr-
zeiliger
Text mit ${baustein}.`;

console.log(abc);

// Objekte
const title = 'Überschrift';
const o1 = {
    __id__: 3,
    title, // title: title;
    getId() {
        return this.__id__;
    },
    get id () {
        return this.__id__;
    }
};

console.log(o1.id);

// Hoisting ES3
// Alle Funktionsdefinitionen
// werden an den Anfang des Scopes verschoben,
// auch alle Deklarationen mit var
f1();
function f1() {
    console.log('asdf', a);
    var a = 1; // let ist besser
}

console.log(this === window);
// Objekterstellung ES3
// default-Parameter: ES6
function Person (name = null) {
    console.log(this);
    this.name = name;
}

Person.prototype.sayHello = function () {
    console.log(this.name);
};
console.log(Person.prototype);

let p1 = new Person('Hans');
console.log(p1);
p1.sayHello();

// Context
// Die Funktion erhält ihren Kontext(this)
// durch die Aufrufsituation
/*
document.addEventListener('click', function () {
    console.dir(this);
});
*/

const context = {
    color: 'blue'
};
document.addEventListener('click', function () {
    console.dir(this);
}.bind(this));

// Arrow
document.addEventListener('click', () => {
    console.dir(this);
});

