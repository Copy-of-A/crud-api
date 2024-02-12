import { CreateUserDto } from "../types";

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
