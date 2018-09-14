import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { environment } from '../../environments/environment';

@Injectable()
export class RootService {

    url = environment.url;

    headers = new Headers();
    constructor(private http: Http) {
        this.headers.append('Content-Type', 'application/json');
        this.headers.append('Authorization', 'Bearer ' + localStorage.getItem('token'));
    }

    getAll(path: string) {
        console.log(this.url + path);
        return this.http.get(this.url + path, { headers: this.headers }).toPromise();
    }

    getOne(path: string) {
        return this.http.get(path, { headers: this.headers }).toPromise();
    }

    post(path: string, body: any) {
        return this.http.post(this.url + path, body, { headers: this.headers }).toPromise();
    }

    put(path: string, body: any) {
        return this.http.put(this.url + path, body, { headers: this.headers }).toPromise();
    }

    patch(path: string, body: any) {
        return this.http.patch(this.url + path, body, { headers: this.headers }).toPromise();
    }

    delete(path: string) {
        return this.http.delete(this.url + path, { headers: this.headers }).toPromise();
    }
}
