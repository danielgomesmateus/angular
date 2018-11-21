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

  constructor() { }

  ngOnInit() {
  }

}
