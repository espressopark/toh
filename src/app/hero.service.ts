import { Injectable } from '@angular/core';
import {HEROES} from './mock-heroes';
import {Hero} from './hero';
import {Observable, of} from 'rxjs';
import {delay} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor() { }

  getHeroes(): Observable<Hero[]> {
    return of(HEROES).pipe(delay(1000));
  }

  getHero(hero_id: number): Observable<Hero> {
    return of( HEROES.find(element => element.id === hero_id)).pipe(delay(1000));
  }
}
