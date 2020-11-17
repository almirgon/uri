import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin-vote',
  templateUrl: './admin-vote.component.html',
  styleUrls: ['./admin-vote.component.css'],
})
export class AdminVoteComponent implements OnInit {
  public period;
  public open: boolean;
  public close: boolean;

  constructor() {
    this.period = new FormControl('');
    this.open = true;
    this.close = false;
  }

  ngOnInit(): void {}

  openVote() {
    this.open = false;
    this.close = true;
  }

  closeVote() {
    this.open = true;
    this.close = false;
  }
}
