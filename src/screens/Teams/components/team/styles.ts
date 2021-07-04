import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  padding: 0 15px;
  margin-top: 15px;
  flex-direction: row;
  align-items: center;
`;

export const Flex = styled.View`
  flex: 1;
  padding: 0 10px 0 15px;
`;

export const Name = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const Country = styled.Text`
  flex: 1;
`;

export const Founded = styled.Text`
  flex: 1;
  text-align: right;
`;

export const Logo = styled.Image`
  width: 70px;
  height: 70px;
`;

export const Column = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;
