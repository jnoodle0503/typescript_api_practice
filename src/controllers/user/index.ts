import { Request, Response } from "express";
import allUserSearch from "./allUserSearch";
import createUser from "./createUser";
import updateUser from "./updateUser";
import deleteUser from "./deleteUser";

export const userController = {
  allUserSearch,
  createUser,
  updateUser,
  deleteUser,
};
