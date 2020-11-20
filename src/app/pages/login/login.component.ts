import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  users: Array<any> = [];

  public formLogin: FormGroup;
  public loginSuccessful: boolean;
  public loading: boolean;

  constructor(private router: Router, private service: LoginService) {
    this.loginSuccessful = true;
    this.loading = false;

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  ngOnInit() {
    this.service.getAll().subscribe((itens) => {
      itens.forEach((item) => {
        console.log(item);
        this.users.push(item);
      });
    });
  }

  redirectToForgotPassword(): void {
    this.router.navigate(['/forgot-password']);
  }

  onSubmit(): void {
    let permissao = false;
    
    this.loading = true;
    let email = this.formLogin.get('email').value;
    let password = this.formLogin.get('password').value;
    fetch(`http://localhost:3000/login?email=${email}&password=${password}`)
      .then( (response) => {
        response.json().then((data) => {
          console.log(data);
          if(data.length > 0) {
            permissao = true;
            this.loading = !permissao;
            this.router.navigate(['/home']);
          }
        })
      })
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
