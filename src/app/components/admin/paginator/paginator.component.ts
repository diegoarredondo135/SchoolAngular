import { Component, OnInit, DoCheck } from '@angular/core';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html'
})
export class PaginatorComponent implements OnInit, DoCheck {

  constructor() {
    this.page = 0;
    this.size = 5;
  }

  pageable: boolean;
  page: number;
  size: number;

  totalPages = [];
  totPage: number;
  listConfigPagination: any;

  disablePrevious: string;
  disableNext: string;
  activePage: string;

  iFor: number;

  get: any;

  ngOnInit() {
    this.page = 0;
    this.size = 5;
  }

  ngDoCheck() {
    if (this.listConfigPagination) {
      if (this.listConfigPagination.first) {
        this.disablePrevious = 'disabled';
        this.disableNext = null;
      }
      if (this.listConfigPagination.last) {
        this.disableNext = 'disabled';
        this.disablePrevious = null;
      }
      if (!this.listConfigPagination.first && !this.listConfigPagination.last) {
        this.disableNext = null;
        this.disablePrevious = null;
      }
      if (this.listConfigPagination.first && this.listConfigPagination.last) {
        this.disableNext = 'disabled';
        this.disablePrevious = 'disabled';
      }
    } else {
      this.disablePrevious = 'disabled';
    }
  }

  setPages(json: any) {
    this.listConfigPagination = json;
    if (this.listConfigPagination.totalPages > 5) {
      this.totPage = 5;
      if ((this.page) > 3) {
        this.iFor = this.page - 3;
      } else {
        this.iFor = 0;
      }
    } else {
      this.totPage = this.listConfigPagination.totalPages;
      this.iFor = 0;
    }
    this.items();
  }

  changePage(i: number) {
    this.page = i - 1;
  }

  changeSize() {
    this.page = 0;
    this.iFor = 0;
    this.items();
  }

  next() {
    if (!this.listConfigPagination.last) {
      this.page++;
    }
  }

  previous() {
    if (!this.listConfigPagination.first) {
      this.page--;
    }
  }

  getActive(page: number) {
    if (this.page === (page - 1)) {
      return 'active';
    }
  }

  items() {
    if ( this.listConfigPagination.totalPages !== this.page ) {
      this.totalPages = [];
      for (let i = this.iFor; i < this.totPage + (this.iFor); i++) {
        const data = {
          page: i + 1,
          active: false
        };
        this.totalPages.push(data);
      }
    }
  }

}
