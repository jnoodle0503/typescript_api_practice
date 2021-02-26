import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

const insertUser = (req: Request, res: Response) => {
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
  getRepository(User)
    .create({ name, location })
    .save()
    .then(async () => {
      const createdUserList = await getRepository(User).find();

      res.status(200).send(createdUserList);
    });
};

export default insertUser;
