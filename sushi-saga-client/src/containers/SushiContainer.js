import React, { Fragment } from 'react'
import MoreButton from '../components/MoreButton'
import Sushi from '../components/Sushi'

const SushiContainer = (props) => {
  return (
    <Fragment>
      <div className="belt">
        {
          props.displayedSushi.map(sushi => {
            return <Sushi key={sushi.id} sushi={sushi} markSushiEaten={props.markSushiEaten}/>
          })
        }
        <MoreButton getNewDisplaySushi={props.getNewDisplaySushi}/>
      </div>
    </Fragment>
  )
}

export default SushiContainer