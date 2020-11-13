import React from 'react';
import {render, unmountComponentAtNode} from 'react-dom';
import { act } from "react-dom/test-utils";
import AssignmentListComponent from "../AssignmentListComponent";
import BrowserRouter from "react-router-dom";
import Route from "react-router-dom";
import { StaticRouter } from 'react-router'
import AssignmentListCard from '../AssignmentListCard';


describe("AssignmentListComponent tests:", () => {
    let container;

    beforeEach(() => {
        container = document.createElement('div');
        // container.appendChild(<BrowserRouter><Route path="/" /></BrowserRouter>)
        document.body.appendChild(container);

    })


    it('Should display no assignments if none exist', () =>{        

        act(() =>{
            render(<StaticRouter location='/' context={{}}><AssignmentListComponent assignments={[1,2,3]}/></StaticRouter>, container);  
        }); 

    it('Should display 3 assignments if 3 exist', () => {
        let container = document.createElement('div');
        document.body.appendChild(container);

        act(() =>{
            render(<AssignmentListComponent assignments={assignments=[1,2,3]}/>, container);
        });

    // it('Should display one assignments if one exists', () => {
    //     let container = document.createElement('div');
    //     document.body.appendChild(container);

    //     act(() =>{
    //         render(<BrowserRouter><Route path="/" component={<AssignmentListComponent assignments={[1]} /> }/></BrowserRouter>, container);
    //     });

    //     expect(container.getElementsByClassName('assignment-list-card').length).toBe(1);
    // });

    // it('Should display 3 assignments if 3 exist', () => {
    //     let container = document.createElement('div');
    //     document.body.appendChild(container);

    //     act(() =>{
    //         render(<BrowserRouter><Route path="/" component={<AssignmentListComponent assignments={[1,2,3]} /> }/></BrowserRouter>, container);
    //     });

    //     expect(container.getElementsByClassName('assignment-list-card').length).toBe(3);
    // });

    // it('Should show a link that directs user to the assignment creation page', () => {
    //     let container = document.createElement('div');
    //     document.body.appendChild(container);

    //     act(() =>{
    //         render(<BrowserRouter><Route path="/" component={<AssignmentListComponent assignments={[]} /> }/></BrowserRouter>, container);
    //     });
        
    //     //TODO
    //     expect(container.getElementsByClassName('new-assignment-btn')).toBe('LINK');
    // });

});