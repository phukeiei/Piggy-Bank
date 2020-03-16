import account from './account'

export default class facade {
    accountService = account;

    constructor() {
        this.accountService = account;
    }
    getAccount() {
        return this.accountService;
    }
}