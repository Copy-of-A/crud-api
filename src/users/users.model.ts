import { usersData } from "./in-memory-data";
import { CreateUserDto, UserIdType } from "./types";
import { v4 as uuidv4 } from "uuid";

export const getAll = () => {
  return Object.values(usersData);
};

export const getById = (id: UserIdType) => {
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

export const update = (id: UserIdType, userDto: CreateUserDto) => {
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

export const remove = (id: UserIdType) => {
  if (usersData.hasOwnProperty(id)) {
    delete usersData[id];
    return true;
  } else {
    return false;
  }
};
