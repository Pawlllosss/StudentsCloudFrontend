import React, {Fragment} from 'react';
import axios from 'axios';
import {List, Paper, Typography} from '@material-ui/core';
import {API_BASE_PATH, STUDENT_API_PATH} from "../../api/ApiConstants";
import StudentNode from "./StudentNode";
import StudentCreateDialog from "./StudentCreateDialog";

class StudentsView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            students: []
        };
    }

    componentDidMount() {
        this.fetchStudents();
    }

    fetchStudents = () => {
        axios.get(API_BASE_PATH + STUDENT_API_PATH)
            .then(response => response.data)
            .then(data => data._embedded !== undefined ? data._embedded.studentList : [])
            .then(students => this.setState({students: students}));
    };

    getStudentNodes() {
        const students = this.state.students;
        const studentNodes = students.map(student => (
            <StudentNode key={student.id + "node"} student={student} fetchStudents = {this.fetchStudents} />
        ));

        return studentNodes;
    }

    render() {
        const studentNodes = this.getStudentNodes();

        return (
            <div className="AllStudents" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div style={{width: "70%"}}>
                    <Fragment >
                        <Typography variant="h3" align="center" >Students</Typography>
                        <StudentCreateDialog fetchStudents = {this.fetchStudents} />
                        <Paper elevation={1}>
                            <List>{studentNodes}</List>
                        </Paper>
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default StudentsView;
