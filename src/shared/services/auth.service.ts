import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { ApiRes } from '../models/api-res.model';
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';
import { User } from '../models/user.model';

@Injectable()
export class AuthService {
    public user = new BehaviorSubject<User>(JSON.parse(localStorage.getItem('user')));
    public error = new Subject<HttpErrorResponse>();

    constructor(private http: HttpClient) { }

    public login(username: string, password: string): void {
        this.http
            .post('http://localhost:3200/user/login', { username: username, password: password })
            .subscribe((res: ApiRes) => {
                console.log(res);
                localStorage.setItem('token', res.data.token);
                localStorage.setItem('user', JSON.stringify(res.data.user));
                this.user.next(res.data.user);
            },
                (err: HttpErrorResponse) => {
                    this.error.next(err);
                    console.log(err);
                });
    }

    public getToken(): string {
        return localStorage.getItem('token');
    }
}