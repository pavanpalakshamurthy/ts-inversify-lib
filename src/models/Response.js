"use strict";
exports.__esModule = true;
var Response = /** @class */ (function () {
    function Response(records) {
        this._records = records;
    }
    Object.defineProperty(Response.prototype, "records", {
        /**
         * Getter record
         * @return {Record[]}
         */
        get: function () {
            return this._records;
        },
        /**
         * Setter record
         * @param {Record[]} value
         */
        set: function (value) {
            this._records = value;
        },
        enumerable: true,
        configurable: true
    });
    return Response;
}());
exports["default"] = Response;
