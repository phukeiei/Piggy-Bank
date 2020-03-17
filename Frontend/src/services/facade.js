import account from './account'
import finance from './finance'
import financialCategory from './financialCategory'
import financialCategoryAccount from './financialCategoryAccount'

export default class facade {
    accountService = account;
    financeService = finance;
    financialCategoryService = financialCategory;
    financialCategoryAccountService = financialCategoryAccount;

    constructor() {
        this.accountService = account;
        this.financeService = finance;
        this.financialCategoryService = financialCategory;
        this.financialCategoryAccountService = financialCategoryAccount;
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

    getFinancialCategoryAccount() {
        return this.financialCategoryAccountService;
    }
}