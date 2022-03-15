import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

interface IActiveCategory {
  isActive: boolean;
}

export const Category = styled(RectButton)<IActiveCategory>`
  width: 100%;
  padding: ${RFValue(15)}px;

  flex-direction: row;
  align-items: center;

  ${({ isActive, theme }) =>
    isActive &&
    css`
      background-color: ${theme.colors.secondary_light};
    `}
`;

export const Icon = styled(Feather)`
  font-size: ${RFValue(28)}px;
  margin-right: 16px;
`;

export const Name = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;

export const Separator = styled.View`
  height: 1px;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.text};
`;

export const Footer = styled.View`
  width: 100%;
  padding: 24px;
`;
