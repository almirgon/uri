import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  public logged: boolean;
  constructor(private route: Router) {}

  ngOnInit(): void {}

  goToLogin() {
    this.route.navigate(['/login']);
  }

  goToRegister() {
    this.route.navigate(['/register']);
  }

  goToTeam() {
    this.route.navigate(['/team']);
  }

  goToHome() {
    this.route.navigate(['/home']);
  }

  goToProfile() {
    //this.route.navigate(['/profile']);
  }

  goToEvaluation() {
    //this.route.navigate(['/avaliation']);
  }

  logout() {
    this.logged = false;
    this.route.navigate(['/login']);
  }
}
