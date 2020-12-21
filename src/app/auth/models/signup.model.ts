export class SignInModel {
    name: string;
    email: string;
    nomeCompleto: string;
    password: string;
    constructor(email: string = null, password: string = null) {
        this.email = email
        this.password = password;
    }
  }