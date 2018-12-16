import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../types';

@Component({
  selector: 'app-fact-window',
  templateUrl: './fact-window.component.html',
  styleUrls: ['./fact-window.component.css']
})
export class FactWindowComponent implements OnInit {
  @Input()
  selectedCountry: Country;

  constructor() { }

  ngOnInit() {
  }

}
