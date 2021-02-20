"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const allUserSearch_1 = __importDefault(require("./allUserSearch"));
const insertUser_1 = __importDefault(require("./insertUser"));
exports.userController = {
    allUserSearch: allUserSearch_1.default,
    insertUser: insertUser_1.default,
};
//# sourceMappingURL=index.js.map