import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { SERVICE_API_URL } from '../../core/app.constant';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private userIdentity: any;
  private securityToken: any;
  public profileName: BehaviorSubject<any> = new BehaviorSubject(null);
  authenticationsuccesshandler = new Subject<any>();
  selectedChildren = new BehaviorSubject(0);

  constructor(private http: HttpClient, private router: Router) { }

  isSessionExpired(): boolean {
    // Implement your logic to check if the session has expired
    const expiration = localStorage.getItem('expiredInMs');
    if (expiration) {
      const expirationDate = new Date(expiration);
      return expirationDate < new Date();
    }
    return true; // Default to expired if no expiration is set
  }

  logout(): void {
    localStorage.clear();
    this.router.navigate(["/login"]);
  }

  login(loginRequest): Observable<any> {
    // const loginRequest = { userName, password }; // Adjust this based on your LoginRequest class
    return this.http.post(SERVICE_API_URL + '/authenticate/login', loginRequest);
  }

  getUser(): Promise<any> {
    if (this.userIdentity) {
      return Promise.resolve(this.userIdentity);
    }
    return this.fetchMyProfile().toPromise().then(response => {
      console.log(response);
      
      const account: any = response.body;
      if (account) {
        this.userIdentity = account;
        this.setProfile(account);
      } else {
        this.userIdentity = undefined;
      }
      return this.userIdentity;
    }).catch(err => {
      this.userIdentity = undefined;
      return this.userIdentity;
    });
  }

  setProfile(value: any): void {
    if (value) {
      this.profileName.next(value);
    } else {
      this.profileName.next(null);
    }
  }

  setIdentity(identity: any): void {
    if (identity === null) {
      localStorage.clear();
      this.userIdentity = undefined;
    } else {
      this.securityToken = identity;
      localStorage.setItem('Bearer access_token', this.securityToken.accessToken);
      localStorage.setItem('refreshToken', this.securityToken.refreshToken);
      localStorage.setItem('expiredInMs', this.securityToken.expiredInMs);
    }
  }
  validateUserName(userId: number, userName: string): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + `api/account/user/${userId}/validate/${userName}`, { observe: 'response' });
  }

  updateMyProfile(myProfile?: any): Observable<any> {
    return this.http.put(SERVICE_API_URL + "api/my-profile", myProfile);
  }

  fetchMyProfile(): Observable<HttpResponse<any>> {
    return this.http.get<any>(SERVICE_API_URL + "/authenticate/user", { observe: 'response' });
  }

  forgotPassword(data: any): Observable<any> {
    return this.http.post(SERVICE_API_URL + 'api/registration/forgot-password', data);
  }

  isAuthenticated(): boolean {
    const token = !!localStorage.getItem('Bearer access_token');
    console.log('AuthService#isAuthenticated', token);
    return token;
  }

  onAuthenticationSuccess(): void {
    this.authenticationsuccesshandler.next(this.userIdentity);
  }
}
