export type HttpStatusCode =
  | 200
  | 201
  | 204
  | 400
  | 401
  | 403
  | 404
  | 409
  | 500;

export type TokenResponse = {
  accessToken: string;
  refreshToken: string;
};

export type ApiResponse<T = unknown> = {
  result: boolean;
  code: string;
  status: string;
  message: string;
  data: T;
  authError: boolean;
};
