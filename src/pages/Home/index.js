import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Container, TextInfo} from './styles';

export default function Home() {
  return (
    <Container>
      <Icon />
      <TextInfo>Essa pagina ainda não foi concluída</TextInfo>
    </Container>
  );
}

Home.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="home" size={25} color={tintColor} />,
};
