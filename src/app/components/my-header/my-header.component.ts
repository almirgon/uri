import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'my-header',
  templateUrl: './my-header.component.html',
  styleUrls: ['./my-header.component.css'],
})
export class MyHeaderComponent implements OnInit {
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
}
