export interface IPhone {
    type: string;
    number: string;
}

export interface IUser {

    user_id: string;
    created_at: string;
    birth_date: string;
    first_name: string;
    last_name: string;
    phones: IPhone[],
    thumb: string;
    photo: string;

}