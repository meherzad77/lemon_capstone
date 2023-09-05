import "./TestCard.css"
const TestCard = ({ avatar_letter, name, review }) => {
    
    return (
        <article className="test_card">
            <article className="test_card_top">
                <h3 className="test_card_avatar">{avatar_letter}</h3>
                <p className="test_card_name">{name}</p>
            </article>
            <article className="test_card_bottom">
                <p>"{review}"</p>
            </article>
        </article>
    );
    }

export default TestCard;