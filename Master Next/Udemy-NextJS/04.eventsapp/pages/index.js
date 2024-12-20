
import { getFeaturedEvents } from '../dummy-data';
import EventList from '../components/events/event-list';

function Home () {

    const featuredEvents = getFeaturedEvents();

    return(
            <div>
                <EventList 
                items={featuredEvents}>                    
                </EventList>
            </div>
    );
}

export default Home;