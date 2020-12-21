import { SignInModel } from './../models/signin.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Observable } from 'rxjs';
import { SignUpModel } from './../models/signup.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  constructor(
    private http: HttpClient,
    private toastr: ToastrService,
    private router: RouterModule
  ) {}

  signIn(singInModel: SignInModel): Observable<any> {
    const url = '/api/candidates/login';
    return this.http.post(url, singInModel);
  }

  signUp(signUpModel: SignUpModel): Observable<any> {
    let url = '/api/candidates/';
    url = '/api/empresas/';
    return this.http.post(url, signUpModel);
  }
}
