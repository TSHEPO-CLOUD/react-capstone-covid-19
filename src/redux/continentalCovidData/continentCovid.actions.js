import axios from 'axios';
import { getContinent } from '../covidDataAPI';
import {
  REQUEST_COVID_DATA,
  REQUEST_COVID_DATA_SUCCESS,
  ERROR_REQUESTING_COVID_DATA,
} from './continentCovid.types';

export const requestCovidData = () => ({
 type: REQUEST_COVID_DATA,
});

export const errorRequestingCovidData = (error) => ({
 type: ERROR_REQUESTING_COVID_DATA,
 payload: error,
});