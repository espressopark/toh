import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  // 1) 리터럴 객체로 객체 생성
  // hero: Hero = {
  //   id: 11,
  //   name: 'Winstorm'
  // };
  hero: Hero;
  heroes: Hero[];
  selectedHero: Hero;

  isSpecial = true;

  // 생성자로 이미 등록된 서비스를 주입받는다 (DI)
  constructor(private heroService: HeroService) {
    // 2) new 키워드로 객체 생성
    this.hero = new Hero(11, 'Winstorm');
    // id, name은 무슨 값이 할당되는가?
    console.log('hero: ', this.hero);

    // 의존적인 코드 로 쓰지 않는다.
    // const heroService = new HeroService();
    heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
    });
  }

  ngOnInit() {
  }

  onSave(e: any) {
    console.log('onSave: ', e);
  }
  onSelect(hero: Hero) {
    this.selectedHero = hero;
  }
}
