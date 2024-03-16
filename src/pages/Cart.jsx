import React, { useEffect, useState } from 'react'
import Header from '../components/Header'
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { decQuantity, emptyCart, incQuantity, removeCartItem } from '../REDUX/slices/cartSlice'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Cart() {
  const navigate = useNavigate()
  const cartItems = useSelector(state => state.cartReducer)
  const [cartTotal, setCartTotal] = useState(0)
  const dispatch = useDispatch()
  useEffect(() => {
    if (cartItems?.length > 0) {
      setCartTotal(cartItems?.map(item => item.totalPrice).reduce((t1, t2) => t1 + t2))
    } else {
      setCartTotal(0)
    }

  }, [cartItems])

  const handleDecrementQuantity = (product) => {
    if (product.quantity > 1) {
      dispatch(decQuantity(product.id))
    } else {
      dispatch(removeCartItem(product.id))
    }
  }

  const handleCheckout = () => {
    dispatch(emptyCart())
    toast.success("Order placed successfully ... thank you for purchasing with us!!!")
    setTimeout(() => {
      navigate("/")
    }, 3000)
  }

  return (
    <>

      <Header />

      <div className='container' style={{ marginTop: '100px' }}>


        <div className='pt-5'>
          <h1>Cart Summary</h1>
          <div className="row mt-5">
            <div className="col-lg-8">
              <table className="table">
                <thead>
                  <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Image</th>
                    <th>Quantity</th>
                    <th>Price</th>
                    <th>...</th>
                  </tr>
                </thead>

                <tbody>
                  {
                    cartItems?.map((product, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{product.title.slice(0.16)}...</td>
                        <td><img style={{ height: '60px', width: '60px' }} src={product.thumbnail} alt="" /></td>
                        <td className='align-items-center'><div className="d-flex text-center">
                          <button onClick={() => handleDecrementQuantity(product)} className='btn fw-bolder'>-</button>
                          <input value={product.quantity} className='form-control' placeholder='0' readOnly style={{ height: '50px', width: '50px' }} type="text" />
                          <button onClick={() => dispatch(incQuantity(product.id))} className='btn fw-bolder'>+</button>

                        </div></td>
                        <td>{product.totalPrice}</td>
                        <td><button onClick={() => dispatch(removeCartItem(product.id))} className='btn'><i className="fa-solid fa-trash text-primary"></i></button></td>
                      </tr>
                    ))
                  }
                </tbody>
              </table>
              <div className="float-end mt-3">
                <button onClick={() => dispatch(emptyCart())} className='btn btn-primary'> EMPTY CART</button>
                <Link className='btn btn-danger ms-5' to={'/'}>SHOP MORE</Link>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="shadow border rounded p-4">
                <h5>Total Product:<b className='text-primary fw-bolder'>{cartItems.length}</b></h5>
                <h4>Total Amount:<b className='text-danger'>${cartTotal}</b></h4>
                <div className="d-grid mt-4">
                  <button onClick={handleCheckout} className='btn btn-success'>Check Out</button>
                </div>
              </div>

            </div>

          </div>
        </div>

        <div style={{ height: '70vh' }} className="w-100 d-flex justify-content-center align-items-center flex-column">
          <img className='img-fluid' width={'400px'} src="http://2.bp.blogspot.com/-UomRXLjNZIY/TrQDW38PwAI/AAAAAAAABQk/-_OjDXIr3Yw/s1600/empty_cart3.jpg" alt="" />
          <h3 className='text-primary' style={{ marginTop: '25px' }}>Your Cart Is Empty !!!</h3>
        </div>

      </div>
      <ToastContainer position='top-center' theme='colored' autoClose={3000}></ToastContainer>
    </>
  )
}

export default Cart