import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding: 0 30px;
`;

export const Title = styled.Text`
  font-weight: bold;
  font-size: 30px;
  text-align: center;
`;

export const Message = styled.Text`
  font-size: 15px;
  margin: 10px 0 20px;
  text-align: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 7px 10px;
  border-radius: 10px;
  background-color: blue;
`;

export const ButtonText = styled.Text`
  color: white;
  font-size: 16px;
`;
