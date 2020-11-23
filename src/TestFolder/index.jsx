import React from 'react';

import 'semantic-ui-css/semantic.min.css'

import { Grid, Segment } from "semantic-ui-react"

export default function TestDirectory(props){

  return(
    <Grid>
      <Grid.Row columns={2}>
        <Grid.Column>
          <Segment>Seggy 1</Segment>
        </Grid.Column>

        <Grid.Column>
          <Segment>Seggy 2</Segment>
        </Grid.Column>
      </Grid.Row>


      <Grid.Row >
        <Grid.Column>
          <Segment>Seggy 3</Segment>
        </Grid.Column>
      </Grid.Row>
    </Grid>
  )
}
