import { Request, Response } from "express";
import { getRepository } from "typeorm";
import { User } from "../../entity/User";

const allUserSearch = async (req: Request, res: Response) => {
  try {
    const users: User[] = await getRepository(User).find();
    res.status(200).send({ users });
  } catch (e) {
    res.status(400).json({ message: e.message });
    throw new Error(e);
  }
};

export default allUserSearch;
