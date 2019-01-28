import React, { Component } from 'react';
import axios from 'axios';

//Using a Stateless Functional Component instead of an addition Class Component
const ZipContainer = props => {
    return (
        <div>
            <p>{props.data}</p>
        </div>
    );
}

class CitySearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: "",
            data: []
        };
    }

    handleChange = (event) => {
        this.setState({
            city: event.target.value
        });
    }

    handleClick = () => {
        this.fetchCitySearchData();
        this.setState({ city: "", })
    }

    fetchCitySearchData() {
        let url = "http://ctp-zip-api.herokuapp.com/city/" + this.state.city.toUpperCase();
        axios.get(url)
            .then(response => {
                var result = response.data.map(x => x);
                this.setState({data: result});
            }).catch(err => { console.log(err); });
    }

    render() {
        var citysearch = this.state.data.map((citydata) =>
            <ZipContainer data={citydata} key={citydata}/>
        );
        return (
            <div className="citysearch-container">
                <p>Enter a city name:&nbsp;</p>
                <input type="text" value={this.state.city} onChange={this.handleChange}></input>
                <br></br>
                <button className="buttons-coll custom-btn btn-11" onClick={this.handleClick}>
                    Submit
                </button>
                <ul className="citysearch">{citysearch}</ul>
            </div>
        )
    }
}

export default CitySearch;