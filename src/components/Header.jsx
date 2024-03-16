import React from 'react'
import { Navbar, Container, Nav,Badge } from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { searchProduct } from '../REDUX/slices/productSlice'



function Header({insideHome}) {
  const dispatch = useDispatch()
  const cartCount = useSelector(state=>state.cartReducer).length
  const wishlistCount = useSelector(state=>state.wishlistReducer).length
  return (
    <Navbar style={{zIndex:'10'}} expand="lg" className=" position-fixed top-0 w-100 bg-info">
      <Container>
        <Navbar.Brand><Link to={'/'} className='text-light fw-bolder' style={{ textDecoration: 'none' }}> 
        <i class="fa-solid fa-truck-fast me-1"></i>E Cart</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            { insideHome && 
            <Nav.Link >
              <input onChange={(e)=>dispatch(searchProduct(e.target.value.toLocaleLowerCase()))}
                style={{width:'450px'}} className='form-control' type="text" placeholder='Search Products Here!!!'/>
            </Nav.Link>}
            <Nav.Link ><Link to={'/Wishlist'} className='text-light fw-bolder' style={{ textDecoration: 'none' }}
            ><i className="fa-solid fa-heart text-primary"></i> Wishlist <Badge bg="secondary">{wishlistCount}</Badge></Link></Nav.Link>
          <Nav.Link ><Link to={'/Cart'} className='text-light fw-bolder' style={{ textDecoration: 'none' }}
            ><i className="fa-solid fa-cart-plus text-success"></i> Cart <Badge bg="secondary">{cartCount}</Badge></Link></Nav.Link>
          
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header