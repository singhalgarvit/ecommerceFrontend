import './nav.css'
import logo from './images/logo_shopy.png'
import logo2 from './images/Screenshot_2023-11-07_001601-removebg-preview.png'

function Nav(){
    return(
        <nav>
            <ul>
                <li><img src={logo2} alt="LOGO" className='img'/></li>
                <li className='listItems'>HOME</li>
                <li className='listItems'>CATEGORY</li>
                <li className='listItems'>PRODUCTS</li>
                <li className='listItems'>OFFERS</li>
            </ul>
        </nav>
    )
}

export default Nav;