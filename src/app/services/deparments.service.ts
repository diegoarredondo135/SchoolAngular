import { Injectable } from '@angular/core';
import { RootService } from './root.service';

@Injectable()
export class DepartmentsService {

    constructor(private rootService: RootService) { }

    ruta = 'department/';
    pagination: string;

    getAll(pageable, page, size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getOne(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    post(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    put(id: number, data: any): Promise<any> {
        return this.rootService.put(this.ruta + id, data);
    }

    patch(id: number, data: any): Promise<any> {
        return this.rootService.patch(this.ruta + id, data);
    }

    delete(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }

}
