import React, { Component } from 'react';
import { Container, Content, Accordion } from 'native-base';
import { mock as data } from './mock';

export class Menu extends Component {
  render() {
    return (
      <Container>
        <Content padder style={{ backgroundColor: '#fff' }}>
          <Accordion contentStyle={{ backgroundColor: 'white', flex: 1 }} dataArray={data} />
        </Content>
      </Container>
    );
  }
}
