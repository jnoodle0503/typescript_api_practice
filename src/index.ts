import express, { Request, Response, NextFunction } from "express";
import cors from "cors";
import userRouter from "./routes/user";
import { createConnection } from "typeorm";
import connectionOptions from "./ormconfig";

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use(
  cors({
    origin: true,
    methods: ["GET", "POST", "OPTIONS", "PUT", "DELETE"],
    credentials: true,
  })
);

app.use("/user", userRouter);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello!");
});

createConnection(connectionOptions)
  .then(() => {
    console.log("DB CONNECTION!");
    app.listen(3000, () => {
      console.log("Server Starting... 3000");
    });
  })
  .catch((error) => {
    console.log(error);
  });
