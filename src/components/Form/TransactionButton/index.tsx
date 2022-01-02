import React from "react";
import { View } from "react-native";
import { TouchableOpacityProps } from "react-native";
import { Container, Title, Icon } from "./styles";
interface Props extends TouchableOpacityProps {
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
