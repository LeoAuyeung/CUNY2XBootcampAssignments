import React, { Component } from 'react';

class Campuses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            campuses: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/Campuses')
            .then(res => res.json())
            .then(data => this.setState({ campuses: data }))
            .catch(err => console.log(err));
    }

    render() {
        const campusList = this.state.campuses.map(campus =>
            <div className="campuses-container">
                <img src={campus.imageUrl}/>
                <h1>Name: {campus.name}</h1>
                <p>Address: {campus.address}</p>
                <p>Description: {campus.description}</p>
            </div>    
        )

        return (
            <div id="campuses-form">
                {campusList}
            </div>
        );
    }
}

export default Campuses;