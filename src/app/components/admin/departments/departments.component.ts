import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentsService } from '../../../services/deparments.service';
import { PaginatorComponent } from '../paginator/paginator.component';
import swal from 'sweetalert2';

@Component({
  selector: 'app-departments',
  templateUrl: './departments.component.html'
})
export class DepartmentsComponent implements OnInit {

  @ViewChild('paginator') private pag: PaginatorComponent;

  constructor(private departmentsService: DepartmentsService) { }

  listDepartments = [];
  id_department: number;
  name: string;
  budget: string;
  start_date: Date;
  administrator: string;

  ngOnInit() {
    this.pag.pageable = true;
    this.getAll();
  }

  getAll() {
    this.departmentsService.getAll(this.pag.pageable, this.pag.page, this.pag.size).then(res => {
      if (this.pag.pageable) {
        this.pag.setPages(res.json());
        this.listDepartments = this.pag.listConfigPagination.content;
      } else {
        this.listDepartments = res.json();
      }
    });
  }

  // getOne(id: number) {
  //   this.listDepartments = [];
  //   this.departmentsService.getDepartment(id).subscribe(res => {
  //     this.listDepartments[0] = res.json();
  //   });
  // }

  post() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date),
      administrator: this.administrator
    };
    this.departmentsService.post(data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getAll();
    });
  }

  put() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date).valueOf(),
      administrator: this.administrator
    };
    this.departmentsService.put(this.id_department, data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getAll();
    });
  }

  patch() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date),
      administrator: this.administrator
    };
    console.log(data);
    this.departmentsService.patch(this.id_department, data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getAll();

    });
  }

  delete() {
    this.departmentsService.delete(this.id_department).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getAll();
    });
  }

  setData(item: any) {
    this.id_department = item.departmentId;
    this.name = item.name;
    this.budget = item.budget;
    this.start_date = item.startDate;
    this.administrator = item.administrator;
  }

  clear() {
    this.id_department = null;
    this.name = null;
    this.budget = null;
    this.start_date = null;
    this.administrator = null;
  }

  parseDate(dateString: string): Date {
    if (dateString) {
        return new Date(dateString);
    } else {
        return null;
    }
  }

  pagination() {
    this.pag.pageable = !this.pag.pageable;
    this.getAll();
  }

}
