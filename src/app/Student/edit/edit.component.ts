import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentService } from '../service/student.service';
import { Student } from '../model/student';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css'],
  providers: [StudentService]
})
export class EditComponent implements OnInit {
  studentModel: any;
  msg:string;
  err:string;
  constructor(private _adroute: ActivatedRoute, private _service: StudentService) { 
    this.studentModel = new Student;
  }

  ngOnInit() {
    var code = this._adroute.snapshot.params['code'];
    this._service.getStudentByCode(code).subscribe((data) => {
      this.studentModel = data;
    }, error => {
      console.log(error);
    });


  }

  EditStudent() {
   
    var params: Student = {
      code: this.studentModel.code,
      dateOfBirth: this.studentModel.dateOfBirth,
      division: this.studentModel.division,
      gender: this.studentModel.gender,
      name: this.studentModel.name
    }

    this._service.updateStudent(params).subscribe((result) => {
      this.msg = "Student updated successfully";
      this.studentModel = new Student;
    }, error => {
      this.err = error;
    });

  }

}
