import "dotenv/config";

export const PORT = process.env.PORT || 3000;

export const INVALID_MESSAGE = "Invalid or missing fields.";

export enum Methods {
  GET = "GET",
  POST = "POST",
  PUT = "PUT",
  DELETE = "DELETE",
}

export const CONTENT_TYPE_JSON = { "Content-Type": "application/json" };
