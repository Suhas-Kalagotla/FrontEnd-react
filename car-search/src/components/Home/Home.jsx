import react ,{useState,useEffect} from 'react' 
import {Link, useParams} from 'react-router-dom'
import Data from "../../Data.json"
import SearchBar from "../searchBar/SearchBar.jsx"
import Card from "../card/Card.jsx"
import Pagination from "../pagination/Pagination.jsx"
import "./home.css"

const cardsPage = 6; 
const totalPages = Math.ceil(Data.length / cardsPage);

const Home = () =>{
    const [filteredData , setFilteredData]  = useState([]);
    const [word, setWord] = useState("");
    
    const page = useParams();
    const currentPage = parseInt(page.id||1);

    
    const handleWordChange = (word)=>{
        setWord(word);
    }

    const handleFilterChange = (filteredData)=>{
        setFilteredData(filteredData);
    }

    
    useEffect(()=>{
        window.history.replaceState(null,null,`/page/${currentPage}`);
    },[currentPage]);

    const startIndex = (currentPage -1) * cardsPage;
    const endIndex = startIndex + cardsPage;
    const visibleData = (word !=="") ? filteredData.slice(startIndex,endIndex) :Data.slice(startIndex,endIndex);

    return(
        <div className="homeContainer">
            <SearchBar placeholder="Enter the car name" data={Data} 
            onFilterChange={handleFilterChange} onSearchWord={handleWordChange} searchWord={word}/>
            {
                visibleData.length > 0 ?
            <Card data={visibleData}/>
            : <p class="centerMsg">No Cars are Available</p>
            }
            <Pagination/>
        </div>


    )
}
 
export default Home; 
