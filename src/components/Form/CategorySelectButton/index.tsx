import React from "react";
import { TouchableOpacityProps } from "react-native";
import { RectButtonProps } from "react-native-gesture-handler";

import { Container, Category, Icon } from "./styles";

interface Props extends RectButtonProps {
  title: string;
}

const CategorySelectButton: React.FC<Props> = ({ title, ...rest }) => {
  return (
    <Container {...rest} activeOpacity={0.7}>
      <Category>{title}</Category>
      <Icon name="chevron-down" />
    </Container>
  );
};

export default CategorySelectButton;
