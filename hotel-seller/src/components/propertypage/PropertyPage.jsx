import React from 'react';
import { useParams } from 'react-router-dom';
import Data from '../../Data';
import location from '../../images/location.svg'
import heart from '../../images/heart.svg'   
import './propertypage.css';
const PropertyPage = () => {
  const { id } = useParams();
  const index = parseInt(id,10);
  const val = Data[index-1];

  if (!val) {
    return <div>Property not found</div>;
  }

  return (
        <div className ="card property">
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
  );
};

export default PropertyPage;
