import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, Resolve, RouterStateSnapshot} from '@angular/router';
import {ApiService} from '../../services/api.service';
import {Teacher} from '../../models/teacher';
import {UrlParts} from '../../utils/urlParts';

@Injectable({
  providedIn: 'root'
})
export class TeacherResolver implements Resolve<any> {
  constructor(private service: ApiService<Teacher>) {

  }
  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    return this.service.findAll(UrlParts.teacher);
  }
}
