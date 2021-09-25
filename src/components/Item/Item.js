import { NavLink } from "react-router-dom"
import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item'>
                <div className='item selfie'>
                    <ul className='row-cols-8 orden'>
                        <li key={props.producto.id}><NavLink className='card-link' to={`/item/${props.producto.id}`}>
                        <img className='carta' src={props.producto.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                            <figcaption><NavLink className='card-link' to={`/item/${props.producto.id}`}>{props.producto.nombre} {props.producto.descripcion}</NavLink></figcaption>
                            <small className='text-muted' style={{fontSize:'15px'}}>${props.producto.precio}.00</small>
                            <div className='abajo'>
                                <div className='centrado'>
                                    <button className='btn btn-outline-success' type='submit'><NavLink className='card-link' to={`/item/${props.producto.id}`}>Comprar</NavLink></button>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Item