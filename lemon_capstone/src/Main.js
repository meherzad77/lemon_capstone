import { Routes, Route } from 'react-router-dom';
import BookingPage from './BookingPage';
import MainContent from './MainContent';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Story from './Story';
import { useState } from 'react';
import {useReducer} from 'react';


const Main = () => {
    const[availableTimesReducer, dispatch] = useReducer(updateTimes, initializeTimes);

    function updateTimes(state, action) {
        console.log('updateTimes called');
        console.log('state is ', state);
        console.log('action is ', action);

        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
    }

    function initializeTimes() {
        /*create initial state for availableTimes*/
        return ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'];
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