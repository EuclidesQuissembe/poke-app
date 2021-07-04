import React from 'react';

import {
  Container,
  Description,
  Rank,
  Points,
  GoalsDiff,
  Group,
  Form,
  Status,
  Update,
  Played,
  Win,
  Draw,
  Lose,
  For,
  Against,
  Name,
  Logo,
} from './styles';

import { Props } from './types';

const Standing: React.FC<Props> = ({ standing }) => {
  return (
    <Container>
      <Rank>{standing.rank}</Rank>
      <Points>{standing.points}</Points>
      <GoalsDiff>{standing.goalsDiff}</GoalsDiff>
      <Group>{standing.group}</Group>
      <Form>{standing.form}</Form>
      <Status>{standing.status}</Status>
      <Update>{standing.update}</Update>
      <Description>{standing.description}</Description>

      {/* Team */}
      <Logo source={{ uri: standing.team.logo }} />
      <Name>{standing.team.name}</Name>

      {/* All */}
      <Played>{standing.all.played}</Played>
      <Win>{standing.all.win}</Win>
      <Draw>{standing.all.draw}</Draw>
      <Lose>{standing.all.lose}</Lose>
      <For>{standing.all.goals.for}</For>
      <Against>{standing.all.goals.against}</Against>

      {/* Home */}
      <Played>{standing.home.played}</Played>
      <Win>{standing.home.win}</Win>
      <Draw>{standing.home.draw}</Draw>
      <Lose>{standing.home.lose}</Lose>
      <For>{standing.home.goals.for}</For>
      <Against>{standing.home.goals.against}</Against>

      {/* Away */}
      <Played>{standing.away.played}</Played>
      <Win>{standing.away.win}</Win>
      <Draw>{standing.away.draw}</Draw>
      <Lose>{standing.away.lose}</Lose>
      <For>{standing.away.goals.for}</For>
      <Against>{standing.away.goals.against}</Against>
    </Container>
  );
};

export default Standing;
