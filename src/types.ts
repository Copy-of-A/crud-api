import { IncomingMessage, ServerResponse } from "node:http";

export type RouteHandlerType<Response = void> = (
  req: IncomingMessage,
  res: ServerResponse<IncomingMessage>
) => Response;

export type UserDataType = {
  id: string;
  username: string;
  age: number;
  hobbies: Array<string>;
};

export type ResponseErrorType = (
  res: ServerResponse<IncomingMessage>,
  message?: string
) => void;
