import react,{useState} from 'react'
import './page.css'
import Data from '../../Data.jsx'

const Page = ({name,filterCards,setCards}) =>{
    const [activeBtn , setActiveBtn] = useState(0);

    const handleBtnClick = (index,name)=>{
        setActiveBtn(index);
        filterCards(name);
    };

    const handleView =()=>{
        setCards(Data);
        setActiveBtn(null); 
    }

    return (
        <div className='pageContainer'>
            <div className="places">
                {
                name.map((n,index)=>(

                <button key={index} 
                    className={`navButton ${index === activeBtn ? 'active' : ''}`}
                    onClick={() => handleBtnClick(index,n)} >
                    {n}</button>
                    ))
                }
            </div>
            <div className="view">
                <button className={`viewAll ${activeBtn ===null ? 'active':''}`}
                onClick={() => handleView()}>
                View all 
                </button>
            </div>
        </div>
    )
}

export default Page ; 
