import './NavBar.css'

const NavBar = () => {
    return(
        <nav className='NavBar'>
            <div>
                <a href='inicio.html'><img src='./vegetales.png' height='40px' alt='icono'></img></a>
            </div>
            <div>
                <ul className='lista'>
                    <li><a href='inicio.html'>INICIO</a></li>
                    <li><a href='nosotros.html'>NOSOTROS</a></li>
                    <li><a href='productos.html'>PRODUCTOS</a></li>
                    <li><a href='ayuda.html'>AYUDA</a></li>
                </ul>
            </div>
            <div className='NavDerecho'>
                <button className='button' type='submit'>INICIA SESIÓN</button>
                <button className='button' type='submit'>REGISTRATE</button>
                <input className='buscador' type='search' placeholder='¿Qué estás buscando?'></input>
                <button className='button' type='submit'>BUSCAR</button>
            </div>
        </nav> 
    )
}

export default NavBar