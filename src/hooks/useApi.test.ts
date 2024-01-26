import { renderHook, act } from '@testing-library/react';
import { useAPI, parseCovidData } from './useApi';
import fetchMock from 'jest-fetch-mock';
import '@testing-library/jest-dom';

fetchMock.enableMocks();

describe('useAPI Hook', () => {
  beforeEach(() => {
    fetchMock.resetMocks();
  });

  it('fetches country data successfully', async () => {
    const mockCountryData = [
      {
        date: '2021-03-07',
        states: 56,
        cases: {
          total: {
            value: 28756489,
          },
        },
        testing: {
          total: {
            value: 363825123,
          },
        },
        outcomes: {
          hospitalized: {
            currently: {
              value: 40199,
            },
          },
          death: {
            total: {
              value: 515151,
            },
          },
        },
      },
    ];

    fetchMock.mockResponseOnce(JSON.stringify({ data: mockCountryData }));

    const { result } = renderHook(() => useAPI());
    const abortController = new AbortController();
    const { signal } = abortController;

    await act(async () => {
      await result.current.run({ signal });
    });

    expect(fetchMock).toHaveBeenCalledWith(
      'https://api.covidtracking.com/v2/us/daily.json',
      { signal }
    );
    expect(result.current.countryData).toEqual(parseCovidData(mockCountryData));
    expect(result.current.isLoading).toBeFalsy();
  });

  it('handles network error', async () => {
    fetchMock.mockReject(new Error('Network error'));

    const { result } = renderHook(() => useAPI());

    act(() => {
      result.current.run();
    });

    expect(result.current.errorMessage).toBe('');
  });
});
