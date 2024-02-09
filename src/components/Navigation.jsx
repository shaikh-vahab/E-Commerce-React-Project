import '../css/navigation.css'
import { NavLink } from 'react-router-dom'
// import Spinner from 'react-bootstrap/Spinner';

function Navigation() {
    return (
        <>
            <div className='Main-Navigation-div'>
                <div><img src="./public/Logo.PNG" className='NavLogo' /></div>
                <ul className="ul-Navigation-div">
                    <li> <NavLink className='NavLi' to='/' > Home</NavLink></li>
                    <li> <NavLink className='NavLi' to='/product' > Product</NavLink> </li>
                    <li><NavLink className='NavLi' to='/about' > About</NavLink></li>
                    <li> <NavLink className='NavLi' to='/contact' > Contactus</NavLink></li>
                    <li><NavLink className='NavLi' to='/Register'> Register + </NavLink></li>
                    <li><NavLink className='NavLi' to='/cart'><span className="bucket-icon"><i class="bi bi-cart-check"></i></span></NavLink></li>
                    <li> <NavLink className='NavLi' to='/profile'><span className="profile-icon"><i class="bi bi-person-lines-fill"> </i></span></NavLink></li>
                </ul> 
            </div>  


        </>
    )

}

export default Navigation;