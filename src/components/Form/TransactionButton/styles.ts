import styled, { css } from "styled-components/native";
import { Feather } from "@expo/vector-icons";
import { RFValue } from "react-native-responsive-fontsize";
import { RectButton } from "react-native-gesture-handler";

type Props = {
  title?: string;
  type: "up" | "down";
  current: boolean;
};
export const Container = styled(RectButton)<Props>`
  width: 48%;

  flex-direction: row;
  align-items: center;
  justify-content: center;

  border: 1.5px solid ${({ theme }) => theme.colors.text};
  border-radius: 5px;

  padding: 16px;

  ${({ current, theme, type }) =>
    current &&
    type === "up" &&
    css`
      background-color: ${theme.colors.success_light};
      border-width: 0px;
    `}

  ${({ current, theme, type }) =>
    current &&
    type === "down" &&
    css`
      background-color: ${theme.colors.attention_light};
      border-width: 0px;
    `}
`;

export const Icon = styled(Feather)<Props>`
  font-size: ${RFValue(24)}px;
  color: ${({ theme, type }) =>
    type === "down" ? theme.colors.attention : theme.colors.success};
  margin-right: 12px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.fonts.regular};
  font-size: ${RFValue(14)}px;
`;
