import { HttpClient, HttpResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { SERVICE_API_URL } from '../../core/app.constant';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {

  constructor(private http: HttpClient, private router: Router) { }
  getAllProjects(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/projects/all", { observe: 'response' });
  }
  getAllProjectList(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/projects/",req, { observe: 'response' });
  }
  getAllProjectListByORGId(organizationId:any,req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/projects/"+organizationId,req, { observe: 'response' });
  }
  deleteProjectById(projectId:Number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(SERVICE_API_URL + "/projects/"+projectId, { observe: 'response' });
  }
  createUpdateProject(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/projects/create",req, { observe: 'response' });
  }

  /* testing apis */
  getAllTesting(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/automation/all", { observe: 'response' });
  }
  getAllTestingList(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/automation/list",req, { observe: 'response' });
  }
  getAllTestingListBYProjectId(projectId:any,req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/automation/"+projectId,req, { observe: 'response' });
  }
  deleteTestById(projectId:Number): Observable<HttpResponse<any>> {
    return this.http.delete<any>(SERVICE_API_URL + "/automation/"+projectId, { observe: 'response' });
  }
  createUpdateTest(req:any): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/automation/create",req, { observe: 'response' });
  }
  runAndCreateTest(): Observable<HttpResponse<any>> {
    return this.http.post<any>(SERVICE_API_URL + "/automation/run", { observe: 'response' });
  }

  /* testing apis */
}
