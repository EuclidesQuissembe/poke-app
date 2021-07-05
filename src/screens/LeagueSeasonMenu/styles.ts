import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding: 0 30px;
`;

export const Logo = styled.Image`
  width: 150px;
  height: 150px;
`;

export const Title = styled.Text`
  font-size: 28px;
  margin: 10px 0;
  font-weight: bold;
  text-align: center;
`;

export const Season = styled.Text`
  font-size: 20px;
  margin-bottom: 30px;
`;

export const Button = styled.TouchableOpacity`
  width: 100%;
  padding: 20px 30px;
  border-radius: 10px;
  background-color: #fff;
  margin-bottom: 20px;
`;

export const ButtonText = styled.Text`
  font-size: 20px;
`;
