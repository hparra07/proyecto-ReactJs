import "bootstrap/dist/css/bootstrap.min.css"
import './Footer.css'

const Footer = () => {
    return(
    <footer>
        <div className="container">
            <div className="row">
                <div className="col-md-2 mx-auto">
                    <h3 className="title mb-4 mt-3 font-bold">INFORMACIÓN</h3>
                    <ul className="listaFooter">
                        <li>correo@gmail.com</li>
                        <li>Teléfono 1234567890</li>
                        <li>Lun a Dom de 9 a 20</li>
                        <li>Bulnes 1400, CABA, Buenos Aires</li>
                    </ul>
                </div>
                <div className="col-md-2 mx-auto">
                    <h3 className="title mb-4 mt-3 font-bold">CONTÁCTANOS</h3>
                    <ul className="lista_ico">
                        <li><i className="fab fa-facebook fa-3x"></i></li>
                        <li><i className="fab fa-instagram fa-3x"></i></li>
                        <li><i className="fab fa-whatsapp fa-3x"></i></li>
                    </ul>
                </div>
                <div className="col-md-2 mx-auto">
                    <h3 className="title mb-4 mt-3 font-bold ">ACEPTAMOS</h3>
                    <ul className="lista_ico">
                        <li><i className="fab fa-cc-visa fa-3x"></i></li>
                        <li><i className="fab fa-cc-amex fa-3x"></i></li>
                        <li><i className="fab fa-cc-mastercard fa-3x"></i></li>
                    </ul>
                </div>
            </div>
        </div>
        <div id="derechos">
            <p>&copy;2021 All Rights Reserved&reg; Howard's Services & Co.</p>
        </div>
    </footer>
    )
}

export default Footer