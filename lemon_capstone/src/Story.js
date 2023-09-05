import "./Story.css"
import founder1 from './assets/Mario and Adrian A.jpg';
import founder2 from './assets/Mario and Adrian b.jpg';
const Story = () => {
    return (
        <section className="story">
            <section className="story_left">
                <h1 className="story_title">Little Lemon</h1>
                <h3 className="story_subtitle">Chicago</h3>
                <p className="story_text">Little Lemon is owned by two Italian brothers, Mario and Adrian, who moved to the United States to pursue their shared dream of owning a restaurant. To craft the menu, Mario relies on family recipes and his experience as a chef in Italy. Adrian does all the marketing for the restaurant and led the effort to expand the menu beyond classic Italian to incorporate additional cuisines from the Mediterranean region.</p>
            </section>
            <section className="story_right">
                <img src={founder1} alt="Mario and Adrian 1" className="founder_image"/>            
                <img src={founder2} alt="Mario and Adrian 2" className="founder_image"/>            
            </section>
        </section>
    )
}

export default Story;