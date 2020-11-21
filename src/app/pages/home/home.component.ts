import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import {FeedService} from '../../services/feed.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  feed: Array<any> = [];
  constructor(private toastr: ToastrService, private feedService: FeedService) {
    
  }

  ngOnInit(): void {
    this.feedService.getAll().subscribe((itens)=>{
      itens.forEach(item => {
        this.feed.push(item);
      });
    })
    this.toastr.info('Restam 3 dias para ser encerrada', 'A votação está aberta!');
  }

  like(item){
    item.likes++;
  }

  showSuccess() {
    this.toastr.error('Por favor tente novamente', 'Ocorreu um erro');
  }
}
