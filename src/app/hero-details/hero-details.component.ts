import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-details',
  templateUrl: './hero-details.component.html',
  styleUrls: ['./hero-details.component.scss']
})
export class HeroDetailsComponent implements OnInit {

  @Input() hero?: Hero;
  
  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    var route = this.route;
    var snapshot = route.snapshot;
    var paramMap =  snapshot.paramMap
    var idCandidate = paramMap.get('id');
    const id = +idCandidate!;
    this.heroService.getHero(id)
      .subscribe(hero => this.hero = hero);
  }

}
