import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TextInfo} from './styles';

export default function Message() {
  return (
    <Container>
      <Icon name="alert-triangle" size={120} color="rgba(242,201,76,0.5)" />
      <TextInfo>This messages page has not yet been created.</TextInfo>
    </Container>
  );
}

Message.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="send" size={25} color={tintColor} />,
};
