import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  flex-direction: row;
  align-items: center;
  padding: 15px 0;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 0 10px 0 15px;
`;

export const Name = styled.Text`
  font-weight: bold;
  font-size: 20px;
`;

export const Type = styled.Text``;

export const Logo = styled.Image`
  width: 60px;
  height: 60px;
  padding: 20px;
  background-color: #eee;
  border-radius: 25px;
`;
