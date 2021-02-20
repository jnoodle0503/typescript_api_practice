"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const user_1 = __importDefault(require("./routes/user"));
const typeorm_1 = require("typeorm");
const ormconfig_1 = __importDefault(require("./ormconfig"));
const app = express_1.default();
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: false }));
app.use(cors_1.default({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
}));
app.use("/user", user_1.default);
app.get("/", (req, res) => {
    res.send("Hello!");
});
typeorm_1.createConnection(ormconfig_1.default)
    .then(() => {
    console.log("DB CONNECTION!");
    app.listen(3000, () => {
        console.log("Server Starting... 3000");
    });
})
    .catch((error) => {
    console.log(error);
});
//# sourceMappingURL=index.js.map