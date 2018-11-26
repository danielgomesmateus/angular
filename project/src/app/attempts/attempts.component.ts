import { Component, OnInit } from '@angular/core';
import { HeartModel } from '../shared/heart.model';

@Component({
  selector: 'app-attempts',
  templateUrl: './attempts.component.html',
  styleUrls: ['./attempts.component.css']
})
export class AttemptsComponent implements OnInit {

  public heartEmpty:string = '/assets/heart_empty.png';
  public heartFull:string  = '/assets/heart_full.png';
  public hearts: HeartModel[] = [
    
    new HeartModel(true),
    new HeartModel(true),
    new HeartModel(true)
  ];

  constructor() { }

  ngOnInit() {
  }

}
