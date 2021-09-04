import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget.js'

const NavBar = (valor) => {
    return(
        <nav className='navbar navbar-expand-md navbar-dark fixed' id='NavBar'>
            <a className='navbar-brand' href='titulo'><img src='./assets/images/vegetales.png' alt='logo' height='40px' style={{marginLeft:'30px'}}></img>
            App ReactJs</a>
            <button className='navbar-toggler' type='button' data-toggle='collapse'data-target='#navbarCollapse' aria-controls='navbarCollapse' aria-expanded='false' aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>
            <div className='collapse navbar-collapse' id='navbarCollapse'>
                <ul className='navbar-nav mr-auto my-2 my-lg-0 navbar-nav-scroll lista'>
                    <li>
                        <a href='index.html'>INICIO</a>
                    </li>
                    <li>
                        <a href='index.html'>NOSOTROS</a>
                    </li>
                    <li>
                        <a href='index.html'>PRODUCTOS</a>
                    </li>
                    <li>
                        <a href='index.html'>AYUDA</a>
                    </li>
                </ul>
                <form className='d-flex formulario'>
                    <input className='form-control mr-2' type='search' placeholder='¿Qué estás buscando?' aria-label='Search'/>
                    <button className='btn btn-outline-success' type='submit'> Buscar</button>
                </form>
            </div>
            <CartWidget/>
        </nav>  
    )
}

export default NavBar