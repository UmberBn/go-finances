import React, { useState } from "react";
import Button from "../../components/Form/Button/Index";
import Input from "../../components/Form/Input";
import TransactionButton from "../../components/Form/TransactionButton";

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
        </Fields>
        <Button title="Salvar" />
      </Form>
    </Container>
  );
};

export default Register;
