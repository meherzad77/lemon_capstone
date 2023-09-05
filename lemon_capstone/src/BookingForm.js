import { useState } from 'react';
import './BookingForm.css';
import {useReducer} from 'react';

const BookingForm = (props) => {
    console.log(props);
    const {availableTimesReducer, dispatch} = props;
    const availableTimes = (typeof availableTimesReducer==='function') ? availableTimesReducer() : availableTimesReducer;
    


    const [date, setDate] = useState(new Date().toISOString().slice(0, 10));
    const [time, setTime] = useState('');
    const [guests, setGuests] = useState('');
    const [occasion, setOccasion] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(date, time, guests, occasion);
    }

    return (
        <section>
            <form className="booking_form" onSubmit={handleSubmit}>
                <label htmlFor="res-date">Choose date</label>
                <input type="date" id="res-date" 
                    value={date} onChange={(e) => 
                        {
                            setDate(e.target.value)
                            dispatch({ type: 'date_change', payload: e.target.value });
                            console.log('Date changed to ', e.target.value)
                        }
                    
                    }                    
                />
                <label htmlFor="res-time">Choose time</label>
                <select id="res-time" data-testid="res-time" 
                    value={time} onChange={(e) => setTime(e.target.value)} 
                >
                    {availableTimes.map((time) => (
                        <option key={time}>{time}</option>
                    ))}
                </select>
                <label htmlFor="guests">Number of guests</label>
                <input type="number" placeholder="1" min="1" max="10" id="guests"
                    value={guests} onChange={(e) => setGuests(e.target.value)}                
                />
                <label htmlFor="occasion">Occasion</label>
                <select id="occasion"
                    value={occasion} onChange={(e) => setOccasion(e.target.value)}
                >
                    <option>Birthday</option>
                    <option>Anniversary</option>
                </select>
                <input type="submit" className="booking_button" value="Make Your reservation"
                    onSubmit={handleSubmit}
                />
            </form>            
        </section>
    )
}

export default BookingForm;
