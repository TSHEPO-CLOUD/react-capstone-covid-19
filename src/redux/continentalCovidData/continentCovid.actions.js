import axios from 'axios';
import { getContinent } from '../covidDataAPI';
import {
  REQUEST_COVID_DATA,
  REQUEST_COVID_DATA_SUCCESS,
  ERROR_REQUESTING_COVID_DATA,
} from './continentCovid.types';