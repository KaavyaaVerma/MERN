import {Navlink,Outlet}from 'react'

const Product = () => {
  return (
    <div className="container">
        <h2>Product Main Page</h2>
        <div className="d-flex flex-row">
            <Navlink to="product1" className="p-2">Product 1</Navlink>
            <Navlink to="product2" className="p-2">Product 2</Navlink>
            <Navlink to="product3" className="p-2">Product 3</Navlink>
        </div>
        <Outlet/>
    </div>
  )
}

export default Product