import react from 'react'
import {Link,useParams } from 'react-router-dom'
import "./pagination.css"
import right from "../../images/right.svg";
import left from "../../images/left.svg";
const Pagination = ()=>{
    const page = useParams();
    const currentPage = parseInt(page.id||1);
    return(
        <div className="pagination">
            <div className="number">
                {currentPage} from 10
            </div>
            <div className="pagi">     
            <Link to={`/page/${currentPage -1 }`} className="prev" disabled={currentPage ===1}>
                <img src={left}/>
            </Link>

            {
                [...Array(10)].map((_,index)=>(
                    <Link
                    key={index+1}
                    to={`/page/${index+1}`}
                    className={currentPage === index +1 ? 'active':''}
                    >
                        {index+1}
                    </Link>
                ))}
            <Link to ={`/page/${currentPage + 1}`} className = "next" disabled={currentPage === 10}>
                <img src={right}/>
            </Link>
            </div>
        </div>
    );
}

export default Pagination;
