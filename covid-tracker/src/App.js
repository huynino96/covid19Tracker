import React, { useEffect, useMemo } from 'react';
import { sortBy } from 'lodash';
import CountrySelector from './components/CountrySelector';
import { getCountries, getReportByCountry } from './utils/api';
import Summary from './components/Summary';
import Highlight from './components/Hightlight/index';
import { Container, Typography } from '@material-ui/core';
import '@fontsource/roboto';
import moment from 'moment';
import 'moment/locale/en-in';

moment.locale('en-in');

const App = () => {
  const [countries, setCountries] = React.useState([]);
  const [selectedCountryId, setSelectedCountryId] = React.useState('');
  const [report, setReport] = React.useState([]);

  useEffect(() => {
    getCountries().then((res) => {
      const { data } = res;
      const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectedCountryId('vn');
    });
  }, []);

  const handleOnChange = React.useCallback((e) => {
    setSelectedCountryId(e.target.value);
  }, []);

  useEffect(() => {
    if (selectedCountryId) {
      const selectedCountry = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(selectedCountry.Slug).then((res) => {
        console.log('getReportByCountry', { res });
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);

  const summary = useMemo(() => {
    if (report && report.length) {
      const latestData = report[report.length - 1];
      return [
        {
          title: 'Infected',
          count: latestData.Confirmed,
          type: 'confirmed',
        },
        {
          title: 'Recovered',
          count: latestData.Recovered,
          type: 'recovered',
        },
        {
          title: 'Death',
          count: latestData.Deaths,
          type: 'death',
        },
      ];
    }
    return [];
  }, [report]);

  return (
    <div>
      <Container style={{ marginTop: 20 }}>
        <Typography variant='h2' component='h2'>
          Covid-19 Data
        </Typography>
        <Typography>Updated At: {moment().format('LLL')}</Typography>
        <CountrySelector
          handleOnChange={handleOnChange}
          countries={countries}
          value={selectedCountryId}
        />
        <Highlight summary={summary} />
        <Summary countryId={selectedCountryId} report={report} />
      </Container>
    </div>
  );
};

export default App;
