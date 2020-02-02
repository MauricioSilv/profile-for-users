import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

export default function HeaderRight() {
  return (
    <Container>
      <Icon name="settings" size={20} color="#333" />
    </Container>
  );
}
