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
import Link from "@material-ui/core/Link/Link";

const CourseEditDialog = (props) => {

    const originalName = props.course.name;
    const originalDescription = props.course.description;

    const [isOpen, setIsOpen] = React.useState(false);
    const [name, setName] = React.useState(originalName);
    const [description, setDescription] = React.useState(originalDescription);

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
        axios.put(props.course._links.update.href, {name: name, description: description})
            .finally(() => props.fetchCourses());

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
                <DialogTitle id="form-dialog-title">Edit course</DialogTitle>
                <DialogContentText>
                    You are going to edit the following course: {originalName}.
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

export default CourseEditDialog;