import React from 'react';
import Icon from 'react-native-vector-icons/Feather';
import {Text} from 'react-native';

// import { Container } from './styles';

export default function Message() {
  return <Text>Message</Text>;
}

Message.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="send" size={25} color={tintColor} />,
};
