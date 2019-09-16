import React from "react";
import { Card, Button } from 'semantic-ui-react'

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card className="loc-card">
      <h2>{name.name}</h2>
      <h3>{`${type.type} - ${dimension.dimension}`}</h3>
      <Button floated='right'
        onClick={residents.residents}>{`Residents ${residents.residents}`}</Button>
    </Card>
  )
}
