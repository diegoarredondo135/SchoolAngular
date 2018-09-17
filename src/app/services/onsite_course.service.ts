import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class OnsiteCourseService {


    constructor(private rootService: RootService) { }

    ruta = 'onsite-course/';
    pagination: string;

    getOnsiteCourses(pageable,page,size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getOnsiteCourse(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postOnsiteCourse(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    putOnsiteCourse(data: any): Promise<any> {
        return this.rootService.put(this.ruta,data);
    }

    patchOnsiteCourse(data: any): Promise<any> {
        return this.rootService.patch(this.ruta, data);
    }

    deleteOnsiteCourse(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}