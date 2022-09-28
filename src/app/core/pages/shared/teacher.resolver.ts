import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../../../services/api.service';
import {UrlParts} from '../../../utils/urlParts';
import {User} from '../../models/User';

@Injectable({
  providedIn: 'root'
})
export class TeacherResolver implements Resolve<any> {
  constructor(private service: ApiService<User>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.findAll(UrlParts.user);
  }
}
