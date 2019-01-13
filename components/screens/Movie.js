import React, { Component } from 'react';
import { Image, StyleSheet } from 'react-native';
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

import Star from '../../static/star.png';

export default class Movie extends Component {
  render() {
    const id = Math.floor(Math.random() * 17);
    const movie = this.props.movie.results[id];
    const poster = {
      uri: `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
    };
    return (
      <Container>
        <Content>
          <Card style={{ flex: 1 }}>
            <CardItem>
              <Left>
                <Body>
                  <Text uppercase style={styles.title}>
                    {movie.title}
                  </Text>
                  <Text note>Дата выхода: {movie.release_date}</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body>
                <Image
                  source={poster}
                  style={styles.poster}
                  resizeMode="contain"
                />
                <Text style={styles.overview}>{movie.overview}</Text>
              </Body>
            </CardItem>
            <CardItem>
              <Left>
                <Button transparent textStyle={{ color: '#87838B' }}>
                  <Image source={Star} style={styles.star} />
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

const styles = StyleSheet.create({
  title: {
    fontWeight: 'bold',
    fontSize: 20
  },
  poster: {
    width: '100%',
    height: 600,
    flex: 1,
    marginBottom: 10
  },
  overview: {
    paddingHorizontal: 10,
    width: 400
  },
  star: {
    width: 20,
    height: 20
  }
});
