import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, TextInfo} from './styles';

export default function Home() {
  return (
    <Container>
      <Icon name="alert-triangle" size={120} color="rgba(242,201,76,0.5)" />
      <TextInfo>This Home page has not yet been created.</TextInfo>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor} />,
  title: 'teste',
};
