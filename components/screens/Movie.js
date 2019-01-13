import React, { Component } from 'react';
import { Image } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
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
    const id = Math.floor(Math.random() * 17);
    const movie = this.props.movie.results[id];
    const poster = {
      uri: `http://image.tmdb.org/t/p/w185/${movie.poster_path}`
    };
    return (
      <Container>
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text uppercase style={{ fontSize: 20 }}>
                    {movie.title}
                  </Text>
                  <Text note>{movie.release_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body style={{ flexDirection: 'row' }}>
                <Image
                  source={poster}
                  style={{ height: 300, width: 200, flex: 1, marginBottom: 10 }}
                />
                <Text style={{ paddingHorizontal: 10, width: 200 }}>
                  {movie.overview}
                </Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Icon name="thumbs-up" />
                  <Text>{movie.vote_average}</Text>
                </Button>
              </Left>
            </CardItem>
          </Card>
        </Content>
      </Container>
    );
  }
}
