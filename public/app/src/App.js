"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
Object.defineProperty(exports, "__esModule", { value: true });
var jsx_runtime_1 = require("react/jsx-runtime");
var react_1 = require("react");
var api_1 = require("./services/api");
var resource = api_1.createResource();
function App() {
    return (jsx_runtime_1.jsxs("div", { children: [jsx_runtime_1.jsx("h1", { children: "Hi" }, void 0), jsx_runtime_1.jsx(react_1.Suspense, __assign({ fallback: jsx_runtime_1.jsx("h1", { children: "Cargando..." }, void 0) }, { children: jsx_runtime_1.jsx(Data, { resource: resource }, void 0) }), void 0)] }, void 0));
}
function Data(_a) {
    var resource = _a.resource;
    var data = resource.data.read();
    return jsx_runtime_1.jsx("h1", { children: data }, void 0);
}
function Loading() {
    return jsx_runtime_1.jsx("h1", { children: "Terminado!" }, void 0);
}
exports.default = App;
