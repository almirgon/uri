import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public formAdmin: FormGroup;
  public period;
  all_list: any = [];

  constructor() {
    this.formAdmin = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
    period: new FormControl('', [Validators.required, Validators.minLength(4)]);
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

  ngOnInit(): void {}

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
