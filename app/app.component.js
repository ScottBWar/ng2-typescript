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
var info_service_1 = require('./info.service');
var AppComponent = (function () {
    function AppComponent(infoService) {
        this.infoService = infoService;
        this.INFO = infoService.getInfo();
        this.gameword = this.INFO[Math.floor((Math.random() * this.INFO.length))].state;
        this.blankspot = "";
        for (var i = 0; i < this.gameword.length; i++) {
            this.blankspot += "-";
        }
    }
    AppComponent.prototype.logSomething = function () {
        console.log(this.gameword);
        if (this.gameword.indexOf(this.charInput) > -1) {
            for (var i = 0; i < this.blankspot.length; i++) {
                if (this.gameword[i] == this.charInput) {
                    this.blankspot = this.blankspot.substr(0, i) + this.charInput + this.blankspot.substr(i + 1);
                }
            }
            this.message = "You got it";
        }
        else {
            this.message = "You didn't";
        }
    };
    AppComponent = __decorate([
        core_1.Component({
            selector: 'my-app',
            templateUrl: './app/viewcomponents/welcome.html',
            providers: [info_service_1.InfoService]
        }), 
        __metadata('design:paramtypes', [info_service_1.InfoService])
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
//# sourceMappingURL=app.component.js.map