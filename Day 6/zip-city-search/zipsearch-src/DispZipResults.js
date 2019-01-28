import React, { Component } from 'react';

class DispZipResults extends Component {

    render() {
        var {
            Zipcode,
            City,
            State,
            Lat,
            Long,
            Country,
        } = this.props.data;
        return (
            <div>
                <li className={"displayzipresults" + Zipcode}>
                    <p>City: {City}</p>
                    <p>State: {State}</p>
                    <p>Latitude: {Lat}</p>
                    <p>Longitude: {Long}</p>
                    <p>Country: {Country}</p>
                </li>
                <br></br>
            </div>
        );
    }
}

export default DispZipResults;