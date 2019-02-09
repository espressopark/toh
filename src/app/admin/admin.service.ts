import { Injectable } from '@angular/core';
import {Hero} from '../hero';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ResultVo} from '../domain/result.vo';
import {Observable} from 'rxjs';

@Injectable()
export class AdminService {

  constructor(private http: HttpClient) { }

  addHero(hero: any): Observable<ResultVo> {
    return this.http.post<ResultVo>(`${environment.HOST}/api/hero`, hero);
  }
}
