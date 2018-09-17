import { Injectable } from '@angular/core';
import { RootService } from './root.service';

@Injectable()
export class PersonService {

    constructor(private rootService: RootService) { }

    ruta = 'person/';
    pagination: string;

    getPeople(pageable,page,size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getPerson(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postPerson(data: any): Promise<any> {
        return this.rootService.post(this.ruta,data);
    }

    putPerson(data: any): Promise<any> {
        return this.rootService.put(this.ruta, data);
    }

    patchPerson(data: any): Promise<any> {
        return this.rootService.patch(this.ruta,data);
    }

    deletePerson(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }

}