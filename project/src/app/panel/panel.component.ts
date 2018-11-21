import { Component, OnInit } from '@angular/core';

import { PhraseModel } from '../shared/phrase.model';
import { PHRASE } from './phrase.mock';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
  styleUrls: ['./panel.component.css']
})
export class PanelComponent implements OnInit {

  public phrases: PhraseModel[] = PHRASE;
  public title: string = 'Traduza a frase:';
  public answer: string;
  public round: number = 0;
  public roundPhrase: PhraseModel;
  public progressBar: number = 0;

  constructor() { 

    this.roundPhrase = this.phrases[this.round];
  }

  ngOnInit() {
  }

  public updateAnswer(e: Event): void {
    
    this.answer = (<HTMLInputElement>e.target).value;
  }

  public checkAnswer(): void {

    if(this.answer == this.roundPhrase.phrasePtBr) {
      
      this.round ++;
      this.roundPhrase = this.phrases[this.round];

      this.progressBar += 25;
      
      window.alert("Tradução correta!");
    }
    else {

      window.alert("Tradução incorreta!");
    }
  }
}
