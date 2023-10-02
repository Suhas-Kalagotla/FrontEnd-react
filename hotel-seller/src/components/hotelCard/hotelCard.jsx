import react,{useState} from 'react'
import './hotelcard.css'
import location from '../../images/location.svg'
import heart from '../../images/heart.svg'    
import { Link } from 'react-router-dom'
const HotelCard = ({item}) => {
    const [visible,setVisible] = useState(6);
    const showMore =() =>{
        setVisible((prevValue) => prevValue +3); 
    };

    return(
        <>
            <div className ='cardContainer'>
            <div className='allCards'>
                {item.slice(0,visible).map((val,index) =>(
                    <Link key={index} to={`/property/${val.id}`}>
                    <div className ="card">
                        <div className="img">
                            <img src={val.image}/>
                        </div>
                        <div className="rent">{val.status}</div>
                        <div className="like"><img src={heart}/></div>
                        <div className="address">
                            <img src={location}/>
                            {val.address}
                        </div>
                        <div className="name">
                            {val.name}
                        </div>
                        <div className="details">
                            {
                                val.details.map((p,index)=>(
                                    <p>{p}</p>
                                ))
                            }
                        </div>
                        <div className="footer">
                            <p><span>{val.money}</span>/month</p>
                            <button>Read More</button>
                        </div>
                    </div>
                </Link>
                ))}
            </div>
                <button className="showMore" onClick={showMore}> Show More </button> 
        </div>

        </>
    )
}

export default HotelCard; 

