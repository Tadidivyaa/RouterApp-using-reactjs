import React from 'react'
import { useNavigate } from 'react-router-dom'
function UpcomingProduct() {
    const navigate=useNavigate();
  return (
    <div>Upcoming Products are listed below<br/>
    <button onClick={()=>navigate('/')}>Home</button>
    <button onClick={()=>navigate('/product')}>Back</button>
    </div>
  )
}

export default UpcomingProduct