import "./Hero.css"
import hero_image from "./assets/restauranfood.jpg"
const Hero = () => {
    return (
        <section className="hero">
            <section className="hero_left">
                <h1 className="hero_title">Little Lemon</h1>
                <h3 className="hero_subtitle">Chicago</h3>
                <p className="hero_text">Lemonville's foremost lemon-themed restaurant. We use only lemons. No limes. Ever.</p>
                <button className="hero_button">Reserve a Table</button>
            </section>
            <section className="hero_right">
                <img src={hero_image} alt="restaurant food" className="hero_image"/>            
            </section>
        </section>
    )
}

export default Hero;