import React from 'react';
import {ListItem, ListItemText} from "@material-ui/core";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction/ListItemSecondaryAction";
import StudentDeleteDialog from "./StudentDeleteDialog";

const StudentNode = (props) => {

    const [firstName, setFirstName] = React.useState(props.student.firstName);
    const [lastName, setLastName] = React.useState(props.student.lastName);

    return (
        <div key={props.student.id}>
            <ListItem >
                <ListItemText
                    primary={firstName + " " + lastName}
                />
                <ListItemSecondaryAction>
                    <StudentDeleteDialog student = {props.student} fetchStudents={props.fetchStudents} />
                    {/*<StudentEditDialog student = {props.student} fetchStudents={props.fetchStudents} />*/}
                </ListItemSecondaryAction>
            </ListItem>
        </div>
    );
};

export default StudentNode;