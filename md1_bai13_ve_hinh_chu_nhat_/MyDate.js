class MyDate {
    day;
    month;
    year;

    constructor(day, month, year) {
        this.day = day;
        this.month = month;
        this.year = year;
    }

    getDay() {
        return this.day;
    }

    setDay(day) {
        this.day = day;
    }

    getMonth() {
        return this.month;
    }
    setMonth(month){
        this.month = month;
    }
    getYear(){
        return this.year;
    }
    setYear(year){
        this.year = year;
    }
    toString(){
        return this.day + '/'+ this.month +'/' + this.year
    }
}

