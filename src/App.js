import React from 'react';

// import Cards from './components/Cards/Cards';
// import Chart from './components/Chart/Chart';
// import CountryPicker from './components/CountryPicker/CountryPicker';

import {Cards, Chart, CountryPicker, Navbar, Feature, Fact} from './components';
import styles from './App.module.css';
import {fetchData} from './api/';

import coronaImage from './image/image.png'

class App extends React.Component {
    state = {
        data: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();

        this.setState({data: fetchedData});
    }

    handleCountryChange = async (country) => {
        const fetchedData = await fetchData(country);

        this.setState({data: fetchedData, country: country});
        
    }

    render(){
        const { data, country } = this.state;

        return(
            
            
                    
                <div className={styles.container}>
                {/* <Navbar/> */}
                <img className={styles.image} src={coronaImage} alt="COVID-19"/>
                
                <br/><br/>
                
                <br/>
                <Fact/>
                <br/>
                <Feature/>
                <br/><br/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <br/>
                <Cards data={data}/>
                
                <br/><br/>
                <Chart data={data} country={country}/>
                </div>
        
            
            
        )
    }
}

export default App;