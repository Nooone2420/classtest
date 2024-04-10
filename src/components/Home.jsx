import React from 'react'

function Home({data, addtocart}) {

    const handle=(product)=>{
        addtocart(product)
    }
    

  return (
    
    <div>
        <h1 style={{textAlign: 'center'}}>This is home page</h1>

        {
            data.filter((items=>items.category==="Mens")).map((item)=>(
                <div className='item' style={{borderStyle: 'solid', width: '400px'}}>
                    <img src={item.image1} alt="" style={{height: '200px'}}/>
                    <div className="like"><img src="" alt=""/></div>
                        <p className='soldby'>{item.soldby}</p>
                        <p className='title'>{item.title.slice(0,60)}...</p>
                        <p className='price'>${item.price}</p>
                    <button onClick={()=>handle(item)}>Add To Cart</button>
                    </div>
            

            ))
        }
    </div>
  )
}

export default Home
