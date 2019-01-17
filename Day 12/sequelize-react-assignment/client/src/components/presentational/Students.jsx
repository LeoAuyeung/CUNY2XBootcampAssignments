import React, { Component } from 'react';

class Students extends Component {
    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        fetch('http://localhost:8080/Students')
            .then(res => res.json())
            .then(data => this.setState({ students: data }))
            .catch(err => console.log(err));
    }

    render() {
        const studentList = this.state.students.map(student =>
            <div className="students-container">
                <img src={student.imageUrl}/>
                <h1>Name: {student.firstName} {student.lastName}</h1>
                <p>Email: {student.email}</p>
                <p>GPA: {student.gpa}</p>
            </div>    
        )

        return (
            <div id="students-form">
                {studentList}
            </div>
        );
    }
}

export default Students;