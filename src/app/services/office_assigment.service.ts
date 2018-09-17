import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class OfficeAssigmentService {

    constructor(private rootService: RootService){ }

    ruta = 'office-assigment/';
    pagination: string;

    getOfficeAssiments(pageable, page: number,size): Promise<any>{
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getOfficeAssigment(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postOfficeAssigment(data: any): Promise<any> {
        return this.rootService.post(this.ruta,data);
    }

    putOfficeAssigment(data: any): Promise<any> {
        return this.rootService.put(this.ruta, data);
    }

    patchOfficeAssigment(data: any): Promise<any> {
        return this.rootService.patch(this.ruta,data);
    }

    deleteOfficeAssigment(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}