import React from 'react'
import { Link } from 'react-router-dom'

function Footer() {
  return (

    <div style={{ height: '300px' }} expand="lg" className='container-fluid mt-5 text-light bg-info ms-auto'>
      <div className="footer-content d-flex justify-content-between ">


        <div style={{ width: '400px', marginTop:'30px' }} className="media ">
          <h5 className='d-flex'><i style={{ height: '25px' }} className="fa-solid fa-truck-fast me-1"></i>E Cart</h5>
          <p style={{ textAlign: 'justify' }} className=' text-light'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas ea soluta quo amet labore sed at illo?
            Rem pariatur sunt amet, reprehenderit ipsa nemo.</p>
          <span className=' text-light'>Code liscenced MIT,dos CC BY 3.0.</span><br/>
          <span className=' text-light'>Currently v5.3.2</span>
        </div>

        <div  style={{ marginTop:'30px' }}className="links d-flex flex-column">
          <h5 className='d-flex' >Links</h5>
          <Link to={'/'} style={{ textDecoration: 'none', color: 'white' }}>Home</Link>
          <Link to={'/home'} style={{ textDecoration: 'none', color: 'white' }}>Cart</Link>
          <Link to={'/watch'} style={{ textDecoration: 'none', color: 'white' }}>Wishlist</Link>
        </div>


        <div  style={{ marginTop:'30px' }} className="guides links d-flex flex-column">
          <h5>Guides</h5>
          <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React JS</a>
          <a href="https://reactrouter.com/en/main" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Routing</a>
          <a href="https://react-bootstsrap.github.io/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}>React Bootstrap</a>
        </div>



        <div  style={{ marginTop:'30px' }} className="contact">
          <h5>Contact Us</h5>
          <div className="d-flex">
            <input type='text' className='form-control me-1' placeholder='E-mail Id Please' />
            <button className='btn btn-warning'><i className="fa-solid fa-arrow-right"></i></button>
          </div>
          <div className="icons d-flex justify-content-between mt-2">
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-twitter fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-instagram fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-facebook fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-linkedin fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-brands fa-square-github fa-1x"></i></a>
            <a href="https://react.dev/" target='_blank' style={{ textDecoration: 'none', color: 'white' }}><i class="fa-solid fa-phone fa-1x"></i></a>

          </div>

        </div>
      </div>
      <p style={{ marginTop:'30px' }} className="text-center mt-5">Copyright & copy; 2024 Media Player.Built with React.</p>
    </div>

  )
}

export default Footer