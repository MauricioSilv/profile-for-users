import React from 'react';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Box1,
  Avatar,
  Name,
  NameText,
  UserName,
  Description,
  DescriptionText,
  Info,
  Followers,
  FollowersText,
  FollowersValue,
  Following,
  FollowingText,
  FollowingValue,
  Publication,
  PublicationText,
  PublicationValue,
  Bio,
  CommentsUser,
  CommentsText,
} from './styles';

export default function Profile() {
  return (
    <Container>
      <Box1>
        <Avatar
          source={{
            uri: 'https://api.adorable.io/avatars/120/abott@adorable.png',
          }}
        />
        <Name>
          <NameText>Maurício Silva</NameText>
          <UserName>@mauriciosilv</UserName>
        </Name>
        <Description>
          <DescriptionText>
            Hello! I'am a developer web and mobile.
          </DescriptionText>
        </Description>
      </Box1>
      <Info>
        <Following>
          <FollowingValue>37</FollowingValue>
          <FollowingText>Following</FollowingText>
        </Following>
        <Followers>
          <FollowersValue>30</FollowersValue>
          <FollowersText>Followers</FollowersText>
        </Followers>
        <Publication>
          <PublicationValue>28</PublicationValue>
          <PublicationText>Publications</PublicationText>
        </Publication>
      </Info>
      <Bio>
        <CommentsUser>
          <CommentsText>
            Vamos lá, estou começando agora e quiser me seguir no github!
          </CommentsText>
        </CommentsUser>
      </Bio>
    </Container>
  );
}

Profile.navigationOptions = {
  tabBarIcon: ({tintColor}) => <Icon name="user" size={25} color={tintColor} />,
};
