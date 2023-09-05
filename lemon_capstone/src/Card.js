import "./Card.css"
const Card = ({ title, description, image_src, price }) => {
    
    return (
        <article className="specials_card">
            <img className="specials_card_image" src={image_src} alt={title} />
            <article className="specials_card_top">
                <h3 className="specials_card_title">{title}</h3>
                <p className="specials_card_price">{price}</p>
            </article>
            <article className="specials_card_bottom">
                <p>{description}</p>
                <p><b>Order a delivery</b></p>
            </article>
        </article>
    );
    }

export default Card;