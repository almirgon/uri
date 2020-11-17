import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.css'],
})
export class NoteComponent implements OnInit {
  public id: number;
  currentRate = 5;
  public evaluations: Array<any> = [];

  constructor(private route: ActivatedRoute) {
    this.route.params.subscribe((params) => {
      this.id = params['id'];
    });
    this.evaluations = [
      {
        subject: 'Programação 2',
        note: '4',
        period: '2019.2',
      },
      { subject: 'Leda', note: '5', period: '2019.1' },
      { subject: 'Analise de sistemas', note: '3', period: '2018.2' },
      { subject: 'Projeto de Software', note: '2', period: '2018.1' },
      { subject: 'Redes de computadores', note: '1', period: '2017.2' },
    ];
  }

  ngOnInit(): void {}
}
