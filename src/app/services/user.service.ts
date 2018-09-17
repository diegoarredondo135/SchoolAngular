import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class UserService {

    constructor(private rootService: RootService) { }

    ruta = 'users/';
    pagination: string;

    getUsers(pageable, page, size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getUser(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postUser(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    putUser(data: any): Promise<any> {
        return this.rootService.put(this.ruta, data);
    }

    patchUser(data: any): Promise<any> {
        return this.rootService.patch(this.ruta, data);
    }

    deleteUser(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}