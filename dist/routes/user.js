"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const userRouter = express_1.default.Router();
const { allUserSearch, createUser, updateUser, deleteUser } = user_1.userController;
userRouter.get("/", allUserSearch);
userRouter.post("/", createUser);
userRouter.put("/:id", updateUser);
userRouter.delete("/:id", deleteUser);
exports.default = userRouter;
//# sourceMappingURL=user.js.map