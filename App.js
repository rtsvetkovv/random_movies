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

import Test from './static/bg.jpg';

export default class CardShowcaseExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content>
          <Card style={{ flex: 0 }}>
            <CardItem>
              <Left>
                <Thumbnail source={Test} />
                <Body>
                  <Text>NativeBase</Text>
                  <Text note>April 15, 2016</Text>
                </Body>
              </Left>
            </CardItem>
            <CardItem cardBody>
              <Body>
                <Image
                  source={Test}
                  style={{ height: 200, width: 400, flex: 1, marginBottom: 10 }}
                />
                <Text style={{ paddingHorizontal: 10 }}>
                  "An apocalyptic story set in the furthest reaches of our
                  planet, in a stark desert landscape where humanity is broken,
                  and most everyone is crazed fighting for the necessities of
                  life. Within this world exist two rebels on the run who just
                  might be able to restore order. There's Max, a man of action
                  and a man of few words, who seeks peace of mind following the
                  loss of his wife and child in the aftermath of the chaos. And
                  Furiosa, a woman of action and a woman who believes her path
                  to survival may be achieved if she can make it across the
                  desert back to her childhood homeland
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
