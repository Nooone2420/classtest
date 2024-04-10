import React from 'react'

function About({cartItem}) {
    
  return (
    <div>
      <h1 style={{textAlign: 'center'}}>This is About page</h1>
      {
            cartItem.length === 0 ? (
                <h1>Your Cart is Empty</h1>
            ):(
                <div>
                    <h1>hello</h1>
                    {
                        cartItem.map((item)=>(
                            <div>
                                <img src={item.image1} style={{width:"25%", height:"40vh"}} alt='' />
                                <p>{item.title}</p>
                                <h2>{item.price}</h2>
                               

                                </div>
                        ))
                    }
                    </div>
            )
        }
    </div>
  )
}

export default About
