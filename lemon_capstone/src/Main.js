import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import MainContent from './MainContent';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Story from './Story';
import { useState } from 'react';
import {useReducer} from 'react';
import {fetchAPI, submitAPI} from './api.js';


const Main = () => {
    const[availableTimesReducer, dispatch] = useReducer(updateTimes, initializeTimes);

    function updateTimes(state, action) {
        console.log('updateTimes called');
        console.log('state is ', state);
        console.log('action is ', action);

        /* construct a Date object from the date string */
        const date = new Date(action.payload);
        return fetchAPI(date);
    }

    function initializeTimes() {
        /*create initial state for availableTimes*/
        return fetchAPI(new Date());
    }


    return (
                <Routes>
                <Route path="/" element= {<MainContent />} />
                <Route path="/specials" element= {<Specials />} />
                <Route path="/testimonials" element = {<Testimonials />} />
                <Route path="/about" element = {<Story />} />
                <Route path="/booking" element = {<BookingPage availableTimesReducer={availableTimesReducer} dispatch={dispatch}/>} />
                </Routes>

    )
}

export default Main;