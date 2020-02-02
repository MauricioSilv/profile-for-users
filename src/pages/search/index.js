import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function Search() {
  return <Text>search</Text>;
}

Search.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="search" size={25} color={tintColor} />
  ),
};
