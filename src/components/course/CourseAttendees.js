import React from 'react';
import {List, Paper} from "@material-ui/core";
import CourseAttendeeNode from "./CourseAttendeeNode";

const CourseAttendees = (props) => {

    function getCourseAttendeeNodes() {
        const courseAttendees = props.attendees;
        return courseAttendees.map(attendee => <CourseAttendeeNode attendee={attendee.student}/>);
    }

    const studentNodes = getCourseAttendeeNodes();

    return (
        <Paper elevation={2}>
            <List>{studentNodes}</List>
        </Paper>

    );
};

export default CourseAttendees;