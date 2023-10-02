import react from 'react'
import york1 from './images/newyork1.jpg'
import york2 from './images/newyork2.jpg'
import york3 from './images/newyork3.jpg'
import york4 from './images/newyork4.jpg'
import york5 from './images/newyork5.jpg'
import mumbai1 from './images/mumbai1.jpg'
import mumbai2 from './images/mumbai2.jpg'
import mumbai3 from './images/mumbai3.jpg'
import paris1 from './images/paris1.jpg'
import paris2 from './images/paris2.jpg'
import paris3 from './images/paris3.jpg'
import london1 from './images/london1.jpg'

const Data =[
    {
        id:1,
        image:york1,
        name:'Hotel Indigo',
        location:'New York',
        status:'For Rent',
        address:'lower east side',
        details:['3 rooms','4 bed','1bath','732 sft'],
        money:'$7500', 

    },
    {
        id:2,
        image:york2,
        name:'Holiday Inn Express',
        location:'New York',
        status:'For Rent',
        address:'Parker Rd',
        details:['3 rooms','4 bed','1bath','732 sft'],
        money:'$8,300',
    },
    {
        id:3,
        image:york3,
        name:'Marriott Marquis',
        location:'New York',
        status:'For Sale',
        address:'Parker Rd',
        money:'$7,500', 
        details:['3 rooms','2 bed','1bath','1000 sft'],
    }, 
    {
        id:4,
        image:york4,
        name:'Central Park',
        location:'New York',
        status:'For Rent',
        address:'lower east side',
        details:['3 rooms','2 bed','1bath','1000 sft'],
        money:'$9,000',
    },
    {
        id:5,
        image:york5,
        status:'For Rent',
        location:'New York',
        name:'Hyatt Grand',
        address:'lower east side',
        details:['3 rooms','2 bed','1bath','1000 sft'],
        money:'$7,500', 
    },  

    //
   {
        id:6,
        image:mumbai1,
        location:'Mumbai',
        name:'Ibis Vikhroli',
        status:'For Sale',
        address:'high court building',
        details:['3 rooms','4 bed','1bath','732 sft'],
        money:'$9,000',
    },  
    {
        id:7,
        image:mumbai2,
        location:'Mumbai',
        name:'The Royal Orchid',
        status:'For Rent',
        address:'high court building',
        details:['3 rooms','4 bed','1bath','732 sft'],
        money:'$7,500', 
    },  
    {   
        id:8,
        image:mumbai3,
        location:'Mumbai',
        name:'Airport inn residency',
        address:'Ambika Road',
        status:'For Rent',
        details:['3 rooms','4 bed','1bath','732 sft'],
        money:'$7,500', 
    },   

    
   //
    {
        id:9,
        image:paris1,
        address:'159 rue de crimee',
        name:"St Christopher's",
        details:['2 rooms','3 bed','2 bath','843 sft'],
        money:'$8,400',
        status:'For Rent',
        location:'Paris',
    },
    {
        id:10,
        image:paris2,
        address:'108 rue Saint-lazare',
        name:"Hilton Paris Opera",
        details:['2 rooms','3 bed','2 bath','843 sft'],
        money:'$8,400',
        status:'For Rent',
        location:'Paris',
    },
    {
        id:11,
        image:paris3,
        address:'61 Quai de Grenelle',
        name:"Novotel Pari",
        details:['3 rooms','3 bed','1 bath','966 sft'],
        money:'$10,400',
        status:'For Sale',
        location:'Paris',
    },
    //
    {
        id:12,
        image:london1,
        address:'1 waterview dr',
        name:"InterContinental London",
        details:['4 rooms','3 bed','1 bath','1200 sft'],
        money:'$9,400',
        status:'For Sale',
        location:'London',
    }
]


export default Data; 
