// Im Funktionskopf Typen angeben
// ? optionaler Parameter
// Default-Werte möglich (gibt es schon ES6)
function compute(x, x1, y) {
    if (x1 === void 0) { x1 = 234; }
    return x * x;
}
compute(23);
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
multiply(234, '12');
// Funktionsdefinition mit Implementierung
// Definitionsteil: (x: number) => number
var fx = function (y) { return y * y; };
console.log(fx(4));
var fy = function (text) { return text.length; };
fy(234);
//# sourceMappingURL=index.js.map