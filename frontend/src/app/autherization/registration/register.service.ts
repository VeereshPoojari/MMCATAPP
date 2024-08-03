import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { SERVICE_API_URL } from '../../core/app.constant';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor(private http: HttpClient) { }
  getAllOrganization(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/users/organization", { observe: 'response' });
  }
  createOrganization(request:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/users/create",request, { observe: 'response' });
  }
}