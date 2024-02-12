import { usersData } from "../in-memory-data";

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
