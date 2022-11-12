import React from "react";
import './Carausal.css'
const Carausal = () =>{
    return(
        <React.Fragment>
            <div id="carausal">
    <div id="carouselExampleDark" class="carousel carousel-dark slide" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
          aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="10000">
          <img className="carausalimg" src="./Assets/cr-mencoll1.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption ">
            <button type="button" class="btn btn-primary">SHOP NOW</button>
            <h3>MEN'S COLLECTION</h3>
            <p>Explore And Shop our Exclusive Men's Collection.</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img className="carausalimg" src="./Assets/crwomencoll-1.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption ">
            <button type="button" class="btn btn-dark">SHOP NOW</button>
            <h3>WOMEN'S COLLECTION</h3>
            <p>Explore And Shop our Exclusive Women's Collection.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img className="carausalimg" src="./Assets/crnewarr3.jpg" class="d-block w-100" alt="..."/>
          <div class="carousel-caption ">
            <button type="button" class="btn btn-dark">SHOP NOW</button>
            <h3>NEW ARRIVAL'S</h3>
            <p>Some representative placeholder content for the third slide.</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  </div>
        </React.Fragment>
    )
}
export default Carausal