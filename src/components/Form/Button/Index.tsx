import React from "react";
import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

const Button: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest} activeOpacity={0.5}>
      <Title>{title}</Title>
    </Container>
  );
};

export default Button;
