import "bootstrap/dist/css/bootstrap.min.css"

const Inicio = () => {
    return(
        <section className="text-center">
            <div id="carouselExampleCaptions" className="carousel slide" data-ride="carousel">
                <ol className="carousel-indicators">
                    <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
                    <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
                </ol>
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img src="../assets/images/verduras_cinco.jpg" alt="cover verduras" className="d-block w-100" ></img>
                    </div>
                    <div className="carousel-item">
                        <img src="../assets/images/verdu_tres.jpg" alt="cover verduras" className="d-block w-100"></img>
                    </div>
                    <div className="carousel-item">
                        <img src="../assets/images/verdu_cuatro.jpg" alt="cover verduras" className="d-block w-100"></img>
                    </div>
                </div>
                <a className="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
                    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                </a>
                <a className="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
                    <span className="carousel-control-next-icon" aria-hidden="true"></span>
                </a>
            </div>
        </section>
    )
}

export default Inicio