import axios from "axios";

const conf = require('./config')

export default class finance {
    url;
    http;

    id;
    type;
    balance;
    fc_id;
    ac_id;
    create_date;
    constructor() {
        this.url = conf.url + "finance";
        this.http = axios;
    }

    async getSummary(){
        return this.http.get(this.url + "/" + this.id).then(response => {
            return response.data;
        });
    }

    async getAll() {
        return this.http.get(this.url).then(response => {
            return response.data;
        });
    }

    async getById() {
        return this.http.get(this.url + "/" + this.id).then(response => {
            return response.data;
        });
    }

    async getByType() {
        return this.http.get(this.url + "/getByType/" + this.type + "/" + this.ac_id + "/" + this.create_date).then(response => {
            return response.data;
        });
    }

    insert() {
        let obj = {
            type: this.type,
            balance: this.balance,
            fc_id: this.fc_id,
            ac_id: this.ac_id,
            create_date: this.create_date
        };
        return this.http
            .post(this.url, obj)
            .then(response => {
                return response.data;
            });
    }

    updateById() {
        let obj = {
            balance: this.balance
        };
        return this.http
            .put(this.url + "/" + this.id, obj)
            .then(response => {
                return response.data;
            });
    }

    removeById() {
        return this.http
            .put(this.url + "/remove/" + this.id)
            .then(response => {
                return response.data;
            });
    }

    
    //Passakorn Chaiya
}