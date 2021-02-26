"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const typeorm_1 = require("typeorm");
const User_1 = require("../../entity/User");
const deleteUser = (req, res) => {
    const { id } = req.params;
    typeorm_1.getRepository(User_1.User)
        .delete({ id: Number(id) })
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        const deletedUserList = yield typeorm_1.getRepository(User_1.User).find();
        res.status(200).send(deletedUserList);
    }));
};
exports.default = deleteUser;
//# sourceMappingURL=deleteUser.js.map