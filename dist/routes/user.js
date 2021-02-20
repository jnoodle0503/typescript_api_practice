"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controllers/user");
const userRouter = express_1.default.Router();
const { allUserSearch, insertUser } = user_1.userController;
userRouter.get("/", allUserSearch);
userRouter.get("/:id", (req, res) => {
    res.status(200).send();
});
userRouter.post("/", insertUser);
exports.default = userRouter;
//# sourceMappingURL=user.js.map