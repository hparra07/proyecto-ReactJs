import { NavLink } from "react-router-dom"
import ItemCount from "../ItemCount/ItemCount.js"
import './Item.css'

const Item = (props) => {
    return (
        <div>
            <div class="portfolio-menu mt-2 mb-4"></div>
            <div className='portfolio-item row'>
                <div className='item selfie'>
                    <ul className='row-cols-8 orden'>
                        <li key={props.item.id}><NavLink className='card-link' to={'/producto/' + props.item.nombre}>
                        <img className='carta' src={props.item.imagen} alt='vegetal' width='200px' height='150px'>
                        </img></NavLink>
                            <figcaption><NavLink className='card-link' to={'/producto/' + props.item.nombre}>{props.item.nombre}</NavLink></figcaption>
                            <small className='text-muted' style={{fontSize:'15px'}}>${props.item.precio}.00</small>
                            <div className='abajo'>
                                <ItemCount/>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Item