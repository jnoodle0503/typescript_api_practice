"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const User_1 = require("../../entity/User");
const insertUser = (req, res) => {
    const user = new User_1.User();
    console.log(req.body);
    user.name = req.body.name;
    user.location = req.body.location;
    try {
        user.save();
        res.status(201).send("new User!");
    }
    catch (e) {
        throw new Error(e);
    }
};
exports.default = insertUser;
//# sourceMappingURL=insertUser.js.map