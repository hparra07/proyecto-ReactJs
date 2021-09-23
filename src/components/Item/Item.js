import { NavLink } from "react-router-dom"
import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item'>
                <div className='item selfie'>
                    <ul className='row-cols-8 orden'>
                        <li key={props.item.id}><NavLink className='card-link' to={`/item/${props.item.id}`}>
                        <img className='carta' src={props.item.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                            <figcaption><NavLink className='card-link' to={`/item/${props.item.id}`}>{props.item.nombre} {props.item.descripcion}</NavLink></figcaption>
                            <small className='text-muted' style={{fontSize:'15px'}}>${props.item.precio}.00</small>
                            <div className='abajo'>
                                <div className='centrado'>
                                    <button className='btn btn-outline-success' type='submit'><NavLink className='card-link' to={`/item/${props.item.id}`}>Comprar</NavLink></button>
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