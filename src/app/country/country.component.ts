import {Component, Input, OnInit} from '@angular/core';
import {Country} from '../types';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {
  @Input()
  country: Country;

  constructor() { }

  ngOnInit() {
  }

}
