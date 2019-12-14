import React from 'react';
import axios from "axios";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    TextField
} from '@material-ui/core';
import {EditOutlined as EditIcon} from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton/IconButton";

const CourseEditDialog = (props) => {

    const originalFirstName = props.student.firstName;
    const originalLastName = props.student.lastName;

    const [isOpen, setIsOpen] = React.useState(false);
    const [firstName, setFirstName] = React.useState(originalFirstName);
    const [lastName, setLastName] = React.useState(originalLastName);

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleChange = (event, stateChangeFunction) => {
        stateChangeFunction(event.target.value);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.put(props.student._links.update.href, {firstName: firstName, lastName: lastName})
            .finally(() => props.fetchStudents());

        setIsOpen(false);
    };

    const divStyle = {display: 'inline'};

    return (
        <div style={divStyle}>
            <IconButton
                color="inherit"
                onClick={handleClickOpen}
            >
                <EditIcon />
            </IconButton>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Edit student</DialogTitle>
                <DialogContentText>
                    You are going to edit the following student: {originalFirstName + " " + originalLastName}.
                </DialogContentText>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        required={true}
                        value={firstName}
                        onChange={(event) => handleChange(event, setFirstName)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        required={true}
                        value={lastName}
                        onChange={(event) => handleChange(event, setLastName)}
                        fullWidth
                    />
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Submit
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default CourseEditDialog;