import styled from 'styled-components/native';
import {Image} from 'react-native';

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
`;

export const Box1 = styled.View`
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
`;

export const Avatar = styled(Image)`
  margin-top: 50px;
  width: 150px;
  height: 150px;
  border-radius: 10px;
`;

export const AvatarIcon = styled(Image)`
  width: 40px;
  height: 40px;
  border-radius: 20px;
`;

export const Name = styled.View`
  margin-top: 15px;
`;
export const NameText = styled.Text`
  font-weight: bold;
  font-size: 34px;
`;
export const UserName = styled.Text`
  margin-top: 2px;
  align-self: center;
  color: #d3d3d3;
`;
export const Description = styled.View`
  margin-top: 30px;
  background-color: #fbeb70;
  padding: 30px;
  border-radius: 15px;
  border-top-left-radius: 1px;
`;
export const DescriptionText = styled.Text`
  font-size: 15px;
  font-weight: 900;
`;

export const Info = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  margin: 40px;
  margin-top: 40px;
`;

export const Followers = styled.View`
  margin: 2px;
`;

export const FollowersText = styled.Text`
  color: #d3d3d3;
`;

export const FollowersValue = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #353535;
`;

export const Following = styled.View`
  margin: 2px;
`;

export const FollowingText = styled.Text`
  color: #d3d3d3;
`;

export const FollowingValue = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #353535;
`;

export const Publication = styled.View`
  margin: 2px;
`;
export const PublicationText = styled.Text`
  color: #d3d3d3;
`;
export const PublicationValue = styled.Text`
  align-self: center;
  font-weight: bold;
  color: #353535;
`;

export const Bio = styled.View`
  flex-direction: column;
  margin: 30px;
`;
export const EmojiTex = styled.Text`
  font-size: 10px;
`;
export const CommentsUser = styled.View`
  padding: 20px;
  border-radius: 15px;
  border-top-left-radius: 0px;
  background-color: #d6ecff;
`;
export const CommentsText = styled.Text`
  color: #353535;
  font-weight: 900;
`;
