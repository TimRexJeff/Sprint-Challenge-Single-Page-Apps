import React from "react";
import { Card } from 'semantic-ui-react'

export default function LocationCard({ name, type, dimension, residents }) {
  return (
    <Card className="loc-card">
      <h2>{name.name}</h2>
      <h3>{`${type.type} - ${dimension.dimension}`}</h3>
      <h4>{residents.residents}</h4>
    </Card>
  )
}
