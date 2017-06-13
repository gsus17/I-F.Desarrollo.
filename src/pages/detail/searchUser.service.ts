// importamos el modulo Injectable de AngularJS
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';

@Injectable()
export class SearchUser {

    public data;

    constructor(private http: Http) {
    }

    public searchUserById(id: string) {
        if (this.data) {
            return Promise.resolve(this.data);
        }

        return new Promise(resolve => {
            const url: string = `https://private-d0cc1-iguanafixtest.apiary-mock.com/contacts/${id}`;
            this.http.get(url)
                .subscribe(data => {
                    this.data = data.json();
                    console.log('respuesta %o', this.data)
                    resolve(this.data);
                });
        });
    }
}