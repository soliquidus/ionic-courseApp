import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthentificationService} from './pages/authentification/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnChanges, OnInit{
  public appPages = [
    {title: 'Course List', url: '/course/list', icon: 'list'},
  ];

  dark = false;
  loggedIn = false;

  constructor(public authService: AuthentificationService) {
  }

  ngOnChanges() {
    console.log(localStorage.getItem('role'));
  }

  ngOnInit() {
    console.log(localStorage.getItem('role'));
  }

  public logout() {
    this.authService.logout();
  }

  public login() {
  }

  getRole() {
    return localStorage.getItem('role');
  }
}
