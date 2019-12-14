import React from 'react';
import axios from "axios";
import {ListItem, ListItemText} from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import {
    ExpandMore,
    ExpandLess
} from '@material-ui/icons';
import StudentDeleteDialog from "./StudentDeleteDialog";
import StudentEditDialog from "./StudentEditDialog";
import Collapse from "@material-ui/core/Collapse/Collapse";
import MenuItem from "@material-ui/core/MenuItem/MenuItem";
import Select from "@material-ui/core/Select/Select";
import InputLabel from "@material-ui/core/InputLabel/InputLabel";
import FormControl from "@material-ui/core/FormControl/FormControl";
import Grid from "@material-ui/core/Grid/Grid";
import {API_BASE_PATH, COURSE_API_PATH} from "../../api/ApiConstants";

class StudentNode extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            isStudentExpanded: false,
            isStudentAssignedCoursesExpanded: false,
            courses: [],
            assignedCourses: [],
            courseToRemove: {},
            student: props.student,
            fetchStudents: props.fetchStudents
        };
    }

    componentDidMount() {
        this.fetchAssignedCourses(this.state.student.id);
    }

    fetchAssignedCourses(id) {
        axios.get(API_BASE_PATH + COURSE_API_PATH + "/student/" + id)
            .then(response => response.data)
            .then(data => data._embedded !== undefined ? data._embedded.courseList : [])
            .then(assignedCourses => this.setState({assignedCourses: assignedCourses}));
    }

    toggleStudent = () => {
        this.setState({isStudentExpanded: !this.state.isStudentExpanded});
    };

    mapCoursesToMenuItems = (courses) => {
        return courses.map(course =>
            <MenuItem key={course.id} value={course}>{course.name}</MenuItem>
        );
    };

    render() {
        let student = this.state.student;

        return (
            <div key={student.id}>
                <ListItem button onClick={this.toggleStudent}>
                    <ListItemText
                        primary={student.firstName + " " + student.lastName}
                    />
                    <ListItemSecondaryAction>
                        <StudentDeleteDialog student={student} fetchStudents={this.state.fetchStudents}/>
                        <StudentEditDialog student={student} fetchStudents={this.state.fetchStudents}/>
                        {this.state.isStudentExpanded ? <ExpandLess/> : <ExpandMore/>}
                    </ListItemSecondaryAction>
                </ListItem>
                <Collapse in={this.state.isStudentExpanded} timeout="auto" unmountOnExit>
                    <Grid container spacing={2} justify="center" alignItems="center">
                        <Grid item>
                            <FormControl>
                                <InputLabel id="course-assigned-name">AssignedCourses</InputLabel>
                                <Select
                                    labelId="course-assigned-name-select-label"
                                    id="course-assigned-name-select"
                                    open={this.state.isStudentAssignedCoursesExpanded}
                                    onClose={() => this.setState({isStudentAssignedCoursesExpanded : false})}
                                    onOpen={() => this.setState({isStudentAssignedCoursesExpanded : true})}
                                    value={this.state.courseToRemove}
                                    onChange={event => this.setState({courseToRemove: event.target.value})}
                                >
                                    {this.mapCoursesToMenuItems(this.state.assignedCourses)}
                                </Select>
                            </FormControl>
                        </Grid>
                    </Grid>
                </Collapse>
            </div>
        );
    }
};

export default StudentNode;