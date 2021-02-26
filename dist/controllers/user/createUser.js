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
const insertUser = (req, res) => {
    const { name, location } = req.body;
    // Repository's API's 첫번 째 방법
    // const user: User = new User();
    // console.log(req.body);
    // user.name = req.body.name;
    // user.location = req.body.location;
    // try {
    //   user.save();
    //   res.status(201).send("new User!");
    // } catch (e) {
    //   throw new Error(e);
    // }
    // Repository's API's 두번 째 방법
    typeorm_1.getRepository(User_1.User)
        .create({ name, location })
        .save()
        .then(() => __awaiter(void 0, void 0, void 0, function* () {
        const createdUserList = yield typeorm_1.getRepository(User_1.User).find();
        res.status(200).send(createdUserList);
    }));
};
exports.default = insertUser;
//# sourceMappingURL=createUser.js.map