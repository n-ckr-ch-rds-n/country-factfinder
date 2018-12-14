import { Component, OnInit } from '@angular/core';
import {Country} from '../types';
import {Apollo} from 'apollo-angular';
import {ALL_COUNTRIES_QUERY, AllCountriesQueryResponse} from '../graphql';

@Component({
  selector: 'app-country-list',
  templateUrl: './country-list.component.html',
  styleUrls: ['./country-list.component.css']
})
export class CountryListComponent implements OnInit {
  allCountries: Country[];
  selectedCountry: Country;
  loading = true;

  constructor(private apollo: Apollo) { }

  updateWindow(country: Country) {
    this.selectedCountry = country;
  }

  ngOnInit() {
    this.apollo.watchQuery<AllCountriesQueryResponse>({
      query: ALL_COUNTRIES_QUERY,
    }).valueChanges.subscribe((response) => {
      this.allCountries = response.data.countries;
      this.selectedCountry = response.data.countries[0];
      console.log(response.data);
      this.loading = false;
    });
  }

}
