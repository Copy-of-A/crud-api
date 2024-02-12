import { usersData } from "../in-memory-data";
import { CreateUserDto } from "../types";
import { v4 as uuidv4 } from "uuid";

export const findAll = () => {
  return usersData;
};

export const find = (id: string) => {
  if (usersData.hasOwnProperty(id)) {
    return usersData[id];
  } else {
    return null;
  }
};

export const add = (userDto: CreateUserDto) => {
  const id = uuidv4();
  const newUser = {
    ...userDto,
    id,
  };
  usersData[id] = newUser;
  return newUser;
};
