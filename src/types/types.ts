export interface ApiParams {
  states?: string;
  isDaily?: boolean;
}

interface CalculatedData {
  change_from_prior_day: number;
  population_percent: number;
  seven_day_change_percent: number;
  seven_day_average?: number;
}

interface Cases {
  total: {
    calculated: CalculatedData;
    value: number;
  };
}

interface Outcomes {
  death: {
    total: {
      calculated: CalculatedData;
      value: number;
    };
  };
  hospitalized: {
    currently: {
      calculated: CalculatedData;
      value: number;
    };
    in_icu?: {
      currently: {
        calculated: CalculatedData;
        value: number;
      };
    };
  };
}

export interface Testing {
  total: {
    calculated: CalculatedData;
    value: number;
  };
}

export interface Data {
  data?: any;
  date?: any;
  cases: Cases;
  outcomes: Outcomes;
  testing: Testing;
}

export interface CovidCase {
  date: string;
  cases: {
    total: {
      value: number | null;
    };
  };
  testing: {
    total: {
      value: number | null;
    };
  };
  outcomes: {
    hospitalized: {
      currently: {
        value: number | null;
      };
    };
    death: {
      total: {
        value: number | null;
      };
    };
  };
}

export interface StateNameData {
  state_code: string;
  name: string;
}

export interface CovidData {
  date: string;
  casesTotalValue: number | string | any;
  testingTotalValue: number | string | any;
  hospitalizedCurrentValue: number | string | any;
  deathTotalValue: number | string | any;
}

export interface StateData {
  [key: string]: string;
}

export interface State {
  isLoading: boolean;
  countryData: CovidData[];
  statesData: StateData;
  selectedStateData: Record<string, CovidData[]>;
  errorMessage: string | null | undefined;
}

export interface Action {
  type: string;
  responseData?: {
    data: CovidCase[] | StateNameData[];
  };
  selectedState?: string;
  errorMessage?: string;
}

export interface SwitchProps {
  checked: boolean;
  label?: string;
  textBeforSwitch?: string;
  textAfterSwitch?: string;
  handleChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}
