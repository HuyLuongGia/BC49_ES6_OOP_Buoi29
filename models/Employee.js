import Person from "./Person.js";

class Employee extends Person {
    constructor(name, address, id, email, dayWork, dailyWage) {
        super(name, address, id, email);
        this.dayWork = dayWork;
        this.dailyWage = dailyWage;
    }
}

export default Employee;
