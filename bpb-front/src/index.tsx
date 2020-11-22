import React from 'react';
//import "font-awesome/css/font-awesome.min";
import ReactDOM from 'react-dom';
import './index.css';
import { BrowserRouter, Route } from 'react-router-dom';
import AssignmentListComponent from './AssignmentListComponent';
import ComparisonComponent from './ComparisonComponent';
import CreateAssignmentComponent from './CreateAssignmentComponent';
import CreateSubmissionComponent from './CreateSubmissionComponent';
import HelpComponent from './HelpComponent';
import SubmissionListComponent from './SubmissionListComponent';
import * as serviceWorker from './serviceWorker';
import NavbarComponent from './NavbarComponent';
import Assignment from './types/Assignment'
import { createStore, combineReducers } from 'redux';
import {store} from './store'
import { Provider } from 'react-redux';
import ComparisonReducer from './reducers/ComparisonReducer';
import SubmissionReducer from './reducers/SubmissionReducer';

//import "../node_modules/bootstrap/dist/css/bootstrap.min";
//require('bootstrap');

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <NavbarComponent />
      <Route exact path="/"><AssignmentListComponent assignments={
        [
          {_id:"01", name:"Mikayla", submissionIds:[]},
          {_id:"02", name:"Ture", submissionIds:[]}
        ]
      }/></Route>
      {/* <Route exact path="/"><AssignmentListComponent assignments={[]}/></Route> */}
      <Route path="/CreateAssignment" component={CreateAssignmentComponent}/>

      <Route exact path="/Submissions"><SubmissionListComponent store={store} submissions={
        [
          {_id:"01", name:"Mikayla", assignment:'Assignment1', files:[]},
          {_id:"02", name:"Will", assignment:'Assignment1', files:[]},
        ] 
      } compareEnabled={0}/></Route>
      {/* <Route path="/Assignment/:AssignmentID" component={SubmissionListComponent}/> */}
      <Route path="/CreateSubmission" component={CreateSubmissionComponent}/>
      <Route path="/Help" component={HelpComponent}/>
      <Route path="/CompareSubmissions" component={ComparisonComponent}/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
