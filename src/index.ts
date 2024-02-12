import http from "node:http";

import { PORT } from "./constants";
import {
  get404Response,
  get500Response,
} from "./responseErrors/errors.controller";
import { getUserById, getUsers } from "./users/users.controller";

const server = http.createServer((req, res) => {
  try {
    if (req.url === "/api/users" && req.method == "GET") {
      getUsers(req, res);
    } else if (
      req.url?.match(/\/api\/users\/([0-9a-zA-Z\-]+)/) &&
      req.method == "GET"
    ) {
      getUserById(req, res);
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
