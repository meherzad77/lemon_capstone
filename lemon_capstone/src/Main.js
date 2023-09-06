import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import MainContent from './MainContent';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Story from './Story';
import BookingSuccess from './BookingSuccess';
import { useState } from 'react';
import {useReducer} from 'react';
import {fetchAPI, submitAPI} from './api.js';
import { useNavigate } from 'react-router-dom';


const Main = () => {
    const[availableTimesReducer, dispatch] = useReducer(updateTimes, initializeTimes);
    const navigate = useNavigate();

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

    function submitForm(formData) {
        console.log('submitForm called');
        console.log('formData is ', formData);
        const response = submitAPI(formData);
        console.log('response is ', response);
        if (response == true) {
            navigate('/booking_success');
        }
        else {
            /*alert the user that the reservation was not successful*/
            alert('Reservation was not successful. Please try again.');
        }
    }


    return (
                <Routes>
                <Route path="/" element= {<MainContent />} />
                <Route path="/specials" element= {<Specials />} />
                <Route path="/testimonials" element = {<Testimonials />} />
                <Route path="/about" element = {<Story />} />
                <Route path="/booking" element = {<BookingPage availableTimesReducer={availableTimesReducer} dispatch={dispatch} submitAPI={submitForm}/>} />
                <Route path="/booking_success" element = {<BookingSuccess />} />
                </Routes>

    )
}

export default Main;