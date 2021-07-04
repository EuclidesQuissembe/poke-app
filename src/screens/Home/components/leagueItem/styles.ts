import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  /* flex: 1; */
  flex-direction: row;
  align-items: center;
  padding: 0 20px;
  margin: 10px 0;
`;

export const ContainerInfo = styled.View`
  flex: 1;
  padding: 0 10px 0 15px;
`;

export const Name = styled.Text`
  font-size: 20px;
`;

export const Type = styled.Text``;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
  /* padding: 20px; */
  background-color: #eee;
  border-radius: 25px;
`;
