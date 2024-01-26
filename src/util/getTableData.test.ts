import { getTableData, getStateData } from './getTableData';

describe('Data Processing Functions', () => {
  describe('getTableData', () => {
    it('should correctly process an array of CovidStateData', () => {
      const sampleData = [
        {
          date: '2023-01-01',
          casesTotalValue: 100,
          testingTotalValue: 200,
          hospitalizedCurrentValue: 10,
          deathTotalValue: 5,
        },
        {
          date: '2023-01-02',
          casesTotalValue: 150,
          testingTotalValue: 250,
          hospitalizedCurrentValue: 15,
          deathTotalValue: 10,
        },
      ];
      const expected = {
        allDates: ['2023-01-01', '2023-01-02'],
        allTests: [200, 250],
        allCases: [100, 150],
        allHospitalized: [10, 15],
        allOutcomes: [5, 10],
      };

      expect(getTableData(sampleData)).toEqual(expected);
    });
  });

  describe('getStateData', () => {
    it('should return processed data for a valid state', () => {
      const mockData = {
        State1: [
          {
            date: '2023-01-01',
            casesTotalValue: 100,
            testingTotalValue: 200,
            hospitalizedCurrentValue: 10,
            deathTotalValue: 5,
          },
        ],
      };
      const state = 'State1';
      const expected = {
        allDates: ['2023-01-01'],
        allTests: [200],
        allCases: [100],
        allHospitalized: [10],
        allOutcomes: [5],
      };

      expect(getStateData(mockData, state)).toEqual(expected);
    });

    it('should return empty data for an invalid state', () => {
      const mockData = {
        State1: [
          {
            date: '2023-01-01',
            casesTotalValue: 100,
            testingTotalValue: 200,
            hospitalizedCurrentValue: 10,
            deathTotalValue: 5,
          },
        ],
      };
      const state = 'State2';
      const expected = {
        allDates: [],
        allTests: [],
        allCases: [],
        allHospitalized: [],
        allOutcomes: [],
      };

      expect(getStateData(mockData, state)).toEqual(expected);
    });
  });
});
