import { Component, OnInit } from '@angular/core';
import { StudentService } from '../service/student.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  providers: [StudentService]
})
export class ListComponent implements OnInit {

  students:any;
  constructor(private _studentService:StudentService,private _route:Router) { 

  }

  ngOnInit() {
    this.loadStudents();
  }

  private loadStudents() {
    this._studentService.getAllStudent().subscribe((data) => {
      this.students = data;
    }, error => {
      console.log(error);
    });
  }

  Delete(code:string)
  {
     this._studentService.deleteStudent(code).subscribe((response)=>
     {
      this.loadStudents();
     },error=>
     {
       console.log(error);
     })
  }

  Edit(code:string)
  {
     this._route.navigate(['/Edit',code])
  }

}
