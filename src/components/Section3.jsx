import './section3.css'
import shoeImg1 from './images/shoe_01.jpg'
import shoeImg2 from './images/shoe_02.jpg'
import jeans1 from './images/jeans_01.jpg'
import jeans2 from './images/jeans_02.jpg'
import jeans3 from './images/jeans_03.jpg'
import jeans4 from './images/jeans_04.jpg'
import purse1 from './images/purse_01.jpg'
import purse2 from './images/purse_02.jpg'
import bracelet1 from './images/bracelet_01.jpg'
import bracelet2 from './images/bracelet_02.jpg'

function Item(props){
        return (
            <div className="item">
                <img src={props.src} alt="An image"/>
                <h2>{props.des}</h2>
                <p>{props.price}</p>
            </div>
        )
}

function Section3(){
    const itemArray=[
        { name:shoeImg1, des: "Black men shoe", price: "$10"},
        { name:shoeImg2, des: "yellow shoe" , price: "$8"},
        { name:jeans1, des: "dark brown jeans", price: "$13"},
        { name:jeans2, des: "blue denim jeans", price: "$15"},
        { name:jeans3, des: "Basic Gray Jeans", price: "$14"},
        { name:jeans4, des: "Blue Denim Shorts", price: "$15"},
        { name:purse1, des: "Light Brown Purse", price: "$20"},
        { name:purse2, des: "Bright Red Bag", price: "$22"},
        { name:bracelet1, des: "Anchor Bracelet" , price: "$5"},
        { name:bracelet2, des: "Boho Bangle Bracelet", price: "$17" }
    ];

    return (
        <div className='container3'>
            <h1>Featured Products</h1>
            <div className="hr"></div>
            <div className="items">
                {itemArray.map((imgSRC)=>(
                    <Item src={imgSRC.name} des={imgSRC.des} price={imgSRC.price}/>
                ))}
            </div>
        </div>
    )
}

export default Section3;