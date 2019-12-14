import React from 'react';
import axios from "axios";
import {
    Button,
    Dialog,
    DialogActions,
    DialogContent,
    DialogContentText,
    DialogTitle,
    IconButton,
} from '@material-ui/core';
import {DeleteOutlined as DeleteIcon} from "@material-ui/icons";

const CourseDeleteDialog = (props) => {

    const firstName = props.student.firstName;
    const lastName = props.student.lastName;

    const [isOpen, setIsOpen] = React.useState(false);

    const handleClickOpen = () => {
        setIsOpen(true);
    };

    const handleClose = () => {
        setIsOpen(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        axios.delete(props.student._links.delete.href)
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
                <DeleteIcon />
            </IconButton>
            <Dialog open={isOpen} onClose={handleClose} aria-labelledby="form-dialog-title">
                <DialogTitle id="form-dialog-title">Delete student</DialogTitle>
                <DialogContent>
                    <DialogContentText>
                        Are you sure you want to delete the following student: {firstName + " " + lastName}?
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleClose} color="primary">
                        Cancel
                    </Button>
                    <Button onClick={handleSubmit} color="primary">
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    )
};

export default CourseDeleteDialog;