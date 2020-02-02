import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {Container} from './styles';

export default function HeaderLeft() {
  return (
    <Container>
      <Icon name="bell" size={20} color="#333" />
    </Container>
  );
}
