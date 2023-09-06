import Person from "./Person.js";

class Customer extends Person {
    constructor(name, address, id, email, company, billValue, rate) {
        super(name, address, id, email);
        this.company = company;
        this.billValue = billValue;
        this.rate = rate;
    }
}

export default Customer;
