import dish1 from "./assets/greek salad.jpg";
import dish2 from "./assets/bruchetta.svg";
import dish3 from "./assets/lemon dessert.jpg";
import Card from "./Card";
import "./Specials.css";

const special_dishes = [
    {
      title: "Greek Salad",
      description:
        "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
      image_src: dish1,
      price: "$12.99"
    },
    {
        title: "Bruschetta",
        description:
          "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
        image_src: dish2,
        price: "$5.99",
      },
      {
        title: "Lemon Dessert",
        description:
          "This comes straight from grandma's recipe book. Every last ingredient has been sourced and is as authentic as can be imagined.",
        image_src: dish3,
        price: "$5.00",
      },
  
    ];
  

const Specials = () => {
    return (
        <section className="specials">
            <section className="specials_top">
                <h1 className="specials_title">Specials</h1>
                <button className="specials_button">Online Menu</button>
            </section>
            <section className="specials_bottom">
                {special_dishes.map((dish) => (
                    <Card 
                        key={dish.title}
                        title={dish.title}
                        description={dish.description}
                        image_src={dish.image_src}
                        price={dish.price}
                    />
                ))}
            </section>
                        
        </section>
    )
}

export default Specials;