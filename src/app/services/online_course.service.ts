import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class OnlineCourseService {

    constructor(private rootService: RootService) { }

    ruta = 'online.course/';
    pagination: string;

    getOnlineCourses(pageable,page,size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getOnlineCourse(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postOnlineCourse(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    putOnlineCourse(data: any): Promise<any> {
        return this.rootService.put(this.ruta, data);
    }

    patchOnlineCourse(data: any): Promise<any> {
        return this.rootService.patch(this.ruta, data);
    }

    deleteOnlineCourse(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}