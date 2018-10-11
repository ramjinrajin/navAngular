import { Injectable } from '@angular/core';
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Student } from '../model/student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: Http) {

  }

  createStudent(model: any): Observable<any> {

    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:64025/api/Student/Create', body, options).pipe
      (
      map((response: Response) => response.json()),
      catchError(this.handleError)
      )
  }

  
  updateStudent(model: any): Observable<any> {

    let body = JSON.stringify(model);
    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    return this._http.post('http://localhost:64025/api/Student/Update', body, options).pipe
      (
      map((response: Response) => response.json()),
      catchError(this.handleError)
      )
  }

  getAllStudent(): Observable<Student[]> {
   return this._http.get('http://localhost:64025/api/Student/Get').pipe
      (
      map((response: Response) => <Student[]>response.json()),
      catchError(this.handleError)
      )

  }

  getStudentByCode(code:string): Observable<Student> {
    return this._http.get('http://localhost:64025/api/Student/GetStudentByCode?code='+code,).pipe
       (
       map((response: Response) => <Student>response.json()),
       catchError(this.handleError)
       )
 
   }

  deleteStudent(code:string): Observable<any> {
    return this._http.get('http://localhost:64025/api/Student/Delete?code='+code).pipe
       (
       map((response: Response) =>response.json()),
       catchError(this.handleError)
       )
 
   }

  handleError(error: Response) {
    return Observable.throw(error.json().error || 'Server error')
  }


}
