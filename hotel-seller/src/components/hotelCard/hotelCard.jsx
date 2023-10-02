import react,{useState} from 'react'
import './hotelcard.css'
    
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
                    <div key={index} className ="card">
                        <div className="img">
                            <img src={val.image}/>
                        </div>
                        <div className="name">
                            {val.name}
                        </div>
                        <div className="details">
                        </div>
                        <div className="footer">
                        </div>
                    </div>
                ))}
            </div>
                <button className="showMore" onClick={showMore}> Show More </button> 
        </div>
        </>
    )
}

export default HotelCard; 

