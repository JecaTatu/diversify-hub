import { AuthService } from '../api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  fieldTextType: boolean;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initLoginForm();
  }

  initLoginForm(){
    this.loginForm = this.fb.group({
      email: ["", Validators.required],
      password: ["", Validators.required]
    });
  }

  onLogin(){
    console.log('oi')
    this.authService.signIn(this.loginForm.value.email, this.loginForm.value.password).subscribe(
      res => {
        console.log(res)
      }
    );
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    this.changeIcon();
  }

  changeIcon() {
    if(this.fieldTextType) {
      return "visibility"
    }
    else{
      return "visibility_off"
    }
  }

}
