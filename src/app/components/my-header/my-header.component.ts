import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
  public logged: boolean;
  public admin: boolean;
  constructor(private route: Router) {}

  ngOnInit(): void {
    this.logged = true;
    this.admin = false;
  }

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
    this.route.navigate(['/profile']);
  }

  goToEvaluation() {
    this.route.navigate(['/evaluation']);
  }

  goToAdmin() {
    this.route.navigate(['/admin']);
  }

  goToVoteAdmin() {
    this.route.navigate(['/admin-vote']);
  }

  logout() {
    this.logged = false;
    this.route.navigate(['/login']);
  }
}
