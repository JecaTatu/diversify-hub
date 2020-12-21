import { AuthService } from '../api/auth.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;
  fieldTextType: boolean;

  enterprise = '0';

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.initSignUpForm();
  }

  initSignUpForm() {
    this.signUpForm = this.fb.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password1: ['', Validators.required],
      password2: ['', Validators.required],
      checker: ['', Validators.required]
    });
  }

  onSignUp() {
    this.authService
      .signUp(
        this.signUpForm.value.checker,
        this.signUpForm.value.name,
        this.signUpForm.value.email,
        this.signUpForm.value.password2
      )
      .subscribe((res) => {
        console.log(res);
      });
  }

  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
    this.changeIcon();
  }

  changeIcon() {
    if (this.fieldTextType) {
      return 'visibility';
    } else {
      return 'visibility_off';
    }
  }
}
