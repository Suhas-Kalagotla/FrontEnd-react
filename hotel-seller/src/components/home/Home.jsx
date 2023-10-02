import react,{useState} from 'react'
import './home.css'
import Page from '../page/Page.jsx'
import Data from '../../Data.jsx'
import HotelCard from '../hotelCard/hotelCard.jsx'

const Home = () =>{
    const [cards,setCards] = useState(Data)   
    const places = [...new Set(Data.map((val) => val.location))]

    const filterCards = (loc)=>{
        const newCards = Data.filter((newval)=>newval.location===loc)
        setCards(newCards)
    }

    return (
      <div className="container">
        <div className="heading">
            <h1>Featured Listed Property</h1>
            <p>Real estate can be bought , sold , leased, or rented , and can be 
            valuable investment opportunity . The value of real estate can be...</p>
        </div>
        <div className="body">
          <Page
          name ={places}
          filterCards={filterCards}
          setCards={setCards}
          /> 
          <HotelCard item ={cards}/>
        </div>
     </div>
  );
}

export default Home; 
