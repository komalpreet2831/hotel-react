import React from 'react'

function Header() {
  return (
    <div>
        {/* <!-- Navbar --> */}
    <nav class="navbar text-center sticky-top navbar-expand-lg shadow bg-light">
        <div class="container-fluid mx-5">
            <a class="navbar-brand fw-bold  rounded" href="#">
                <img class="text-black w-75 " src="images/hotel Amarica.png" alt="logo"/>
            </a>

            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#collapsingNavbar3">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="navbar-collapse collapse  text-black w-100" id="collapsingNavbar3">
                <ul class="navbar-nav fw-semibold text-uppercase w-100 justify-content-end">
                    <li class="nav-item  mx-lg-2">
                        <a class="nav-link" href="#">Home</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link mx-lg-2 ::before" href="/login">Login</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link mx-lg-2" href="#awards">Shop</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link mx-lg-2" href="#activities">Portfolio</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link mx-lg-2" href="#news">blog</a>
                    </li>
                    <li class="nav-item ">
                        <a class="nav-link mx-lg-2" href="#footer">contact</a>
                    </li>

                </ul>

            </div>
        </div>
    </nav>

    {/* <!-- Main --> */}
    <div class="main">
        <img src="./images/mainbg.png" alt="" />
    </div>
    </div>
  )
}

export default Header;