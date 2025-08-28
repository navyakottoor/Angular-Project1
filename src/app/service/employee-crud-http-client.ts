import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Employee } from '../models/employee/Employee';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeCrudHttpClient {
  emp_data_url = 'http://localhost:3000/employees';
  // retrivedEmpData: any;
  emp: Employee[] = [];
  
  constructor(private httpClient: HttpClient) {
  }

  fetchUsingJs() {
    fetch(this.emp_data_url).then(
      (response) => {
        response.json().then((finalResponse) => {
          console.log(finalResponse , "JS Response received");
        });
      },
      (error) => {
        console.log(error, "Error");
      }
    );
  }

  // getAllEmployees() {
  //   this.httpClient.get(this.emp_data_url).subscribe(
  //     (responseData) => {
  //       console.log(responseData);
  //       this.retrivedEmpData = responseData;
  //     }, (error) => {
  //       console.log(error);
  //       return error;
  //     } , () => {
  //         console.log("all data received");
  //     }
  //   )
  // }

  getAllEmployees(): Observable<Employee[]> {
    return this.httpClient.get<Employee[]>(this.emp_data_url); 
  }

  postNewUserToDB(empAddBody: any): Observable<Employee> {
        return this.httpClient.post<Employee>(this.emp_data_url, empAddBody);
    // empAddBody.id = this.retrivedEmpData.length+1;
    // this.httpClient.post(this.emp_data_url, empAddBody).subscribe(
    //       (response) => {
    //         console.log('Saved:', response);
    //       },
    //       (err) => {console.error('Error:', err)}
    //     )
  }

  deleteEmployee(id: String): Observable<void> {
    return this.httpClient.delete<void>(`${this.emp_data_url}/${id}`);
  }

  updateToNewEmployee(id: String, newEmp: any): Observable<Employee> {
    return this.httpClient.put<Employee>(`${this.emp_data_url}/${id}`, newEmp);
  }
}
