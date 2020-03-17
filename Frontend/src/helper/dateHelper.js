export default class dateHelper {

    getCurrentDate() {
        let current_date = new Date();
        let current_day = current_date.getDate();
        let current_month = current_date.getMonth() + 1;
        let current_year = current_date.getFullYear();
        if (current_day < 10) {
            current_day = '0' + current_day;
        }

        if (current_month < 10) {
            current_month = '0' + current_month;
        }

        let date = current_year + '-' + current_month + '-' + current_day;

        return date;
    }
}