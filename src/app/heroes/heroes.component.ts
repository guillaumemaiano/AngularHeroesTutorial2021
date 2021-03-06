import { Component, OnInit } from '@angular/core';
import { HeroService } from '../hero.service';
import { MessageService } from '../messages.service';
import { Hero } from '../hero';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.scss']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[] = [];

  constructor(private heroService: HeroService) { }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes(): void {
    this.heroService.getHeroes()
      .subscribe(heroes => this.heroes = heroes);
  }

  add(heroName: String): void {
    heroName = heroName.trim();
    if (!heroName) { return; }
    this.heroService.addHero({ name: heroName } as Hero)
      .subscribe(hero => {
        this.heroes.push(hero);
      });
  }

  delete(heroId: number) {


    const heroesWithId = this.heroes.filter(hero => hero.id == heroId);
    const heroFound = heroesWithId[0];
    this.heroService.deleteHero(heroId)
    .subscribe( _ => {
      this.heroes = this.heroes.filter(h => h !== heroFound);
     });
  }
}