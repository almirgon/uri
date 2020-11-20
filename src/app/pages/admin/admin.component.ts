import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AdminService } from '../../services/admin.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
})
export class AdminComponent implements OnInit {
  public formAdmin: FormGroup;
  public period;
  all_list: any = [];

  constructor(private service: AdminService) {
    this.formAdmin = new FormGroup({
      name: new FormControl('', [Validators.required, Validators.minLength(2)]),
      subject: new FormControl('', [
        Validators.required,
        Validators.minLength(2),
      ]),
    });
    period: new FormControl('', [Validators.required, Validators.minLength(4)]);
  }

  ngOnInit() {
     this.service.getAll().subscribe((itens) => {
      itens.forEach((item) => {
        console.log(item);
        this.all_list.push(item);
      });
    });
  }

  isFormFieldInvalid(field: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return !ctrl.valid && ctrl.touched && ctrl.dirty;
  }

  hasError(field: string, error: string): boolean {
    const ctrl = this.formAdmin.get(field);
    return ctrl.dirty && ctrl.hasError(error);
  }
}
