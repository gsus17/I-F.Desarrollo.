import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IUser } from './home.interface';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

  public users: IUser[] = [
    {
      "user_id": "100",
      "created_at": "2015-08-05T08:40:51.620Z",
      "birth_date": "2000-01-31",
      "first_name": "Susana",
      "last_name": "Ducatti",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4787-2012"
        }, {
          "type": "Cellphone",
          "number": "54-911-3211-0936"
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c9/Creative-Tail-People-women-skintone4.svg/128px-Creative-Tail-People-women-skintone4.svg.png",
      "photo": "https://static.pexels.com/photos/27411/pexels-photo-27411.jpg"
    },
    {
      "user_id": "1001",
      "created_at": "2014-08-05T08:40:51.620Z",
      "birth_date": "1995-11-21",
      "first_name": "Roberto",
      "last_name": "Mancariotti",
      "phones": [
        {
          "type": "Home",
          "number": null
        }, {
          "type": "Cellphone",
          "number": "54-911-2011-1230"
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/5/5a/Creative-Tail-People-man.svg/128px-Creative-Tail-People-man.svg.png",
      "photo": "https://static.pexels.com/photos/91227/pexels-photo-91227.jpeg"
    },
    {
      "user_id": "1002",
      "created_at": "1985-08-05T08:40:51.620Z",
      "birth_date": "1982-11-22",
      "first_name": "Nazareno",
      "last_name": "Peluffo",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4902-0876"
        }, {
          "type": "Cellphone",
          "number": null
        }, {
          "type": "Office",
          "number": "54-11-4993-3322"
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/Creative-Tail-People-police-man.svg/128px-Creative-Tail-People-police-man.svg.png",
      "photo": "https://static.pexels.com/photos/101584/pexels-photo-101584.jpeg"
    },
    {
      "user_id": "1003",
      "created_at": "2013-08-05T08:40:51.620Z",
      "birth_date": "1999-03-22",
      "first_name": "Rafael",
      "last_name": "Casero",
      "phones": [
        {
          "type": "Home",
          "number": null
        }, {
          "type": "Cellphone",
          "number": null
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Creative-Tail-People-speaker.svg/128px-Creative-Tail-People-speaker.svg.png",
      "photo": "https://static.pexels.com/photos/119705/pexels-photo-119705.jpeg"
    },
    {
      "user_id": "1004",
      "created_at": "2010-08-05T08:40:51.620Z",
      "birth_date": "1992-11-11",
      "first_name": "Ezequiel",
      "last_name": "Duran",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4040-2012"
        }, {
          "type": "Cellphone",
          "number": "54-911-3211-0936"
        }, {
          "type": "Office",
          "number": "54-11-2333-3333"
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Creative-Tail-People-king.svg/128px-Creative-Tail-People-king.svg.png",
      "photo": "https://static.pexels.com/photos/167669/pexels-photo-167669.jpeg"
    },
    {
      "user_id": "1005",
      "created_at": "2015-08-05T08:40:51.620Z",
      "birth_date": "2000-11-31",
      "first_name": "Belen",
      "last_name": "Peretti",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4787-2013"
        }, {
          "type": "Cellphone",
          "number": "54-911-3211-1222"
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f8/Creative-Tail-People-doctor.svg/128px-Creative-Tail-People-doctor.svg.png",
      "photo": "https://static.pexels.com/photos/206559/pexels-photo-206559.jpeg"
    },
    {
      "user_id": "6100",
      "created_at": "1911-08-05T08:40:51.620Z",
      "birth_date": "2000-01-11",
      "first_name": "Susana",
      "last_name": "Traverso",
      "phones": [
        {
          "type": "Home",
          "number": null
        }, {
          "type": "Cellphone",
          "number": "54-911-1231-0936"
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/3/3b/Creative-Tail-People-police-women.svg/128px-Creative-Tail-People-police-women.svg.png",
      "photo": "https://static.pexels.com/photos/58020/pexels-photo-58020.jpeg"
    },
    {
      "user_id": "4100",
      "created_at": "2014-04-05T08:40:51.620Z",
      "birth_date": "1980-01-31",
      "first_name": "Carlos",
      "last_name": "Rivas",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4322-2221"
        }, {
          "type": "Cellphone",
          "number": "54-911-2321-3221"
        }, {
          "type": "Office",
          "number": "53-422-2123"
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/thumb/9/93/Creative-Tail-People-remove-user.svg/128px-Creative-Tail-People-remove-user.svg.png",
      "photo": "https://static.pexels.com/photos/47451/pexels-photo-47451.jpeg"
    },
    {
      "user_id": "2100",
      "created_at": "2013-05-05T08:40:51.620Z",
      "birth_date": "1976-01-31",
      "first_name": "Carolina",
      "last_name": "Romero",
      "phones": [
        {
          "type": "Home",
          "number": "54-11-4787-2012"
        }, {
          "type": "Cellphone",
          "number": null
        }, {
          "type": "Office",
          "number": null
        }
      ],
      "thumb": "https://upload.wikimedia.org/wikipedia/commons/b/b3/Creative-Tail-People-wonder-women.svg",
      "photo": "https://static.pexels.com/photos/87346/pexels-photo-87346.jpeg"
    }
  ]

  constructor(public navCtrl: NavController) {

  }

}
