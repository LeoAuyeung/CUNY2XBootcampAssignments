import React, { Component } from 'react';
import axios from 'axios';
import DispZipResults from './DispZipResults'

class ZipSearch extends Component {
    constructor(props) {
        super(props);
        this.state = {
            zip: "",
            data: []
        };
    }

    handleChange = (event) => {
        this.setState({
            zip: event.target.value
        });
        console.log(this.state.zip);
    }

    handleClick = () => {
        this.fetchZipSearchData();
        this.setState({ zip: "", })
    }

    fetchZipSearchData() {
        let url = "http://ctp-zip-api.herokuapp.com/zip/" + this.state.zip;
        axios.get(url)
            .then(response => {
                var result = response.data.map(x => x);
                this.setState({data: result});
            }).catch(err => { console.log(err); });
    }

    render() {
        var zipsearch = this.state.data.map((zipdata) =>
            <DispZipResults data={zipdata} key={zipdata.RecordNumber} />
        );
        return (
            <div className="zipsearch-container">
                <p>Enter a zipcode:&nbsp;</p>
                <input type="text" value={this.state.zip} onChange={this.handleChange}></input>
                <br></br>
                <button className="buttons-coll custom-btn btn-11" onClick={this.handleClick}>
                    Submit
                </button>
                <ul className="zipsearch">{zipsearch}</ul>
            </div>
        )
    }
}

export default ZipSearch;