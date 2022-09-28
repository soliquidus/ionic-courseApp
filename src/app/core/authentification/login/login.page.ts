import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {AuthentificationService} from '../services/authentification.service';
import {redirectTo} from '../../../utils/methods';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../../pages/globalPageStyle.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private authService: AuthentificationService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.initForm();
    if(this.authService.canActivate()){
      redirectTo('/course/list', this.router);
    }
  }

  onSubmit() {
    const userData = this.form.value;
    this.authService.loginFilter(userData.login, userData.password);
    redirectTo('/course/list', this.router);
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(4)]]
    });
  }

}
