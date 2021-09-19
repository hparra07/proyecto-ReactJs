import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink, Link } from 'react-router-dom'

const NavBar = () => {
    return(
        <nav className='navbar navbar-expand-md navbar-dark fixed' id='NavBar'>
            <Link className='navbar-brand' to='/'><img src='./assets/images/vegetales.png' alt='logo' height='70px' style={{marginLeft:'30px'}}>
            </img></Link>
            <button className='navbar-toggler' type='button' data-toggle='collapse'data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll lista'>
                    <li>
                        <NavLink to='/' activeClassName='navLink' className='Option'>INICIO</NavLink>
                    </li>
                    <li>
                        <NavLink to='/nosotros' activeClassName='navLink' className='Option'>NOSOTROS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/productos' activeClassName='navLink' className='Option'>PRODUCTOS</NavLink>
                    </li>
                    <li>
                        <NavLink to='/ayuda' activeClassName='navLink' className='Option'>AYUDA</NavLink>
                    </li>
                </ul>
            </div>
            <CartWidget/>
        </nav>  
    )
}

export default NavBar