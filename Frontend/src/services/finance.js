import axios from "axios";

const conf = require('./config')

export default class finance {
    url;
    http;

    constructor() {
        this.url = conf.url + "finance";
        this.http = axios;
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

    insert() {
        let obj = {
            type: this.type,
            title: this.title,
            balance: this.balance,
            fc_id: this.fc_id,
            ac_id: this.ac_id
        };
        return this.http
            .post(this.url, obj)
            .then(response => {
                return response.data;
            });
    }

    updateById() {
        let obj = {
            title: this.title,
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
}