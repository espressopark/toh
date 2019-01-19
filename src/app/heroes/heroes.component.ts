import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';
import {HEROES} from '../mock-heroes';
import {HeroService} from '../hero.service';
import {element} from 'protractor';
import {NavigationEnd, Router} from '@angular/router';

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
  constructor(private heroService: HeroService, private router: Router) {
    // 2) new 키워드로 객체 생성
    this.hero = new Hero(11, 'Winstorm');
    // id, name은 무슨 값이 할당되는가?
    console.log('hero: ', this.hero);

    // 의존적인 코드
    // const heroService = new HeroService();
    heroService.getHeroes()
      .subscribe(data => {
        this.heroes = data;
      });

    // 1) 자식 컴포넌트가 변경되었다는것을 알기위해서 subscribe
    this.heroService.refresh$
      .subscribe(data => {
        console.log(data);
        if (this.heroes) {
          this.selectedHero = this.heroes.find(item => item.id === data);
        }
      });

    // 라우터 이벤트
    this.router.events.subscribe(event => {
      console.log(event);
      if (event instanceof NavigationEnd) {
        if (event.url === '/heroes') {
          this.selectedHero = null;
        }
      }
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
