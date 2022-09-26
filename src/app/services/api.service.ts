import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Model} from '../models/model';
import {UrlParts} from '../utils/urlParts';

const url = UrlParts.url;

@Injectable({
  providedIn: 'root'
})
export class ApiService<T extends Model> {

  constructor(private http: HttpClient) {
  }

  public findAll(urlPart: string): Observable<T[]> {
    return this.http.get<T[]>(url + urlPart);
  }

  public add(urlPart: string, m: Model): Observable<T> {
    return this.http.post<T>(url + urlPart, m);
  }

  public update(urlPart: string, id: number, m: Model): Observable<T> {
    return this.http.put<T>(`${url + urlPart}/${id}`, m);
  }

  public find(urlPart: string, id: number) {
    return this.http.get<T>(`${url + urlPart}/` + id);
  }

  public delete(urlPart: string, m: T): Observable<T> {
    return this.http.delete<T>(`${url + urlPart}/` + m.id);
  }
}
