import { Routes, Route } from 'react-router-dom';
import Hero from './Hero';
import Specials from './Specials';
import Testimonials from './Testimonials';
import Story from './Story';
import BookingPage from './BookingPage';

const Main = () => {
    return (
        <main>
                <Routes>
                <Route path="/" element= {<Hero />} />
                <Route path="/specials" element= {<Specials />} />
                <Route path="/testimonials" element = {<Testimonials />} />
                <Route path="/about" element = {<Story />} />
                </Routes>
                <Specials />
                <Testimonials />
                <Story />
                
                <br />
                <br />
                <br />

            </main>
    )
}

export default Main;