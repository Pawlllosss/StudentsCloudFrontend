import React from 'react';
import {ListItem, ListItemText} from "@material-ui/core";
import CourseAttendees from "./CourseAttendees";
import CourseDeleteDialog from "./CourseDeleteDialog";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import CourseEditDialog from "./CourseEditDialog";

const CourseNode = (props) => {

    const [name, setName] = React.useState(props.course.name);
    const [description, setDescription] = React.useState(props.course.description);

    return (
        <div key={props.course.id}>
        <ListItem >
            <ListItemText
                primary={name}
                secondary={description}
            />
            <ListItemSecondaryAction>
                <CourseDeleteDialog course={props.course} fetchCourses={props.fetchCourses}/>
                <CourseEditDialog course={props.course} fetchCourses={props.fetchCourses}/>
            </ListItemSecondaryAction>
        </ListItem>
            {props.course.courseAttendees.length > 0 && <CourseAttendees attendees = {props.course.courseAttendees} /> }
        </div>
    );
};

export default CourseNode;