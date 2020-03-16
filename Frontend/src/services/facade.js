import account from './account'
import finance from './finance'
import financialCategory from './financialCategory'

export default class facade {
    accountService = account;
    financeService = finance;
    financialCategoryService = financialCategory;


    constructor() {
        this.accountService = account;
        this.financeService = finance;
        this.financialCategoryService = financialCategory;
    }
    getAccount() {
        return this.accountService;
    }

    getFinance() {
        return this.financeService;
    }

    getFinancialCategory() {
        return this.financialCategoryService;
    }
}