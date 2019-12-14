import {ListItem, ListItemText} from "@material-ui/core";
import React from "react";

const CourseAttendeeNode = (props) => {

    const [firstName, setFirstName] = React.useState(props.attendee.firstName);
    const [lastName, setLastName] = React.useState(props.attendee.lastName);

    return (
        <ListItem key={props.attendee.id}>
            <ListItemText
                primary={firstName + " " + lastName}
            />
        </ListItem>
    );
};

export default CourseAttendeeNode;

