import React, { Fragment } from 'react'

const Sushi = (props) => {
  const {id,name,img_url,price,eaten} = props.sushi
  
  const handleClick = () => {
    props.markSushiEaten(id,price)
  }

  return (
    <div className="sushi" >
      <div className="plate" 
           onClick={handleClick}>
        { 
          eaten ?
            null
          :
            <img src={img_url} width="100%" alt={name} />
        }
      </div>
      <h4 className="sushi-details">
        {name} - ${price}
      </h4>
    </div>
  )
}

export default Sushi