import Person from "../models/Person.js";
import Student from "../models/Student.js";
import ListPerson from "../models/ListPerson.js";

let listPerson = new ListPerson();
listPerson.getDataLocal();

document.getElementById("btnAddStd").onclick = () => {
    document.getElementById("id").readOnly = false;
    document.getElementById("studentInput").reset();
};
// Thêm Sinh Viên
document.getElementById("studentInput").onsubmit = () => {
    event.preventDefault();
    let student = new Student();
    // Lấy dữ liệu từ ng dùng nhập
    let arrField = document.querySelectorAll("#studentInput input");
    // console.log(arrField);
    for (let field of arrField) {
        // console.log(field);
        let { value, id } = field;
        student[id] = value;
    }
    console.log(student);
    listPerson.addStudent(student);

    // Reset form
    document.getElementById("studentInput").reset();
};

window.deleteStudent = (id) => {
    listPerson.deleteStudent(id);
};

window.editStudentInfor = (id) => {
    let student = listPerson.getStudentInfor(id);
    // console.log(student);
    // Mở modal lên
    document.getElementById("btnAddStd").click();
    let arrField = document.querySelectorAll("#studentInput input");
    for (let item of arrField) {
        // console.log(item);
        item.value = student[item.id];
    }
    document.getElementById("id").readOnly = true;
};

// Cập nhật sinh viên
document.getElementById("update").onclick = () => {
    let student = new Student();
    let arrField = document.querySelectorAll("#studentInput input");
    for (let item of arrField) {
        let { value, id } = item;
        student[id] = value;
    }
    listPerson.updateStudentInfor(student);
    // Tắt model
    document.querySelector("#studentInput .btn-secondary").click();
    // Clear form
    document.getElementById("studentInput").reset();
    // Mở read only
    document.getElementById("id").readOnly = false;
};

// Lọc danh sách sinh viên theo địa chỉ
document.getElementById("selectAddress").onchange = (event) => {
    let { value } = event.target;
    console.log(value);
    let arrFilter = [];
    arrFilter = listPerson.arrStudent.filter((item, index) => {
        return item.address == value;
    });
    listPerson.renderStudent(arrFilter);
};
