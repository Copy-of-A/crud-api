import { CreateUserDto, UserIdType } from "./types";
import { validate } from "uuid";

export const isValideUserDto = (userDto: unknown): userDto is CreateUserDto => {
  if (typeof userDto !== "object" || userDto === null) {
    return false;
  }

  if (
    !("username" in userDto && userDto.username) ||
    !("age" in userDto && userDto.age) ||
    !("hobbies" in userDto && userDto.hobbies)
  ) {
    return false;
  }

  return true;
};

export const isValideId = (id?: string): id is UserIdType => {
  return !!id && validate(id);
};

export const getIdFromUrl = (url?: string) => {
  return url?.split("/")[3];
};

export const getUserIdNotFoundMessage = (id: UserIdType) => {
  return `User with usedId=${id} not found.`;
};

export const getInvalidUserIdMessage = () => {
  return `Invalid userId.`;
};
