import express from "express";
import { userController } from "../controllers/user";

const userRouter = express.Router();

const { allUserSearch, createUser, updateUser, deleteUser } = userController;

userRouter.get("/", allUserSearch);

userRouter.post("/", createUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export default userRouter;
