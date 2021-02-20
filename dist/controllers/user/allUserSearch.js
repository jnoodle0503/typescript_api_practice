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
const User_1 = require("../..//entity/User");
const allUserSearch = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const users = yield typeorm_1.getRepository(User_1.User).find();
        res.status(200).send({ users });
    }
    catch (e) {
        res.status(400).json({ message: e.message });
        throw new Error(e);
    }
});
exports.default = allUserSearch;
//# sourceMappingURL=allUserSearch.js.map