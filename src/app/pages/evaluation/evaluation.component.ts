import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-evaluation',
  templateUrl: './evaluation.component.html',
  styleUrls: ['./evaluation.component.css'],
})
export class EvaluationComponent implements OnInit {
  all_list: any = [];

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.all_list = [
      {
        id: 1,
        nome: 'Dalton Serrey',
        disciplina: 'Programação 1',
      },
      {
        id: 2,
        nome: 'Melina Mongiovi',
        disciplina: 'Projeto de Software',
      },
      {
        id: 3,
        nome: 'Joseana Fechine',
        disciplina: 'Organização de Computadores',
      },
      {
        id: 4,
        nome: 'Adalberto Cajueiro',
        disciplina: 'Estrutura de Dados',
      },
      {
        id: 5,
        nome: 'João Arthur',
        disciplina: 'Arquitetura de Software',
      },
      {
        id: 6,
        nome: 'Franklin Ramalho',
        disciplina: 'Análise de Sistemas',
      },
      {
        id: 7,
        nome: 'Kyller Gorgônio',
        disciplina: 'Teoria da Computação',
      },
      {
        id: 8,
        nome: 'Rohit Gheyi',
        disciplina: 'Engenharia de Software',
      },
      {
        id: 9,
        nome: 'Joao',
        disciplina: 'Redes de Computadores',
      },
      {
        id: 10,
        nome: 'Francisco Brasileiro',
        disciplina: 'Sistemas Operacionais',
      },
    ];
  }

  redirectTo(item) {
    this.router.navigate(['/note', item.id]);
  }
}
