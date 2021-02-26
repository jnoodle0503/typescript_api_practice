import { Request, Response } from "express";
import { getConnection, getRepository } from "typeorm";
import { User } from "../../entity/User";

const updateUser = (req: Request, res: Response) => {
  const { name, location } = req.body;
  const { id } = req.params;

  // Query Builder 방법
  //   getConnection()
  //     .createQueryBuilder()
  //     .update(User)
  //     .set({ name, location })
  //     .where("id = :id", { id: Number(id) })
  //     .execute()
  //     .then(async () => {
  //       const updatedUser = await getConnection()
  //         .createQueryBuilder()
  //         .select("user")
  //         .from(User, "user")
  //         .where("user.id = :id", { id: Number(id) })
  //         .getOne();

  //       res.status(201).send(updatedUser);
  //     });

  // Repository's API's 방법
  getRepository(User)
    .update(Number(id), { name, location })
    .then(async () => {
      const updatedUserList: User[] = await getRepository(User).find();

      res.status(200).send(updatedUserList);
    });
};

export default updateUser;
