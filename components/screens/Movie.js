import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body
} from 'native-base';

import Test from '../../static/bg.jpg';
import { movies } from '../mok';

export default class Movie extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text uppercase style={{ fontSize: 20 }}>
                    Mad Max: Fury Road
                  </Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={Test}
                  style={{ height: 300, width: 200, flex: 1, marginBottom: 10 }}
                />
                <Text style={{ paddingHorizontal: 10, width: 200 }}>
                  {movies.results[0].overview}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="thumbs-up" />
                  <Text>1,926</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
