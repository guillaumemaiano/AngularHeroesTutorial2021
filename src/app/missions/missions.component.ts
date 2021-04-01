import { Component, OnInit } from '@angular/core';
import { Hero } from '../hero';
import { Mission } from '../mission';

@Component({
  selector: 'app-missions',
  templateUrl: './missions.component.html',
  styleUrls: ['./missions.component.scss']
})
export class MissionsComponent implements OnInit {

  powers = ['Really Smart', 'Super Flexible',
  'Super Hot', 'Weather Changer'];

  model = { id: 18, name: 'Dr IQ', powers: this.powers[0], alterEgo: 'Chuck Overstreet', mission: Mission.killteam} as Hero;

  submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.model); }

  constructor() { }

  ngOnInit(): void {
  }

}
