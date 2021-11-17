import {
 REQUEST_COVID_DATA,
 REQUEST_COVID_DATA_SUCCESS,
 ERROR_REQUESTING_COVID_DATA,
} from './continentCovid.types';

const initialState = {
 isLoading: false,
 covidData: [],
 error: '',
};

const covidReducer = (state = initialState, action) => {
 switch (action.type) {
   case REQUEST_COVID_DATA:
     return {
       ...state,
       isLoading: true,
     };

     case REQUEST_COVID_DATA_SUCCESS:




      case ERROR_REQUESTING_COVID_DATA: