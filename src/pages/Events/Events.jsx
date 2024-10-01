import "./Events.css"
import Header from '../../components/Header/Header';
import Footer from "../../components/Footer/Footer";
import EventCard from "../../components/EventCard/EventCard";

function Events() {

    return (
        <>
            <div className='events-container'>

                <Header></Header>
                <div className='events-card-container'>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                    <EventCard></EventCard>
                </div>
                <Footer></Footer>
            </div>

        </>
    )
}

export default Events;
