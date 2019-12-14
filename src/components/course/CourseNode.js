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
        <ListItem key={props.course.id}>
            <ListItemText
                primary={name}
                secondary={description}
            />
            <ListItemSecondaryAction>
                <CourseDeleteDialog course={props.course} fetchCourses={props.fetchCourses}/>
                <CourseEditDialog course={props.course} fetchCourses={props.fetchCourses}/>
            </ListItemSecondaryAction>
            <CourseAttendees attendees = {props.course.courseAttendees} />
        </ListItem>

    );
};

export default CourseNode;