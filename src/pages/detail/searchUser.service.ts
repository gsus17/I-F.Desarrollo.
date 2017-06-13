// importa el modulo Injectable de AngularJS
import { Http } from '@angular/http';
import { Injectable } from '@angular/core';
import { IUser } from '../home/home.interface';

@Injectable()
export class SearchUser {

    /**
     * Usuario a retornar.
     * @type {IUser}
     * @memberof SearchUser
     */
    public data:IUser = null;

    constructor(private http: Http) {
    }

    /**
     * Realiza la peticion al api segun el id del usuario.
     * @param {string} id Id del usuario requerido.
     * @returns Json con data del usuario especifico.
     * @memberof SearchUser
     */
    public searchUserById(id: string) {
        if (this.data != null && this.data.user_id === id) {
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