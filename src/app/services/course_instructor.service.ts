import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class CourseInstructorService {

    constructor(private rootService: RootService) { }

    ruta = 'course_instructor/';
    pagination: string;

    getCourseInstructors(pageable, page, size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getCourseInstructor(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postCourseInstructor(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    putCourseInstructor(data: any): Promise<any> {
        return this.rootService.put(this.ruta,data);
    }

    patchCourseInstructor(data: any): Promise<any> {
        return this.rootService.patch(this.ruta, data);
    }

    deleteCourseInstructor(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}