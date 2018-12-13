import { Component, OnInit } from '@angular/core';
import {Country} from '../types';
import {Apollo} from 'apollo-angular';
import {ALL_COUNTRIES_QUERY, AllCountriesQueryResponse} from '../graphql';

interface Response {
  countries: Country[];
}

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  allCountries: Country[];
  loading = true;

  constructor(private apollo: Apollo) { }

  ngOnInit() {
    this.apollo.watchQuery<Response>({
      query: ALL_COUNTRIES_QUERY,
    }).valueChanges.subscribe((response) => {
      console.log(response.data.countries);
      this.allCountries = response.data.countries;
    });
  }

}
