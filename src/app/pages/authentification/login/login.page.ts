import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ApiService} from '../../../services/api.service';
import {User} from '../../../models/User';
import {AuthentificationService} from '../services/authentification.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['../../globalPageStyle.scss'],
})
export class LoginPage implements OnInit {

  form!: FormGroup;

  constructor(
    private service: ApiService<User>,
    private formBuilder: FormBuilder,
    private authService: AuthentificationService
  ) {
  }

  ngOnInit() {
    this.initForm();
  }

  onSubmit() {
    const userData = this.form.value;
    this.authService.loginFilter(userData.login, userData.password);
  }

  initForm(): void {
    this.form = this.formBuilder.group({
      login: ['', [Validators.required, Validators.minLength(4)]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    });
  }

}
