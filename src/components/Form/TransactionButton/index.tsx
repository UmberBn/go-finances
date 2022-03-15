import React from "react";

import { RectButtonProps } from "react-native-gesture-handler";
import { Container, Title, Icon } from "./styles";
interface Props extends RectButtonProps {
  title: string;
  type: "up" | "down";
  current: boolean;
}

const icons = {
  up: "arrow-up-circle",
  down: "arrow-down-circle",
};
const TransactionButton: React.FC<Props> = ({ title, type, ...rest }) => {
  return (
    <Container {...rest} type={type}>
      <Icon name={icons[type]} type={type}/>
      <Title>{title} </Title>
    </Container>
  );
};

export default TransactionButton;
