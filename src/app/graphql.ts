import gql from 'graphql-tag';
import {Country} from './types';

export const ALL_COUNTRIES_QUERY = gql`
  query AllCountriesQuery {
    countries {
      name
      emoji
    }
  }
`;

export interface AllCountriesQueryResponse {
  countries: Country[];
}
