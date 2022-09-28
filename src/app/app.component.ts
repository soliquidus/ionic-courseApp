import {Component, OnChanges, OnInit} from '@angular/core';
import {AuthentificationService} from './core/authentification/services/authentification.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent implements OnChanges, OnInit {
  public appPages = [
    {title: 'Course List', url: '/course/list', icon: 'list'},
    {title: 'Teacher List', url: '/teacher/list', icon: 'list'}
  ];

  constructor(public authService: AuthentificationService) {
  }

  ngOnChanges() {
  }

  ngOnInit() {
  }

  public logout() {
    this.authService.logout();
  }

  public login() {
  }
}
