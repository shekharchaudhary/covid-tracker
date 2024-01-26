import { render, fireEvent, waitFor, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import { Page } from './page.component';

const mockedRun = jest.fn();
jest.mock('../../hooks/useApi', () => ({
  useAPI: () => ({
    countryData: [
      {
        date: '2023-01-22',
        casesTotalValue: 1,
        testingTotalValue: 11,
        hospitalizedCurrentValue: 111,
        deathTotalValue: 1111,
      },
    ],
    statesData: { ny: 'New York', ca: 'California' },
    selectedStateData: {
      ny: {
        date: '2023-01-22',
        casesTotalValue: 1,
        hospitalizedCurrentValue: 111,
        deathTotalValue: 1111,
      },
    },
    isLoading: false,
    run: mockedRun,
  }),
}));

describe('Page', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });
  it('renders the Page component', () => {
    render(<Page />);
    expect(
      screen.getByText('Covid Data of State / Territory')
    ).toBeInTheDocument();
  });
  it('toggles the switch', () => {
    render(<Page />);
    const toggleSwitch = screen.getByRole('checkbox');
    fireEvent.click(toggleSwitch);
    expect(toggleSwitch).toBeChecked();
  });

  it('changes the selected state', async () => {
    render(<Page />);
    const dropdown = screen.getByRole('combobox');
    fireEvent.change(dropdown, { target: { value: 'ny' } });
    await waitFor(() => {
      expect(screen.getByText('ny')).toBeInTheDocument();
    });
  });
});
