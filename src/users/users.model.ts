import { usersData } from "../in-memory-data";
import { CreateUserDto } from "../types";
import { v4 as uuidv4 } from "uuid";

export const getAll = () => {
  return usersData;
};

export const getById = (id: string) => {
  if (usersData.hasOwnProperty(id)) {
    return usersData[id];
  } else {
    return null;
  }
};

export const create = (userDto: CreateUserDto) => {
  const id = uuidv4();
  const newUser = {
    ...userDto,
    id,
  };
  usersData[id] = newUser;
  return newUser;
};

export const update = (id: string, userDto: CreateUserDto) => {
  if (usersData.hasOwnProperty(id)) {
    usersData[id] = {
      ...userDto,
      id,
    };
    return usersData[id];
  } else {
    return null;
  }
};

export const remove = (id: string) => {
  if (usersData.hasOwnProperty(id)) {
    delete usersData[id];
    return true;
  } else {
    return false;
  }
};
