"use strict";
exports.__esModule = true;
var Request = /** @class */ (function () {
    function Request() {
    }
    Object.defineProperty(Request.prototype, "id", {
        /**
         * Getter id
         * @return {number}
         */
        get: function () {
            return this._id;
        },
        /**
         * Setter id
         * @param {number} value
         */
        set: function (value) {
            this._id = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Request.prototype, "date", {
        /**
         * Getter date
         * @return {Date}
         */
        get: function () {
            return this._date;
        },
        /**
         * Setter date
         * @param {Date} value
         */
        set: function (value) {
            this._date = value;
        },
        enumerable: true,
        configurable: true
    });
    return Request;
}());
exports["default"] = Request;
