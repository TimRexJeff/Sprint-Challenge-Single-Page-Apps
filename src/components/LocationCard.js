import React from "react";
import { Card, Button } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card className="loc-card">
      <h2>{props.name}</h2>
      <h3>{`${props.type} - ${props.dimension}`}</h3>
      <Button floated='right'
        onClick={props.residents}>{`${props.residents} Residents`}</Button>
    </Card>
  )
}
