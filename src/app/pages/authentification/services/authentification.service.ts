import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable} from 'rxjs';
import {User} from '../../../models/User';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Router} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {Role} from '../../../models/role';
import {UrlParts} from '../../../utils/urlParts';
import {redirectTo} from '../../../utils/methods';
import {map} from 'rxjs/operators';

const ANONYMOUS_USER = new User(0, 'Anonymous');

@Injectable({
  providedIn: 'root'
})
export class AuthentificationService {

  protected authenticatedUser: BehaviorSubject<User> = new BehaviorSubject<User>(ANONYMOUS_USER);

  constructor(private http: HttpClient,
              private router: Router,
              private service: ApiService<Role>) {
  }


  public login(username: string, password: string): Observable<User | null> {
    const params = new HttpParams().set('username', username).set('password', password);
    console.log('login');
    return this.http.get<User[]>(UrlParts.url + UrlParts.user, {params}).pipe(map(user => {
      if (user.length === 1) {
        const newLogin = user[0];
        if (<number>newLogin.roleId > 0) {
          this.service.find(UrlParts.role, <number>newLogin.roleId,).subscribe(
            data => {
              localStorage.setItem('role', <string>data.role);
            }
          );
        }
        this.authenticatedUser.next(newLogin);
        console.log(localStorage.getItem('role'));
        redirectTo('course', this.router);
        return newLogin;
      } else {
        this.authenticatedUser.next(ANONYMOUS_USER);
        redirectTo('course', this.router);
        return null;
      }
    }));
  }

  public loginFilter(username: string, password: string): void {
    this.http.get<User[]>(UrlParts.url + UrlParts.user).pipe(
      map(logins => logins.filter(
        login => login.login === username && login.password === password
      ))
    ).subscribe({
      next: logins => {
        if (logins.length === 1) {
          const newLogin = logins[0];
          console.log(newLogin);
          if (<number>newLogin.roleId > 0) {
            this.service.find(UrlParts.role, <number>newLogin.roleId).subscribe(
              data => localStorage.setItem('role', <string>data.role)
            );
          }
          this.authenticatedUser.next(logins[0]);
          redirectTo('', this.router);
        } else {
          this.authenticatedUser.next(ANONYMOUS_USER);
          redirectTo('', this.router);
        }
        console.log(localStorage.getItem('role'));
      },
      error: err => console.log(`Error while getting data ${UrlParts.user}: ` + err)
    });
  }

  public logout(): void {
    console.log('logout access');
    console.log(localStorage.getItem('role'));
    this.authenticatedUser.next(ANONYMOUS_USER);
    localStorage.clear();
    redirectTo('course', this.router);
  }

  public getAuthenticatedUser(): Observable<User> {
    return this.authenticatedUser;
  }


  canActivate(): boolean {
    let found = false;
    this.getAuthenticatedUser().subscribe(login => {
      if (login.login === 'Anonymous') {
        found = true;
      }
    });
    return !found;
  }
}
