"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
exports.__esModule = true;
var Response_1 = require("../../models/Response");
var inversify_1 = require("inversify");
var SqlDataRepository = /** @class */ (function () {
    function SqlDataRepository() {
    }
    SqlDataRepository.prototype.find = function (id) {
        var records = [];
        return new Response_1["default"](records);
    };
    SqlDataRepository.prototype.save = function (request) {
        var records = [];
        return new Response_1["default"](records);
    };
    SqlDataRepository.prototype.update = function (request) {
        var records = [];
        return new Response_1["default"](records);
    };
    SqlDataRepository = __decorate([
        inversify_1.injectable()
    ], SqlDataRepository);
    return SqlDataRepository;
}());
exports["default"] = SqlDataRepository;
