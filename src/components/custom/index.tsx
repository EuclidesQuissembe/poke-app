/**
 * Modules
 */
import React from 'react';

// Styles
import { Container, Title, Message, Button, ButtonText } from './styles';

// Props
import { Props } from './types';

const Empty: React.FC<Props> = ({ title, message, onPress, buttonText }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Message>{message}</Message>
      {onPress && (
        <Button onPress={onPress} activeOpacity={0.7}>
          <ButtonText>{buttonText ? buttonText : 'Pass the text'}</ButtonText>
        </Button>
      )}
    </Container>
  );
};

export default Empty;
