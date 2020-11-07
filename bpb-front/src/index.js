import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AssignmentListComponent from './AssignmentListComponent';
import ComparisonComponent from './ComparisonComponent'
import CreateAssignmentComponent from './CreateAssignmentComponent'
import CreateSubmissionComponent from './CreateSubmissionComponent'
import HelpComponent from './HelpComponent'
import SubmissionListComponent from './SubmissionListComponent'
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter>
    <Route path="/" component={AssignmentListComponent}/>
    <Route path="/CreateAssignment" component={CreateAssignmentComponent}/>
    <Route path="/Assignment/:AssignmentID" component={SubmissionListComponent}/>
    <Route path="/CreateSubmission" component={CreateSubmissionComponent}/>
    <Route path="/Help" component={HelpComponent}/>
    <Route path="/CompareSubmissions" component={ComparisonComponent}/>
  </BrowserRouter>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
