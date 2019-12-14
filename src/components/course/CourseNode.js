import React from 'react';
import {ListItem, ListItemText} from "@material-ui/core";
import CourseAttendees from "./CourseAttendees";

const CourseNode = (props) => {

    const [name, setName] = React.useState(props.course.name);
    const [description, setDescription] = React.useState(props.course.description);

    return (
        <ListItem key={props.course.id}>
            <ListItemText
                primary={name}
                secondary={description}
            />
            <CourseAttendees attendees = {props.course.courseAttendees} />
        </ListItem>

    );
};

export default CourseNode;