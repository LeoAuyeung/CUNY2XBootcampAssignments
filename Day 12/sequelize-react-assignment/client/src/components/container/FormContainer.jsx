import React, { Component } from 'react';
import Students from '../presentational/Students.jsx';
import Campuses from '../presentational/Campuses.jsx';

class FormContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCampuses: true
        };

        this.displayCampuses = this.displayCampuses.bind(this);
        this.displayStudents = this.displayStudents.bind(this);
    }

    displayCampuses() {
        this.setState({ isCampuses: true })
        console.log(this.state.isCampuses);
    }

    displayStudents() {
        this.setState({ isCampuses: false })
        console.log(this.state.isCampuses);
    }

    render() {
        return (
            <div id="article-form">
                <button onClick={this.displayCampuses}>Show Campuses</button>
                <button onClick={this.displayStudents}>Show Students</button>
                <h3>Displaying {this.state.isCampuses ? "campuses: " : "students: "}</h3>
                {this.state.isCampuses ? <Campuses/> : <Students/>}
            </div>
        );
    }
}

export default FormContainer;