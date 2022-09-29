import { Component, OnInit, Output } from '@angular/core';
import { PhotoService } from 'src/app/core/authentification/services/photo.service';
import { ApiService } from 'src/app/services/api.service';
import { UrlParts } from 'src/app/utils/urlParts';
import { User } from '../../../models/User';

const urlPart = UrlParts.user;

@Component({
  selector: 'app-teacher-list',
  templateUrl: './teacher-list.page.html',
  styleUrls: ['../../shared/globalPageStyle.scss']
})
export class TeacherListPage implements OnInit {

  @Output()
  title = 'Teachers';

  teacher = new User();
  teachers!: User[];
  searchInput!: string;

  constructor(private service: ApiService<User>,
    public photoService: PhotoService
  ) { }

  async ngOnInit() {
    await this.photoService.loadSaved();
    this.service.findAll(urlPart).subscribe(list => this.teachers = list.filter(u => u.roleId === 2));
  }

  ionViewDidEnter() {
    this.ngOnInit();
  }

  delete(teacher: User) {
    this.service.delete(urlPart, teacher).subscribe(() => {
      this.ngOnInit();
    });
  }

}
