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
  Played,
  Win,
  Draw,
  Lose,
  For,
  Against,
  Name,
  Logo,
  Team,
  All,
  Subtitle,
  Col,
  TableTitle,
  Flex,
  Text,
} from './styles';

import { Props } from './types';

const Standing: React.FC<Props> = ({ standing }) => {
  return (
    <Container>
      {/* Team */}
      <Team>
        <Logo source={{ uri: standing.team.logo }} />
        <Name>{standing.team.name}</Name>
      </Team>
      <Description>{standing.description}</Description>

      <Flex>
        <Col>
          <Text>Rank</Text>
          <Rank>{standing.rank}</Rank>
        </Col>
        <Col>
          <Text>Pontos</Text>
          <Points>{standing.points}</Points>
        </Col>
        <Col>
          <Text>Golos de Diferença</Text>
          <GoalsDiff>{standing.goalsDiff}</GoalsDiff>
        </Col>
      </Flex>

      <Flex>
        <Group>{standing.group}</Group>
        <Form>{standing.form}</Form>
        <Status>{standing.status}</Status>
      </Flex>

      {/* All */}
      <Subtitle>Total</Subtitle>
      <All>
        <Col>
          <TableTitle>J</TableTitle>
          <Played>{standing.all.played}</Played>
        </Col>
        <Col>
          <TableTitle>V</TableTitle>
          <Win>{standing.all.win}</Win>
        </Col>
        <Col>
          <TableTitle>E</TableTitle>
          <Draw>{standing.all.draw}</Draw>
        </Col>
        <Col>
          <TableTitle>D</TableTitle>
          <Lose>{standing.all.lose}</Lose>
        </Col>
        <Col>
          <TableTitle>GM</TableTitle>
          <For>{standing.all.goals.for}</For>
        </Col>
        <Col>
          <TableTitle>GS</TableTitle>
          <Against>{standing.all.goals.against}</Against>
        </Col>
      </All>

      {/* Home */}
      <Subtitle>Casa</Subtitle>
      <All>
        <Col>
          <TableTitle>J</TableTitle>
          <Played>{standing.home.played}</Played>
        </Col>
        <Col>
          <TableTitle>V</TableTitle>
          <Win>{standing.home.win}</Win>
        </Col>
        <Col>
          <TableTitle>E</TableTitle>
          <Draw>{standing.home.draw}</Draw>
        </Col>
        <Col>
          <TableTitle>D</TableTitle>
          <Lose>{standing.home.lose}</Lose>
        </Col>
        <Col>
          <TableTitle>GM</TableTitle>
          <For>{standing.home.goals.for}</For>
        </Col>
        <Col>
          <TableTitle>GS</TableTitle>
          <Against>{standing.home.goals.against}</Against>
        </Col>
      </All>

      {/* Away */}
      <Subtitle>Fora</Subtitle>
      <All>
        <Col>
          <TableTitle>J</TableTitle>
          <Played>{standing.away.played}</Played>
        </Col>
        <Col>
          <TableTitle>V</TableTitle>
          <Win>{standing.away.win}</Win>
        </Col>
        <Col>
          <TableTitle>E</TableTitle>
          <Draw>{standing.away.draw}</Draw>
        </Col>
        <Col>
          <TableTitle>D</TableTitle>
          <Lose>{standing.away.lose}</Lose>
        </Col>
        <Col>
          <TableTitle>GM</TableTitle>
          <For>{standing.away.goals.for}</For>
        </Col>
        <Col>
          <TableTitle>GS</TableTitle>
          <Against>{standing.away.goals.against}</Against>
        </Col>
      </All>
    </Container>
  );
};

export default Standing;
