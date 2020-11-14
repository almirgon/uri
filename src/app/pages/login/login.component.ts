import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  public formLogin: FormGroup;
  public loginSuccessful: boolean;
  public loading: boolean;

  constructor(private router: Router) {
    this.loginSuccessful = true;
    this.loading = false;

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit(): void {}

  redirectToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onSubmit(): void {
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;
    this.loading = true;
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formLogin.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formLogin.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
