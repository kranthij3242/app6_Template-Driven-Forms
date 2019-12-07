import { Component, OnInit } from '@angular/core';
import {Hero} from '../hero';

@Component({
  selector: 'app-basictemplatedrivenform',
  templateUrl: './basictemplatedrivenform.component.html',
  styleUrls: ['./basictemplatedrivenform.component.css']
})
export class BasictemplatedrivenformComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  powers=["hardworking","easylearning","Analysing well","good listener"]
heroobj=new Hero(12,'kranthi',this.powers[0],'samplealter');

submitted = false;

  onSubmit() { this.submitted = true; }

  // TODO: Remove this when we're done
  get diagnostic() { return JSON.stringify(this.heroobj); }

}
