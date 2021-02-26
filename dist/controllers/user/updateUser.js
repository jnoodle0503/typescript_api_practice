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
const updateUser = (req, res) => {
    const { name, location } = req.body;
    const { id } = req.params;
    // Query Builder 방법
    //   getConnection()
    //     .createQueryBuilder()
    //     .update(User)
    //     .set({ name, location })
    //     .where("id = :id", { id: Number(id) })
    //     .execute()
    //     .then(async () => {
    //       const updatedUser = await getConnection()
    //         .createQueryBuilder()
    //         .select("user")
    //         .from(User, "user")
    //         .where("user.id = :id", { id: Number(id) })
    //         .getOne();
    //       res.status(201).send(updatedUser);
    //     });
    // Repository's API's 방법
    typeorm_1.getRepository(User_1.User)
        .update(Number(id), { name, location })
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        const updatedUserList = yield typeorm_1.getRepository(User_1.User).find();
        res.status(200).send(updatedUserList);
    }));
};
exports.default = updateUser;
//# sourceMappingURL=updateUser.js.map