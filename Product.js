import React from 'react'
import {Link}from 'react-router-dom'
function Product() {
  return (
    <div>
        <h1>Product Page</h1>
        <nav>
            <Link to='/availableprod'>available products </Link>
            <Link to='/upcomingprod'>upocoming products</Link>
        </nav>
    </div>
  )
}
export default Product