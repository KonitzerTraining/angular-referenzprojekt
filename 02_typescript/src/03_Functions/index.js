// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)
// default return => :void
function compute(x, x1 = 1, y) {
    return x * x;
}
console.log(compute(23));
/*
Funktionen mit möglichem Error werden manchmal nicht bis zum Ende ausgeführt
Mit | können mehrere Typen angegeben werden
 */
function multiply(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new TypeError('number expected');
    }
    return x * y;
}
multiply(234, 12);
// Funktionsdefinition mit Implementierung
// Definitionsteil: (x: number) => number
let fx = (y) => y * y;
let fxBig = (y) => {
    return y * y;
};
console.log(fx(4));
let fy = (text) => text.length;
console.log(fy('lkasCHLAEIWHRU'));
//# sourceMappingURL=index.js.map