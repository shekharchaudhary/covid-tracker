import React, { useState, useEffect } from 'react';
import { Stack, Typography } from '@mui/material';
import { Switch, Form, Header, Chart, PieChart } from '../../components';
import { useAPI } from '../../hooks/useApi';
import { getTableData, getStateData } from '../../util';

import './page.css';

export const Page = () => {
  const [toggle, setToggle] = useState(false);
  const [selectedState, setSelectedState] = useState<string | null>(null);

  const {
    countryData,
    statesData,
    selectedStateData,
    isLoading,
    errorMessage,
    run,
  } = useAPI();

  const handleToggleSwitch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setToggle(!toggle);
    setSelectedState('');
    run({ isState: !toggle });
  };

  const handleOnChange = (
    event: React.SyntheticEvent<Element, Event>,
    value: string
  ) => {
    setSelectedState(value);
    run({ isState: true, selectedState: value });
  };
  const currentUSData = countryData[0];

  const { allDates, allTests, allCases, allHospitalized, allOutcomes } =
    getTableData(countryData);

  const selectedStateTableData = getStateData(selectedStateData, selectedState);

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;
    run({ signal });

    return () => {
      abortController.abort();
    };
  }, [run]);

  return (
    <Stack className='page-container'>
      <Header />
      <Typography
        variant='h6'
        fontWeight='700'
        textAlign='left'
        marginTop='50px'
      >
        Covid Data of State / Territory
      </Typography>

      <Stack
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        flexDirection='row'
        marginBottom='50px'
        gap='100px'
      >
        <Switch
          handleChange={handleToggleSwitch}
          checked={toggle}
          textBeforSwitch='All U.S Data by Date'
          textAfterSwitch='States / Territory Data'
        />
        <Form
          onChange={handleOnChange}
          options={Object.keys(statesData)}
          disabled={!toggle}
        />
      </Stack>
      {!errorMessage && <Stack>{errorMessage}</Stack>}

      {isLoading ? (
        'Loading...'
      ) : (
        <Stack>
          {!toggle ? (
            <Stack>
              <Typography marginBottom='10px' fontSize='24px' fontWeight='700'>
                {`Data by All State`}
              </Typography>
              <Chart
                covidDates={allDates}
                covidTests={allTests}
                covidCasses={allCases}
                covidOutcomes={allHospitalized}
                hospitalized={allOutcomes}
              />
            </Stack>
          ) : !selectedState || !toggle ? (
            <Stack alignSelf='center'>
              <Typography marginBottom='10px' fontSize='24px' fontWeight='700'>
                Current Covid Data AS of {currentUSData.date}
                <Stack>
                  <PieChart
                    casesTotalValue={currentUSData.casesTotalValue}
                    testingTotalValue={currentUSData.testingTotalValue}
                    hospitalizedCurrentValue={
                      currentUSData.hospitalizedCurrentValue
                    }
                    deathTotalValue={currentUSData.deathTotalValue}
                  />
                </Stack>
              </Typography>
            </Stack>
          ) : (
            <Stack>
              <Typography marginBottom='10px' fontSize='24px' fontWeight='700'>
                {selectedState && statesData[selectedState]}
              </Typography>
              <Chart
                covidDates={selectedStateTableData.allDates}
                covidTests={selectedStateTableData.allTests}
                covidCasses={selectedStateTableData.allCases}
                covidOutcomes={selectedStateTableData.allHospitalized}
                hospitalized={selectedStateTableData.allOutcomes}
              />
            </Stack>
          )}
        </Stack>
      )}
    </Stack>
  );
};
