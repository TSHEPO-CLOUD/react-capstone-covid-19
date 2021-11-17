import axios from 'axios';
import { getCountry } from '../covidDataAPI';
import {
  REQUEST_COUNTRY_COVID_DATA,
  REQUEST_COUNTRY_COVID_DATA_SUCCESS,
  REQUEST_COUNTRY_COVID_DATA_FAILURE,
} from './countryCovid.types';

export const requestCountryCovidData = () => ({
 
});

export const requestCountryCovidDataSuccess = (payload) => ({
 
});

export const requestCountryCovidDataFailure = (error) => ({
 
});