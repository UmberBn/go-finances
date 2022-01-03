import React, { useState } from "react";
import { Category, Icon, Name, Separator, Footer } from "./styles";
import { Container, Header, Title } from "../Register/styles";
import { FlatList, Modal } from "react-native";
import { categories } from "../../utils/categories";
import Button from "../../components/Form/Button/Index";

export interface ICategory {
  key: string;
  name: string;
}
interface Props {
  category: string;
  setCategory: React.Dispatch<React.SetStateAction<ICategory>>;
  closeSelect: React.Dispatch<React.SetStateAction<boolean>>;
}
const SelectCategory: React.FC<Props> = ({
  category,
  setCategory,
  closeSelect,
}) => {
  return (
    <Container>
      <Header>
        <Title>Categoria</Title>
      </Header>
      <FlatList
        data={categories}
        style={{ flex: 1, width: "100%" }}
        keyExtractor={(item) => item.key}
        renderItem={({ item }) => (
          <Category
            onPress={() => setCategory({ name: item.name, key: item.key })}
            isActive={category === item.name}
          >
            <Icon name={item.icon} />
            <Name>{item.name}</Name>
          </Category>
        )}
        ItemSeparatorComponent={() => <Separator />}
      />
      <Footer>
        <Button title="Selecionar" onPress={() => closeSelect(false)} />
      </Footer>
    </Container>
  );
};

export default SelectCategory;
