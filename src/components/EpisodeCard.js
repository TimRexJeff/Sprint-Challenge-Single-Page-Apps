import React from "react";
import { Card } from 'semantic-ui-react'

export default function LocationCard(props) {
  return (
    <Card className="epi-card">
      <h2>{props.name}</h2>
      <h5>{props.episode}</h5>
      <h5>{props.air_date}</h5>
      <h4>{props.characters}</h4>
    </Card>
  )
}
