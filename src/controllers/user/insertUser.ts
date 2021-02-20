import express, { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

const insertUser = (req: Request, res: Response) => {
  const user: User = new User();
  console.log(req.body);
  user.name = req.body.name;
  user.location = req.body.location;

  try {
    user.save();
    res.status(201).send("new User!");
  } catch (e) {
    throw new Error(e);
  }
};

export default insertUser;
