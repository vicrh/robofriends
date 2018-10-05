import React from 'react'

const Card = ({robot}) => {
    return (
        <div className='bg-light-green dib br3 pa3 ma2 grow'>
            <img src={'https://robohash.org/'+robot.email+'?200x200'} alt="_robot_" />
            <h2>{robot.name}</h2>
            <p>{robot.email}</p>
        </div>
    )
}
export default Card