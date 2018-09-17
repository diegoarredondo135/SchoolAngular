import { Injectable } from "@angular/core";
import { RootService } from "./root.service";

@Injectable()
export class StudentGradeService {

    constructor(private rootService: RootService) { }

    ruta = 'student-grade/';
    pagination: string;

    getStudentGrades(pageable, page, size): Promise<any> {
        this.pagination = '?pageable=' + pageable + '&page=' + page + '&size=' + size;
        return this.rootService.getAll(this.ruta + this.pagination);
    }

    getStudentGrade(id: number): Promise<any> {
        return this.rootService.getOne(this.ruta + id);
    }

    postStudentGrade(data: any): Promise<any> {
        return this.rootService.post(this.ruta, data);
    }

    putStudentGrade(data: any): Promise<any> {
        return this.rootService.put(this.ruta, data);
    }

    patchStudentGrade(data: any): Promise<any> {
        return this.rootService.patch(this.ruta, data);
    }

    deleteStudentGrade(id: number): Promise<any> {
        return this.rootService.delete(this.ruta + id);
    }
}