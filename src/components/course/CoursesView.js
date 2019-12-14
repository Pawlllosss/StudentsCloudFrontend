import React, {Fragment} from 'react';
import axios from 'axios';
import {List, Paper, Typography} from '@material-ui/core';
import CourseNode from "./CourseNode";
import {API_BASE_PATH, COURSE_API_PATH} from "../../api/ApiConstants";
import CourseCreateDialog from "./CourseCreateDialog";

class CoursesView extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            courses: []
        };
    }

    componentDidMount() {
        this.fetchCourses();
    }

    fetchCourses = () => {
        axios.get(API_BASE_PATH + COURSE_API_PATH)
            .then(response => response.data)
            .then(data => data._embedded !== undefined ? data._embedded.courseList : [])
            .then(courses => this.setState({courses: courses}));
    };

    getCourseNodes() {
        const courses = this.state.courses;
        const courseNodes = courses.map(course => (
            <CourseNode key={course.id + "node"} course={course} fetchCourses={this.fetchCourses} />
        ));
        return courseNodes;
    }

    render() {
        const courseNodes = this.getCourseNodes();

        return (
            <div className="AllCourses" style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                <div style={{width: "70%"}}>
                    <Fragment >
                        <Typography variant="h3" align="center" >Courses</Typography>
                        <CourseCreateDialog fetchCourses={this.fetchCourses} />
                        <Paper elevation={1}>
                            <List>{courseNodes}</List>
                        </Paper>
                    </Fragment>
                </div>
            </div>
        );
    }
}

export default CoursesView;
