import {Component, Input, OnInit} from '@angular/core';
import {Hero} from '../hero';
import {ActivatedRoute} from '@angular/router';
import {HeroService} from '../hero.service';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.scss']
})
export class HeroDetailComponent implements OnInit {
  // @Input()
  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {
    this.route.params
      .subscribe(params => {
        console.log(params); // {hero_id: "13"}
        this.getHero(+params['hero_id']); // +는 string을 number로 변환
      });
  }

  ngOnInit() {
  }

  getHero(hero_id: number) {
    this.heroService.getHero(hero_id)
      .subscribe(data => this.hero = data);
  }
}
