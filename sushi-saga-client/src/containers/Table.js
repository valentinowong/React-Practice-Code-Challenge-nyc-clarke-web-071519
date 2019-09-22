import React, { Fragment } from 'react'

const Table = (props) => {

  const renderPlates = (array) => {
    return array.map((x, index) => {
      return <div key={index} className="empty-plate" style={{ top: -7 * index }}/>
    })
  }

  let eatenSushi = []
  props.sushiList.map(sushi => {
    if (sushi.eaten) {
      eatenSushi.push(sushi)
    }
  })

  return (
    <Fragment>
      <h1 className="remaining">
        You have: ${ props.balanceRemaining } remaining!
      </h1>
      <div className="table">
        <div className="stack">
          {
            /* 
               renderPlates takes an array 
               and renders an empty plate
               for every element in the array
            */
            renderPlates(eatenSushi)
          }
        </div>
      </div>
    </Fragment>
  )
}

export default Table