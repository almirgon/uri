import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feed: any = [];
  constructor(private toastr: ToastrService) {
    this.feed = [
      {
        id: 1,
        notice: 'Leite para a prova de ES: link',
        name: 'Gustavo Dias',
        date: '05/11/2020',
        likes: 2,
      },
      {
        id: 2,
        notice:
          'Alguém sabe dizer quem vai ser o professor de AS esse período?',
        name: 'Thalyta Barbosa',
        date: '15/11/2020',
        likes: 3,
      },
      {
        id: 3,
        notice: 'O professor de LOAC avisou que Sexta não temos aula!',
        name: 'Pierson Filho',
        date: '15/11/2020',
        likes: 2,
      },
      {
        id: 4,
        notice: 'Mais alguém pensando em trancar o curso? ;p',
        name: 'João Victor',
        date: '15/11/2020',
        likes: 1,
      },
      {
        id: 5,
        notice:
          'Pessoal que paga Calculo 2 na sala 203, a prova foi marcada para proxima segunda!',
        name: 'Larissa Martins',
        date: '15/11/2020',
        likes: 3,
      },
      {
        id: 6,
        notice: 'Alguém com vaga no grupo de ES?',
        name: 'Lucas Silva',
        date: '15/11/2020',
        likes: 9,
      },
      {
        id: 7,
        notice: 'Link de aulas de calculo com grings',
        name: 'Leticia Lima',
        date: '15/11/2020',
        likes: 4,
      },
      {
        id: 8,
        notice: 'Pessoal que paga ATAL a aula de hoje foi cancelada!',
        name: 'Marina Dantas',
        date: '15/11/2020',
        likes: 2,
      },
    ];
  }

  ngOnInit(): void {}

  showSuccess() {
    this.toastr.error('Por favor tente novamente', 'Ocorreu um erro');
  }
}
