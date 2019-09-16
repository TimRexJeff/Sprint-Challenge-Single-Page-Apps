import React from "react";
import { Card, Button } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card className="epi-card">
      <h2>{props.name}</h2>
      <h5>{props.episode}</h5>
      <h5>{props.air_date}</h5>
      <Button floated='right'
        onClick={props.characters}>{`Characters ${props.characters}`}</Button>
    </Card>
  )
}
