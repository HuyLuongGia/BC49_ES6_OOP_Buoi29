import Person from "./Person.js";
class Student extends Person {
    constructor(name, address, id, email, math, physic, chemistry) {
        super(name, address, id, email);
        this.math = math;
        this.physic = physic;
        this.chemistry = chemistry;
    }
    // Method
    tinhDTB = () => ((Number(this.math) + Number(this.physic) + Number(this.chemistry)) / 3).toLocaleString();
}
export default Student;
