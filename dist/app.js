"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const app = (0, express_1.default)();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.post("/post", (req, res) => {
    res.status(201).json({ data: req.body });
});
app.get("/:id/:name", (req, res) => {
    res.send({ message: "welcome again", Id: req.params.id, name: req.params.name });
});
exports.default = app;
