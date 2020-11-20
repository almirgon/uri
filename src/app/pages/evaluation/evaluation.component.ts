import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { EvaluationService } from '../../services/evaluation.service';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  all_list: Array<any> = [];

  constructor(private router: Router, private service: EvaluationService) {}

  ngOnInit() {
    this.service.getAll().subscribe((itens) => {
      itens.forEach((item) => {
        console.log(item);
        this.all_list.push(item);
      });
    });
  }

  redirectTo(item) {
    this.router.navigate(['/note', item.id]);
  }
}
