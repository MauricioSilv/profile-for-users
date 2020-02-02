import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container, TextInfo} from './styles';

export default function newPost() {
  return (
    <Container>
      <Icon name="alert-triangle" size={120} color="rgba(242,201,76,0.5)" />
      <TextInfo>This new post page has not yet been created.</TextInfo>
    </Container>
  );
}
newPost.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="plus-circle" size={40} color={tintColor} />
  ),
};
