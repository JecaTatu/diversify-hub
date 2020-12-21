import { HttpErrorResponse } from '@angular/common/http';

export interface AppError extends Error {
  status: number;
  error?: any;
}

export class ConnectionError extends HttpErrorResponse implements AppError {
  constructor(res: HttpErrorResponse) {
    super({
      error: res.error,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
  }
}

export class UnknownServerError extends HttpErrorResponse implements AppError {
  constructor(res: HttpErrorResponse) {
    super({
      error: res.error,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
  }
}

export class NotFoundError extends HttpErrorResponse implements AppError {
  constructor(res: HttpErrorResponse) {
    super({
      error: res.error,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
  }
}

export class UnauthorizedError extends HttpErrorResponse implements AppError {
  constructor(res: HttpErrorResponse) {
    super({
      error: res.error,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
  }
}

export class ForbiddenError extends HttpErrorResponse implements AppError {
  constructor(res: HttpErrorResponse) {
    super({
      error: res.error,
      headers: res.headers,
      status: res.status,
      statusText: res.statusText,
      url: res.url
    });
  }
}

export class InvalidResponseFormatError
  extends HttpErrorResponse
  implements AppError {
  constructor(public readonly jsonError: JsonParseError) {
    super({ error: jsonError.error, status: jsonError.status });
  }
}

export class JsonParseError extends Error implements AppError {
  readonly status: number = 600;

  constructor(public readonly obj: unknown, public readonly error: Error) {
    super(error.message);
  }
}
