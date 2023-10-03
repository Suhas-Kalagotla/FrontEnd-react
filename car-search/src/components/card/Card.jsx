import react from 'react'
import heart from "../../images/heart.svg"
import './card.css'

const Card = ({data}) =>{
    return(
        <div className="cardContainer">
            { data.map((val,index)=>(
            <div key={index} className ="card">
            <div className="img">
                <img src={val.image}/>
            </div>
            <div className="cardBody">
            <div className="name">
                <p>{val.title}</p>
                <button >{val.start_production}</button>
            </div>
            <div className="details">
            </div>
            
            <div className="details">
                <p>4 People</p>
                <p>Hybrid</p>
                <p>8.2km/1-litre</p>
                <p>Automatic</p>
            </div>
            <hr/>
            <div className="money">
                <p>$620/month</p>
                <div className="like">
                    <div className="likeImg"><img src={heart}/></div>
                    <button>Rent now</button>
                </div>
            </div>
            </div>
        </div>
            ))}
        </div>
    );
}

export default Card; 
