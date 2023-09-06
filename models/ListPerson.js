import Person from "./Person.js";
import Student from "./Student.js";
import Customer from "./Customer.js";
import Employee from "./Employee.js";

class ListPerson {
    // Chứa mảng của các model trên và các phương thức xử lý
    arrStudent = [];
    arrEmployee = [];

    //? Thêm sinh viên
    addStudent = (student) => {
        this.arrStudent.push(student);
        this.renderStudent();
        this.saveToLocal();
    };

    //? Render Dữ liệu
    renderStudent = (arr = this.arrStudent) => {
        let content = "";
        for (let i = 0; i < arr.length; i++) {
            let student = new Student();
            Object.assign(student, arr[i]);
            let { id, name, address, email, tinhDTB } = student;
            content += `
            <tr>
                <td>${id}</td>
                <td>${name}</td>
                <td>${email}</td>
                <td>${address}</td>
                <td>${tinhDTB()}</td>
                <td>
                    <button class="btn btn-danger" onclick="deleteStudent('${id}')">Xóa</button>
                    <button class="btn btn-warning" onclick="editStudentInfor('${id}')">Sửa</button>
                </td>
            </tr>
        `;
        }
        document.getElementById("tbodyStudent").innerHTML = content;
    };

    //? Lưu dữ liệu local
    saveToLocal = () => {
        // Chuyển mảng thành chuỗi Json
        let stringJson = JSON.stringify(this.arrStudent);
        localStorage.setItem("arrStudent", stringJson);
    };

    // ? Lấy dữ liệu từ local
    getDataLocal = () => {
        let dataStudent = localStorage.getItem("arrStudent");
        // Parse chuỗi json về lại kiểu dữ liệu ban đầu
        if (dataStudent) {
            this.arrStudent = JSON.parse(dataStudent);
            this.renderStudent();
        }
    };

    //? Xóa sinh viên
    deleteStudent = (id) => {
        for (let index in this.arrStudent) {
            if (this.arrStudent[index].id == id) {
                this.arrStudent.splice(index, 1);
            }
        }
        this.renderStudent();
        this.saveToLocal();
    };

    //? Cập nhật sinh viên
    // Lấy ttin sinh viên
    getStudentInfor = (id) => {
        for (let student of this.arrStudent) {
            if (student.id == id) {
                return student;
            }
        }
    };
    // Cập nhật sinh viên
    updateStudentInfor = (student) => {
        // lấy ra vị trí của sinh viên cần cập nhật
        let index = this.arrStudent.findIndex((item, index) => {
            return item.id == student.id;
        });
        // console.log(index);
        if (index != -1) {
            this.arrStudent[index] = student;
            this.renderStudent();
            this.saveToLocal();
        }
    };
}

export default ListPerson;
