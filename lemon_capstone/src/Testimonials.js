import TestCard from "./TestCard";
import "./Testimonials.css";

const testimonials = [
    {
        avatar_letter: "C",
        name: "Cindy",
        review: "I love this place! The food is amazing and the service is great. I would definitely recommend it to anyone who is looking for a good place to eat.",
    },
    {
        avatar_letter: "L",
        name:
            "Leonardo",
        review: "I ordered the Lemon dessert and it was amazing. Definitely coming back.",
        },
        {
        avatar_letter: "T",
        name:
            "Tina",
        review: "Healthy, delicious, cheap and fast. What more could you ask for?",
        },
    
    ];
const Testimonials = () => {
    return (
        <section className="testimonials">
            <section className="testimonials_top">
                <h1 className="testimonials_title">Testimonials</h1>
            </section>
            <section className="testimonials_bottom">
                {testimonials.map((t) => (
                    <TestCard 
                        key={t.name}
                        avatar_letter={t.avatar_letter}
                        name={t.name}
                        review={t.review}
                    />
                ))}
            </section>
                        
        </section>
    )
}


export default Testimonials;