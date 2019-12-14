import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import * as serviceWorker from './serviceWorker';
import {COURSES_VIEW_PATH, STUDENTS_VIEW_PATH} from "./routing/RouteConstants";
import {Route, BrowserRouter as Router} from "react-router-dom";
import Navbar from "./components/Navbar";
import CoursesView from "./components/course/CoursesView";
import StudentsView from "./components/student/StudentsView";

const routing = (
    <Router>
        <Navbar/>
        <Route exact path={COURSES_VIEW_PATH} component={CoursesView} />
        <Route exact path={STUDENTS_VIEW_PATH} component={StudentsView} />
    </Router>
);


ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
