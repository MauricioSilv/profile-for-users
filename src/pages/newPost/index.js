import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function newPost() {
  return <Text>newPost</Text>;
}
newPost.navigationOptions = {
  tabBarIcon: ({tintColor}) => (
    <Icon name="plus-circle" size={40} color={tintColor} />
  ),
};
