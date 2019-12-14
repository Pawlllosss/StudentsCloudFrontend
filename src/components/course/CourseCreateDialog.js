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
import {API_BASE_PATH, COURSE_API_PATH} from "../../api/ApiConstants";

const CourseCreateDialog = (props) => {

    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState("");
    const [description, setDescription] = React.useState("");

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
        axios.post(API_BASE_PATH + COURSE_API_PATH, {name: name, description: description})
            .finally(() => props.fetchCourses());
        setIsOpen(false);
    };

    const divStyle = {display: 'inline'};

    return (
        <div style={divStyle}>
            <Button color="primary" onClick={handleClickOpen} endIcon={<AddIcon />}>
                Add course
            </Button>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Create course</DialogTitle>
                <DialogContentText>
                    You are going to create a new course.
                </DialogContentText>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin="dense"
                        id="name"
                        label="Name"
                        type="text"
                        required={true}
                        value={name}
                        onChange={(event) => handleChange(event, setName)}
                        fullWidth
                    />
                    <TextField
                        margin="dense"
                        id="description"
                        label="Description"
                        type="text"
                        required={true}
                        value={description}
                        onChange={(event) => handleChange(event, setDescription)}
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

export default CourseCreateDialog;