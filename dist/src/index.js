"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// app.ts
const express_1 = __importDefault(require("express"));
// dotenv config
const dotenv_1 = __importDefault(require("dotenv"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
// Sample route
app.get('/', (req, res) => {
    res.send('Hello, welcome to my app!');
});
app.get('/api', (req, res) => {
    res.status(500).json({ message: 'Hello, welpranecome to my API!' });
});
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
