import { createServer } from "node:http";

import { API_USERS_ID_REGEX, API_USERS_ROUTE } from "./users/constants";
import { Methods, PORT } from "./constants";

import {
  get404Response,
  get500Response,
} from "./responseErrors/errors.controller";
import {
  addUser,
  deleteUser,
  getUserById,
  getUsers,
  updateUser,
} from "./users/users.controller";

const server = createServer(async (req, res) => {
  try {
    if (req.url === API_USERS_ROUTE && req.method == Methods.GET) {
      await getUsers(req, res);
    } else if (
      req.url?.match(API_USERS_ID_REGEX) &&
      req.method == Methods.GET
    ) {
      await getUserById(req, res);
    } else if (req.url === API_USERS_ROUTE && req.method == Methods.POST) {
      await addUser(req, res);
    } else if (
      req.url?.match(API_USERS_ID_REGEX) &&
      req.method == Methods.PUT
    ) {
      await updateUser(req, res);
    } else if (
      req.url?.match(API_USERS_ID_REGEX) &&
      req.method == Methods.DELETE
    ) {
      await deleteUser(req, res);
    } else {
      get404Response(res);
    }
  } catch (err) {
    get500Response(res);
  }
});

server.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
  console.log("To terminate it, use Ctrl+C combination");
});
