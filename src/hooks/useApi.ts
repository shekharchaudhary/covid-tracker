import { useReducer, useCallback } from 'react';
import {
  State,
  CovidCase,
  CovidData,
  StateNameData,
  StateData,
  Action,
} from '../types';

const initialState: State = {
  isLoading: true,
  countryData: [],
  statesData: {},
  selectedStateData: {},
  errorMessage: '',
};

const COUNTRY = 'COUNTRY';
const STATES = 'STATES';
const SELECTED_STATE = 'SELECTED_STATE';
const RESET_LOADING = 'RESET_LOADING';
const ERROR = 'ERROR';

export const parseCovidData = (data: CovidCase[]): CovidData[] => {
  return data.map(({ date, cases, testing, outcomes }) => {
    const casesTotalValue = cases?.total?.value || '';
    const testingTotalValue = testing?.total?.value || '';
    const hospitalizedCurrentValue =
      outcomes?.hospitalized?.currently?.value || '';
    const deathTotalValue = outcomes?.death?.total?.value || '';

    return {
      date,
      casesTotalValue,
      testingTotalValue,
      hospitalizedCurrentValue,
      deathTotalValue,
    };
  });
};

export const parseStatesNameData = (data: StateNameData[]): StateData => {
  return data.reduce(
    (accumulator, current) => ({
      ...accumulator,
      [current.state_code]: current.name,
    }),
    {}
  );
};

export const reducer = (state: State, action: Action): State => {
  const { type, responseData, selectedState, errorMessage } = action;

  switch (type) {
    case COUNTRY:
      return {
        ...state,
        isLoading: false,
        countryData: parseCovidData(responseData!.data as CovidCase[]),
      };
    case STATES:
      return {
        ...state,
        isLoading: false,
        statesData: parseStatesNameData(responseData!.data as StateNameData[]),
      };
    case SELECTED_STATE:
      return {
        ...state,
        isLoading: false,
        selectedStateData: {
          ...state.selectedStateData,
          [selectedState!]: parseCovidData(responseData!.data as CovidCase[]),
        },
      };
    case ERROR:
      return {
        ...state,
        errorMessage,
      };
    case RESET_LOADING:
      return {
        ...state,
        isLoading: true,
        errorMessage: '',
      };
    default:
      return state;
  }
};

export const useAPI = () => {
  const [
    { isLoading, countryData, statesData, selectedStateData, errorMessage },
    dispatch,
  ] = useReducer(reducer, initialState);

  const endpoint = 'https://api.covidtracking.com/v2';

  const run = useCallback(
    async ({
      isState = false,
      selectedState = '',
      signal = null,
    }: {
      isState?: boolean;
      selectedState?: string;
      signal?: AbortSignal | undefined | null;
    } = {}) => {
      let url: string | null = null;
      let type: string = '';

      if (isState && selectedState) {
        url =
          selectedState in selectedStateData
            ? null
            : `${endpoint}/states/${selectedState.toLowerCase()}/daily.json`;
        type = SELECTED_STATE;
      } else if (isState) {
        url =
          Object.keys(statesData).length > 0 ? null : `${endpoint}/states.json`;
        type = STATES;
      } else {
        url = countryData.length ? null : `${endpoint}/us/daily.json`;
        type = COUNTRY;
      }

      if (url === null) {
        return;
      }

      try {
        dispatch({ type: RESET_LOADING });
        const response = await fetch(url, { signal });
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const responseData = await response.json();
        dispatch({ type, responseData, selectedState });
      } catch (error) {
        if (error instanceof Error) {
          dispatch({ type: ERROR, errorMessage: error.message });
        }
      }
    },
    [countryData, statesData, selectedStateData]
  );

  return {
    isLoading,
    countryData,
    statesData,
    selectedStateData,
    errorMessage,
    run,
  };
};
