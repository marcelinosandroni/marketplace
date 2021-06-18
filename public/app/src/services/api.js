"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createResource = void 0;
var getData = function () { return new Promise(function (r) { return setTimeout(function () { return r('terminei!'); }, 3000); }); };
var wrapPromise = function (promise) {
    var status = 'pending';
    var result;
    var suspender = promise
        .then(function (r) {
        console.log('deu certo');
        status = 'success';
        result = r;
    })
        .catch(function (e) {
        console.log('deu ruim');
        status = 'error';
        result = e;
    });
    return {
        read: function () {
            if (status === 'pending') {
                throw suspender;
            }
            else if (status === 'error') {
                throw result;
            }
            return result;
        }
    };
};
var createResource = function () { return ({ data: wrapPromise(getData()) }); };
exports.createResource = createResource;
