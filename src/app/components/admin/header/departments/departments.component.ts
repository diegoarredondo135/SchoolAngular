import { Component, OnInit, ViewChild } from '@angular/core';
import { DepartmentsService } from '../../../../services/deparments.service';
import { PaginatorComponent } from '../../paginator/paginator.component';
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
    this.getDepartments();
  }

  getDepartments() {
    this.departmentsService.getDepartments(this.pag.pageable, this.pag.page, this.pag.size).then(res => {
      if (this.pag.pageable) {
        this.pag.setPages(res.json());
        this.listDepartments = this.pag.listConfigPagination.content;
      } else {
        this.listDepartments = res.json();
      }
    });
  }

  getDepartment(id: number) {
    this.listDepartments = [];
    this.departmentsService.getDepartment(id).then(res => {
      this.listDepartments[0] = res.json();
    });
  }

  postDepartments() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date),
      administrator: this.administrator
    };
    this.departmentsService.postDepartments(data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getDepartments();
    });
  }

  putDepartments() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date).valueOf(),
      administrator: this.administrator
    };
    this.departmentsService.putDepartments(this.id_department, data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getDepartments();
    });
  }

  patchDepartments() {
    const data = {
      name: this.name,
      budget: this.budget,
      startDate: new Date(this.start_date),
      administrator: this.administrator
    };
    console.log(data);
    this.departmentsService.patchDepartments(this.id_department, data).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getDepartments();

    });
  }

  deleteDepartments() {
    this.departmentsService.deleteDepartments(this.id_department).then(res => {
      swal('Great Job', res.json().message, 'success');
      this.getDepartments();
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
    this.getDepartments();
  }

}
