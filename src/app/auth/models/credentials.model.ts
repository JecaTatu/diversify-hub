import { Decoder, object, string } from 'type-safe-json-decoder';
export class CredentialsModel {
  token: string;
}

export const credentialsDecoder: Decoder<CredentialsModel> = object(
  ['token', string()],
  (token) => ({ token })
);
