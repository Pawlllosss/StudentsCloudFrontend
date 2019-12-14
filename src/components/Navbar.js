import React from 'react';
import {Link} from "react-router-dom";
import {AppBar, List, ListItem, ListItemText, Toolbar, Typography} from '@material-ui/core';
import {Book, People} from '@material-ui/icons'
import {COURSES_VIEW_PATH, STUDENTS_VIEW_PATH} from "../routing/RouteConstants";

class Navbar extends React.Component {

    navbarLinks() {
        let links = [
            this.createListItem('Courses', COURSES_VIEW_PATH, Book),
            this.createListItem('Students', STUDENTS_VIEW_PATH, People)
        ];

        return links;
    }

    createListItem(name, path, Icon) {
        return (
            <ListItemText key={name} inset>
                <Typography color='inherit' variant='title' component={Link} to={path}>
                    {name}  <Icon />
                </Typography>
            </ListItemText>
        );
    }

    render() {
        return (
            <div className='navbar'>
                <AppBar color='primary' position='static'>
                    <Toolbar>
                        <Typography variant="title" color="inherit">StudentsApp</Typography>
                        <List component='nav'>
                            <ListItem key='nav' component='div'>
                                {this.navbarLinks()}
                            </ListItem>
                        </List>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Navbar;
