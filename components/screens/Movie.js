import React, { Component } from 'react';
import { Image, StyleSheet, Platform } from 'react-native';
import {
  Container,
  Content,
  Card,
  CardItem,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
  Header
} from 'native-base';

import Star from '../../static/star.png';
import { Actions } from 'react-native-router-flux';

export default class Movie extends Component {
  handleBack = () => {
    Actions.pop();
  };

  moreFilms = () => {
    const page = Math.floor(Math.random() * 700);
    this.props.moreMovie(page);
  };

  render() {
    let id = Math.floor(Math.random() * 17);
    let movie = this.props.movie.results[id];
    const poster = {
      uri: `http://image.tmdb.org/t/p/w342/${movie.poster_path}`
    };
    return (
      <Container>
        <Header androidStatusBarColor="#CC3300" style={{ backgroundColor: '#CC3300' }}>
          <Left style={{ flex: 1 }}>
            <Button onPress={this.handleBack} transparent>
              <Icon
                name="arrow-back"
                onPress={this.handleBack}
                style={{ color: 'white', marginLeft: Platform.OS === 'ios' ? 10 : 0 }}
              />
            </Button>
          </Left>
          <Body />
          <Right>
            <Button transparent textStyle={{ color: '#87838B' }}>
              <Image source={Star} style={styles.star} />
              <Text style={{ color: 'white' }}>{movie.vote_average}</Text>
            </Button>
          </Right>
        </Header>
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
            <CardItem cardBody style={{ marginBottom: 30 }}>
              <Body>
                <Image source={poster} style={styles.poster} resizeMode="contain" />
                <Text style={styles.overview}>{movie.overview}</Text>
              </Body>
            </CardItem>
          </Card>
          <Button full style={styles.buttonMore} onPress={this.moreFilms}>
            <Text>Ещё фильм</Text>
          </Button>
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
  back: {
    width: 20,
    height: 20
  },
  poster: {
    width: '100%',
    height: 600,
    flex: 1,
    marginBottom: 10
  },
  overview: {
    paddingHorizontal: 20
  },
  star: {
    width: 20,
    height: 20
  },
  buttonMore: {
    backgroundColor: '#CC3300'
  }
});
