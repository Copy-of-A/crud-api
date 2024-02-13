import { CreateUserDto, UserIdType } from "./types";
import { validate } from "uuid";

export const isValideUserDto = (userDto: unknown): userDto is CreateUserDto => {
  if (typeof userDto !== "object" || userDto === null) {
    return false;
  }

  if (
    !(
      "username" in userDto &&
      userDto.username &&
      typeof userDto.username === "string"
    ) ||
    !("age" in userDto && userDto.age && typeof userDto.age === "number") ||
    !("hobbies" in userDto && userDto.hobbies && Array.isArray(userDto.hobbies))
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
