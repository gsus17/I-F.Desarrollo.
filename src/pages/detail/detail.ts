import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { SearchUser } from './searchUser.service';
import { IUser } from '../home/home.interface';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

// Exporta la clase Detail.
export class Detail {

    /**
     * Estructura inicial del usuario.
     * @type {IUser}
     * @memberof Detail
     */
    public userDetail: IUser = {
        birth_date: ``,
        created_at: ``,
        first_name: ``,
        last_name: ``,
        phones: [],
        photo: ``,
        thumb: ``,
        user_id: ``
    };

    /**
     * User id que sera recuperado como parametro.
     * @type {string}
     * @memberof Detail
     */
    public userId: string = '';

    constructor(
        public navParams: NavParams,
        public searchUserService: SearchUser,
        public loadingCtrl: LoadingController) {
        this.userId = this.navParams.get('user_id');
        this.searchUser(this.userId);
    }

    /**
     * Solicita el usuario indicado al servicio searchUser.
     * @param {string} userId User id.
     * @memberof Detail
     */
    public searchUser(userId: string) {

        // Crea el spinner loading.
        let loading = this.loadingCtrl.create({
            content: 'Por favor espere...'
        });

        // Presenta el spinner loading.
        loading.present();

        this.searchUserService.searchUserById(userId).then((data) => {
            this.userDetail = data;

            // Detiene el spinner loading.
            loading.dismiss();
        })
    }
}
