import { Component, OnInit } from '@angular/core';
import { Student } from '../model/student';
import { StudentService } from '../service/student.service';


@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css'],
  providers: [StudentService]
})
export class CreateComponent implements OnInit {

  studentModel: any;
  msg: string;
  err: string;
  constructor(private _studentService: StudentService) {
    this.studentModel = new Student;
  }

  ngOnInit() {

  }

  CreateStudent() {
    this.msg="";
    this.err="";
    var params: Student = {
      code: this.studentModel.code,
      dateOfBirth: this.studentModel.dateOfBirth,
      division: this.studentModel.division,
      gender: this.studentModel.gender,
      name: this.studentModel.name
    }

    this._studentService.createStudent(params).subscribe((result) => {
      this.msg = "Student created successfully";
      this.studentModel = new Student;
    }, error => {
      this.err = error;
    });

  }
}
