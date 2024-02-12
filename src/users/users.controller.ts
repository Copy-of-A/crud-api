import { INVALID_MESSAGE } from "../constants";
import {
  get400Response,
  get404Response,
} from "../responseErrors/errors.controller";
import { RouteHandlerType } from "../types";
import { isValideUserDto } from "./helpers";
import { add, find, findAll } from "./users.model";
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

export const addUser: RouteHandlerType = (req, res) => {
  let body: Array<string> = [];

  req.on("data", (chunk) => {
    body.push(chunk.toString());
  });

  req.on("end", () => {
    let userDto;
    try {
      userDto = JSON.parse(body.join(""));
    } catch {
      return get400Response(res, INVALID_MESSAGE);
    }

    if (!isValideUserDto(userDto)) {
      return get400Response(res, INVALID_MESSAGE);
    } else {
      const newUser = add(userDto);
      res.writeHead(201, { "Content-Type": "application/json" });
      res.end(JSON.stringify(newUser));
    }
  });
};
