"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var vite_1 = require("vite");
var plugin_react_refresh_1 = __importDefault(require("@vitejs/plugin-react-refresh"));
var vite_react_jsx_1 = __importDefault(require("vite-react-jsx"));
// https://vitejs.dev/config/
exports.default = vite_1.defineConfig({
    plugins: [plugin_react_refresh_1.default(), vite_react_jsx_1.default()]
});
