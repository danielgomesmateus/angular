import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public heartEmpty:string = '/assets/heart_empty.png';
  public heartFull:string  = '/assets/heart_full.png';

  constructor() { }

  ngOnInit() {
  }

}
