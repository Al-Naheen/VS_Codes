import Axios from 'axios'
import React from 'react'

class CountryList_Get extends React.Component {
    constructor() {
        super()
        this.state = {
            countries: [],
        }
    }

    // Component-LifeCycle
    componentDidMount() {
        Axios.get('https://restcountries.eu/rest/v2/all')
            .then((result) => {
                this.setState({ countries: result.data })
                console.log(result);
                console.log(result.data);
                console.log(result.status);
            }).catch((err) => {
                console.log(err);
            });
    }

    render() {
        return (
            <div>
                <h1>All Countries</h1>

                <select>
                    {this.state.countries.map(country => {
                        return <option>{country.name}</option>
                    })}
                </select>

            </div>
        )
    }
}

export default CountryList_Get