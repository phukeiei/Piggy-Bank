import axios from "axios";

const conf = require('./config')

export default class financialCategory {
    url;
    http;

    id;
    ac_id;
    fc_id;
    constructor() {
        this.url = conf.url + "financialCategoryAccount";
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
            ac_id: this.ac_id,
            fc_id: this.fc_id
        };
        return this.http
            .post(this.url, obj)
            .then(response => {
                return response.data;
            });
    }
}