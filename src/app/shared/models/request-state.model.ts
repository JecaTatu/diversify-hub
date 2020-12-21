import { AppError } from './errors.model';

export const IN_PROGRESS = 'IN_PROGRESS';
export const NOT_ASKED = 'NOT_ASKED';
export const SUCCESSFUL = 'SUCCESSFUL';
export const FAILED = 'FAILED';

export class RequestState {
  type: string;

  isResolved(): boolean {
    return this.isSuccessful() || this.isFailed();
  }

  isFailed(): boolean {
    return this.type === FAILED;
  }

  isInProgress(): boolean {
    return this.type === IN_PROGRESS;
  }

  isSuccessful(): boolean {
    return this.type === SUCCESSFUL;
  }

  isNotAsked(): boolean {
    return this.type === NOT_ASKED;
  }
}

export class FailedRequest extends RequestState {
  type = FAILED;
  error: AppError;

  constructor(error: AppError) {
    super();
    this.error = error;
  }
}

export class SuccessfulRequest extends RequestState {
  type = SUCCESSFUL;
}

export class InProgressRequest extends RequestState {
  type = IN_PROGRESS;
}

export class NotAskedRequest extends RequestState {
  type = NOT_ASKED;
}

export type State =
  | FailedRequest
  | SuccessfulRequest
  | InProgressRequest
  | NotAskedRequest;
