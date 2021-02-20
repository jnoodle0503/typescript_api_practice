import express, { Request, Response } from "express";
import { userController } from "../controllers/user";

const userRouter = express.Router();

const { allUserSearch, insertUser } = userController;

userRouter.get("/", allUserSearch);

userRouter.get("/:id", (req: Request, res: Response) => {
  res.status(200).send();
});

userRouter.post("/", insertUser);

export default userRouter;
