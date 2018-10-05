import React from 'react'
import Card from './Card'

const CardList = ({robots}) => {
const cardArray = robots.map((user) => {return <Card robot={user} />})
    return (<div>{cardArray}</div>)
}

export default CardList