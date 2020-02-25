var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
// Decorator (eine Funktion)
var CustomerComponent = /** @class */ (function () {
    function CustomerComponent() {
        this.title = 'Überschrift';
        this.customers = [
            {
                "id": 5,
                "name": "Hans",
            },
            {
                "id": 1,
                "name": "Hans",
            },
            {
                "id": 2,
                "name": "Peter",
            },
        ];
    }
    CustomerComponent = __decorate([
        Component({
            template: "<h1>{{title}}</h1>"
        })
    ], CustomerComponent);
    return CustomerComponent;
}());
console.log((new CustomerComponent()).render());
function Component(config) {
    return function (classRef) {
        classRef.prototype.render = function () {
            return config.template.replace('{{title}}', this.title);
        };
    };
}
//# sourceMappingURL=CustomerComponent.js.map