import React from 'react'

function Navbar() {
  return (
    <nav className='nav'>
        <div className='navbar-upper'> 
            <img src="https://projectsdeal.co.uk/images/logo.png" className='nav-logo'></img>
            <section className='increase-margin'>
                <span >No. 1 Dissertation Writing Services in UK,</span>
                <span>Since 2001! </span>
                <span >
                <a href="tel:+442032900046" className='white , call-button'>Call +44 20 32900046</a>
                </span>
            </section>
        </div>

        <div className='navbar-lower'>

            <ul>
                <li><a href="#"> Home</a></li>
                <li><a href="#"> Dissertion </a></li>
                <li><a href="#"> Coursework Help</a> </li>
                <li><a href="#"> Reasearch Paper Help </a></li>
                <li><a href="#"> Dissertion Topics </a></li>
                <li><a href="#"> Dissertion Examples </a></li>
                <li><a href="#"> Dissertion Structure </a></li>
                <li><a href="#"> Essay Help </a></li>
                <li><a href="#"> PhD Proposal </a></li>
                <li><a href="#"> PhD Thesis</a></li>
                <li><a href="#"> Assignment Help</a> </li>
                <li><a href="#"> Blog </a></li>
            </ul>

        </div>
    </nav>
  )
}

export default Navbar