import {
  get400Response,
  get404Response,
} from "../responseErrors/errors.controller";
import { RouteHandlerType } from "../types";
import { find, findAll } from "./users.model";
import { validate } from "uuid";

export const getUsers: RouteHandlerType = (req, res) => {
  const data = findAll();

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(data));
};

export const getUserById: RouteHandlerType = (req, res) => {
  const id = req.url?.split("/")[3];

  if (!id || !validate(id)) {
    return get400Response(res, "Invalid userId.");
  }

  const user = find(id);

  if (user === null) {
    return get404Response(res, `User with usedId=${id} not found.`);
  }

  res.writeHead(200, { "Content-Type": "application/json" });
  res.end(JSON.stringify(user));
};
