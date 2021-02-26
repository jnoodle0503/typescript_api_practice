import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../../entity/User";

const deleteUser = (req: Request, res: Response) => {
  const { id } = req.params;

  getRepository(User)
    .delete({ id: Number(id) })
    .then(async () => {
      const deletedUserList: User[] = await getRepository(User).find();

      res.status(200).send(deletedUserList);
    });
};

export default deleteUser;
