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
import {AddOutlined as AddIcon} from "@material-ui/icons";
import {API_BASE_PATH, COURSE_API_PATH, STUDENT_API_PATH} from "../../api/ApiConstants";

const StudentCreateDialog = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [firstName, setFirstName] = React.useState("");
    const [lastName, setLastName] = React.useState("");

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
        axios.post(API_BASE_PATH + STUDENT_API_PATH, {firstName: firstName, lastName: lastName})
            .finally(() => props.fetchStudents());
        setIsOpen(false);
    };

    const divStyle = {display: 'inline'};

    return (
        <div style={divStyle}>
            <Button color="primary" onClick={handleClickOpen} endIcon={<AddIcon />}>
                Add student
            </Button>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create student</DialogTitle>
                <DialogContentText>
                    You are going to create a new student.
                </DialogContentText>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="firstName"
                        label="First name"
                        type="text"
                        required={true}
                        value={firstName}
                        onChange={(event) => handleChange(event, setFirstName)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="lastName"
                        label="Last name"
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

export default StudentCreateDialog;