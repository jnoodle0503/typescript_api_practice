"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userController = void 0;
const allUserSearch_1 = __importDefault(require("./allUserSearch"));
const createUser_1 = __importDefault(require("./createUser"));
const updateUser_1 = __importDefault(require("./updateUser"));
const deleteUser_1 = __importDefault(require("./deleteUser"));
exports.userController = {
    allUserSearch: allUserSearch_1.default,
    createUser: createUser_1.default,
    updateUser: updateUser_1.default,
    deleteUser: deleteUser_1.default,
};
//# sourceMappingURL=index.js.map