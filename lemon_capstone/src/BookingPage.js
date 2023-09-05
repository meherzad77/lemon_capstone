import BookingForm from './BookingForm'
import './BookingPage.css'
const BookingPage = (props) => {
    const {availableTimesReducer, dispatch} = props;
    return (
        <article className="booking_page">
            <h1>Booking Page</h1>
            <BookingForm availableTimesReducer={availableTimesReducer} dispatch={dispatch}/>
        </article>
    )
}

export default BookingPage