import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'
import { NavLink, Link } from 'react-router-dom'
import { useEffect, useState } from 'react/cjs/react.development'

const categorias = [
    {id:'frutas', nombre:'Frutas'},
    {id:'verduras', nombre:'Verduras'},
    {id:'hierbas', nombre:'Hierbas'},
    {id:'otros', nombre:'Otros'}
]

const getCategorias = () =>{
    return new Promise ((resolve) =>{
        setTimeout(() => resolve(categorias), 2000)
    })
}
const NavBar = () => {
    const [categories, setCategorias] = useState([])
    useEffect(()=>{
        const options = getCategorias()
        options.then(option => {setCategorias(option)})
    },[])
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
                    <li className='dropdown'>
                        <NavLink to='/productos' className='nav-link dropdown-toggle Option' data-toggle='dropdown' role='button' aria-haspopup='true' aria-expanded='false' activeClassName='navLink' style={{color:'black'}}>PRODUCTOS</NavLink>
                        <div className='dropdown-menu' style={{backgroundColor:'#e7a977'}}>
                            {categories.map(option => <li><NavLink key={option.id} to={`/categoria/${option.id}`}>{option.nombre}</NavLink></li>)}
                        </div>
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