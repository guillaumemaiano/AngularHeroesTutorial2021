import { Component, OnInit } from '@angular/core';
import { Observable, Subject } from 'rxjs';

import { switchMap } from 'rxjs/operators';

import { Hero } from '../hero';
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.scss']
})
export class HeroSearchComponent implements OnInit {

  heroes$: Observable<Hero[]>;
  private searchTerms = new Subject<string>();

  constructor(private heroService: HeroService) { 
    // needed so it compiles
    this.heroes$ = new Observable<Hero[]>();
  }

  ngOnInit(): void {
    this.heroes$ = this.searchTerms.pipe(
      // switch to new search observable each time the term changes
      switchMap((term: string) => new Observable<Hero[]>()),
    );
  }

  search(term: string): void {
    this.searchTerms.next(term);
  }
}
