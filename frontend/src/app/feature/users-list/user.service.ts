import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICE_API_URL } from '../../core/app.constant';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  getAllEmployees(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/employee/all", { observe: 'response' });
  }
  getAllEmployeeList(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/employee/",req, { observe: 'response' });
  }
  deleteEmployeeById(EmployeeId:Number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(SERVICE_API_URL + "/employee/"+EmployeeId, { observe: 'response' });
  }
  createUpdateEmployee(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/employee/create",req, { observe: 'response' });
  }
}
