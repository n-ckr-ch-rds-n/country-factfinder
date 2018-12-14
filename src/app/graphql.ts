import gql from 'graphql-tag';
import {Country} from './types';

export const ALL_COUNTRIES_QUERY = gql`
  query AllCountriesQuery {
    countries {
    continent {
      name
    }
    name
    emoji
    currency
    languages{
      name
    }
  }
 }
`;

export interface AllCountriesQueryResponse {
  countries: Country[];
}
