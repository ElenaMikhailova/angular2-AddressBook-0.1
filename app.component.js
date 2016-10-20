"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var AppComponent = (function () {
    function AppComponent() {
        this.todos = [];
        var lenthArray = localStorage.getItem("SizeArray");
        for (var i = 0; i < lenthArray; i++) {
            this.todos.push(localStorage.getItem(String(i)));
        }
    }
    AppComponent.prototype.addTodo = function (P1, P2) {
        var sP = P1.value + " " + P2.value;
        //console.log('Добавление в адресную книгу: '+sP1+" "+sP2);
        this.todos.unshift(sP);
        P1.value = "";
        P2.value = "";
        try {
            localStorage.setItem(String(++(this.todos.length)), sP);
        }
        catch (e) {
            if (e == QUOTA_EXCEEDED_ERR) {
                alert('Превышен размер адресной книги');
            }
            else
                localStorage.setItem("SizeArray", String(this.todos.length));
        }
    };
    AppComponent.prototype.delTodo = function (todo) {
        alert("Последний в списке контакт " + todo.value + " будет удалён");
        todo = null;
        localStorage.removeItem(String(this.todos.length));
        localStorage.setItem("SizeArray", String(this.todos.length));
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'todo-app',
            templateUrl: './app/app.component.html',
            styleUrls: ['./app/app.component.css']
        }), 
        __metadata('design:paramtypes', [])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map