import axios from "axios";

const conf = require('./config')

export default class account {
    url;
    http;

    constructor() {
        this.url = conf.url + "account";
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
            name: this.name,
            img_path: this.img_path
        };
        return this.http
            .post(this.url, obj)
            .then(response => {
                return response.data;
            });
    }

    updateById() {
        let obj = {
            name: this.name,
            img_path: this.img_path
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