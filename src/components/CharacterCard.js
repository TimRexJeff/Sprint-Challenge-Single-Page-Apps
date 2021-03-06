import React from "react";
import './CharacterCard.scss'
import { Card, Image, Button } from 'semantic-ui-react'

export default function CharacterCard(props) {
  return (
    <Card className="char-card">
        <Image src={props.image}/>
        <h2>{props.name}</h2>
        <h3>{`${props.species} ${props.status}`}</h3>
        <Card.Content>
            <div>{`Location: ${props.location}`}</div>
            <div>{`Origin: ${props.origin}`}</div>
        </Card.Content>
        <Button floated='right'
        onClick={props.episode}>{`${props.episode.length} Episodes`}</Button>
    </Card>
  )
}
