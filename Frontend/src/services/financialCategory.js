import axios from "axios";

const conf = require('./config')

export default class financialCategory {
    url;
    http;

    id;
    name;
    type;
    img_path;
    constructor() {
        this.url = conf.url + "category";
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

    async getByType(ac_id) {
        return this.http.get(this.url + "/getByType/" + this.type + "/" + ac_id).then(response => {
            return response.data;
        });
    }

    async getAllPermanent() {
        return this.http.get(this.url + "/getAllPermanent/").then(response => {
            return response.data;
        });
    }

    insert() {
        let obj = {
            name: this.name,
            type: this.type,
            img_path: this.img_path
        };
        return this.http
            .post(this.url, obj)
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