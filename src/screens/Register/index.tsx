import React, { useState } from "react";
import { Modal } from "react-native";
import Button from "../../components/Form/Button/Index";
import CategorySelect from "../../components/Form/CategorySelectButton";
import Input from "../../components/Form/Input";
import TransactionButton from "../../components/Form/TransactionButton";
import SelectCategory, { ICategory } from "../SelectCategory";

import {
  Container,
  Form,
  Header,
  Title,
  Fields,
  TransactionButtonsArea,
} from "./styles";

const Register: React.FC = () => {
  const [current, setCurrent] = useState<"up" | "down" | null>();
  const [category, setCategory] = useState<ICategory>({
    name: "Categoria",
    key: "category",
  });
  const [categoryModal, setCategoryModal] = useState(false);

  const handleCurrent = (type: "up" | "down") => {
    if (type === "down") setCurrent("down");
    else setCurrent("up");
  };
  return (
    <Container>
      <Header>
        <Title>Cadastro</Title>
      </Header>
      <Form>
        <Fields>
          <Input placeholder="Nome" />
          <Input placeholder="Valor" />
          <TransactionButtonsArea>
            <TransactionButton
              current={current === "up"}
              type="up"
              title="Income"
              onPress={() => handleCurrent("up")}
            />

            <TransactionButton
              current={current === "down"}
              type="down"
              title="Outcome"
              onPress={() => handleCurrent("down")}
            />
          </TransactionButtonsArea>
          <CategorySelect title={category.name} onPress={() => setCategoryModal(true)}/>
        </Fields>
        <Button title="Salvar" />
      </Form>
      <Modal
        visible={categoryModal}
        onRequestClose={() => setCategoryModal(false)}
      >
        <SelectCategory
          category={category.name}
          setCategory={setCategory}
          closeSelect={setCategoryModal}
        />
      </Modal>
    </Container>
  );
};

export default Register;
