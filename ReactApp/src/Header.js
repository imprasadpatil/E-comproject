import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

const Header = (props) => {
    return(
        <header>
    <nav class="navbar navbar-expand-lg bg-light ">
      <div class="container-fluid">
        <a class="navbar-brand" href="#"><img id="navbrandlogo" src="./Assets/logo.png" alt=""/> Prasad Patil</a>

        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarSupportedContent">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                MEN
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">SHIRT</a></li>
                <li><a class="dropdown-item" href="#">T-SHIRT</a></li>
                <li><a class="dropdown-item" href="#">HOODIES</a></li>
              </ul>
            </li>
            <li class="nav-item dropdown">
              <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown"
                aria-expanded="false">
                WOMEN
              </a>
              <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">T-SHIRT</a></li>
                <li><a class="dropdown-item" href="#">KURTIES</a></li>
                <li><a class="dropdown-item" href="#">HOODIES</a></li>
              </ul>
            </li>
          </ul>
          <span>
            <button type="button" class="btn btn-outline-secondary" id="changemode" onclick="changemode()"><i class="fa-regular fa-lightbulb"></i>Dark Mode<i class="fa-solid fa-repeat"></i></button>
            <button type="button" class="btn btn-outline-warning" onclick="geolocation() "><i class="fa-solid fa-cloud-sun-rain"></i>Wheather</button>
            <button type="button" class="btn btn-outline-secondary" id=""><a href=""><i
                  class="fa-solid fa-user"></i>Profile</a></button>
            <button type="button" class="btn btn-outline-info"><a><i class="fa-solid fa-cart-plus"></i>My Cart</a></button>
          </span>
        </div>
      </div>
    </nav>
  </header>
    )
}

export default Header;