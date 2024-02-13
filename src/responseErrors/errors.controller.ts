import { CONTENT_TYPE_JSON } from "../constants";
import { ResponseErrorType } from "../types";

export const get404Response: ResponseErrorType = (
  res,
  message = "Route not found."
) => {
  res.writeHead(404, CONTENT_TYPE_JSON);
  res.end(JSON.stringify({ message }));
};

export const get400Response: ResponseErrorType = (
  res,
  message = "Bad Request."
) => {
  res.writeHead(400, CONTENT_TYPE_JSON);
  res.end(JSON.stringify({ message }));
};

export const get500Response: ResponseErrorType = (
  res,
  message = "Internal Server Error."
) => {
  res.writeHead(500, CONTENT_TYPE_JSON);
  res.end(JSON.stringify({ message }));
};
