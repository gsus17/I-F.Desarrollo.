import { Component } from '@angular/core';
import { NavParams } from 'ionic-angular';
import { SearchUser } from './searchUser.service';
import { IUser } from '../home/home.interface';
import { LoadingController } from 'ionic-angular';

@Component({
    selector: 'page-detail',
    templateUrl: 'detail.html'
})

export class Detail {
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

    public userId: string = '';

    constructor(
        public navParams: NavParams,
        public searchUserService: SearchUser,
        public loadingCtrl: LoadingController) {
        this.userId = this.navParams.get('user_id');
        this.searchUser(this.userId);
    }

    public searchUser(userId: string) {
        let loading = this.loadingCtrl.create({
            content: '<ion-spinner name="bubbles"></ion-spinner>'
        });

        loading.present();

        this.searchUserService.searchUserById(userId).then((data) => {
            this.userDetail = data;
            loading.dismiss();
        })
    }
}
