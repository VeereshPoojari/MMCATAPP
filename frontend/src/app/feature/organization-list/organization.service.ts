import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SERVICE_API_URL } from '../../core/app.constant';

@Injectable({
  providedIn: 'root'
})
export class OrganizationService {

  constructor(private http: HttpClient, private router: Router) { }
  getAllOrganization(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/users/organization", { observe: 'response' });
  }
  getAllOrganizationList(request:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/users/list",request, { observe: 'response' });
  }
  deleteOrganizationById(organizationId:any): Observable<HttpResponse<any>> {
    return this.http.delete<any>(SERVICE_API_URL + "/users/organization/"+organizationId, { observe: 'response' });
  }
}
