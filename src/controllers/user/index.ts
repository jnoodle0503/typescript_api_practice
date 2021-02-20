import { Request, Response } from "express";
import allUserSearch from "./allUserSearch";
import insertUser from "./insertUser";

export const userController = {
  allUserSearch,
  insertUser,
};
