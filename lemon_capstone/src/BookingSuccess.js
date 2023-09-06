import "./BookingSuccess.css"

const BookingSuccess = (props) => {
    console.log(props);
    return (
        <article className="booking_success">
            <h1 className="booking_success_title">Booking Success!</h1>
            <p className="booking_success_text">Your booking has been confirmed! Head on down for the meal of your life.</p>
        </article>
    )
}

export default BookingSuccess