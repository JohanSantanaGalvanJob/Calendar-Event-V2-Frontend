import { CiBookmark } from "react-icons/ci";
import './EventCard.css'


function EventCard() {

    const IMAGE_SOURCE_PLACEHOLDER = 'https://media.licdn.com/dms/image/C5612AQGbvv_Zj5JQ1w/article-cover_image-shrink_720_1280/0/1551108267663?e=2147483647&v=beta&t=0Q8tP_opTQTHswRBcgHlCOzSIc67crsHE61AGWLOS44'

    return (


            <div className='events-card'>

                <div className='events-card-image-container'>
                    <img src={IMAGE_SOURCE_PLACEHOLDER} alt='Test Image' className='events-card-image' ></img>
                    <CiBookmark size={25} />
                </div>
                <div className='events-card-content'>
                    <h2>Evento Prueba</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                        Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                        aliquip ex ea commodo consequat. MDN FRFNRIOERNF EFNOIFNEF</p>
                    <div className='events-card-content-label-container'>
                        <p className='events-card-content-label'>Las Palmas</p>
                        <p className='events-card-content-label'>Event Category</p>
                    </div>
                </div>
            </div>
    )
}

export default EventCard;
