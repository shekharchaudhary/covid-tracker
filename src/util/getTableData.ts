interface ExtractedStateData {
  allDates: string[];
  allTests: number[];
  allCases: number[];
  allHospitalized: number[];
  allOutcomes: number[];
}
export interface CovidStateData {
  date: string;
  casesTotalValue: number;
  testingTotalValue: number;
  hospitalizedCurrentValue: number;
  deathTotalValue: number;
}

export const getTableData = (
  countryData: CovidStateData[]
): ExtractedStateData => {
  return countryData.reduce<ExtractedStateData>(
    (accumulated, item) => {
      accumulated.allDates.push(item.date);
      accumulated.allTests.push(item.testingTotalValue);
      accumulated.allCases.push(item.casesTotalValue);
      accumulated.allHospitalized.push(item.hospitalizedCurrentValue);
      accumulated.allOutcomes.push(item.deathTotalValue);
      return accumulated;
    },
    {
      allDates: [],
      allTests: [],
      allCases: [],
      allHospitalized: [],
      allOutcomes: [],
    }
  );
};

export const getStateData = (data: any, state: any) => {
  return state in data
    ? getTableData(data[state])
    : {
        allDates: [],
        allTests: [],
        allCases: [],
        allHospitalized: [],
        allOutcomes: [],
      };
};
