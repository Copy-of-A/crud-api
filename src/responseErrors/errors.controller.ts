import { ResponseErrorType, RouteHandlerType } from "../types";

export const get404Response: ResponseErrorType = (
  res,
  message = "Route not found."
) => {
  res.writeHead(404, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message }));
};

export const get400Response: ResponseErrorType = (
  res,
  message = "Bad Request."
) => {
  res.writeHead(400, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message }));
};

export const get500Response: ResponseErrorType = (
  res,
  message = "Internal Server Error."
) => {
  res.writeHead(500, { "Content-Type": "application/json" });
  res.end(JSON.stringify({ message }));
};
