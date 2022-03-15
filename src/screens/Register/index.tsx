import React, { useState } from "react";
import { Alert, Keyboard, Modal, TouchableWithoutFeedback } from "react-native";
import { useForm } from "react-hook-form";
import * as Yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Button from "../../components/Form/Button/Index";
import CategorySelect from "../../components/Form/CategorySelectButton";
import InputForm from "../../components/Form/InputForm";
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

interface RegisterForm {
  [name: string]: string;
}

const schemaValidation = Yup.object().shape({
  name: Yup.string().required("Nome é obrigatório"),
  amount: Yup.number()
    .typeError("O valor deve ser númerico")
    .required("Valor é obrigatório")
    .positive("O Valor deve ser positivo"),
});
const Register: React.FC = () => {
  const [current, setCurrent] = useState<"up" | "down" | null>();
  const [category, setCategory] = useState<ICategory>({
    name: "Categoria",
    key: "category",
  });
  const [categoryModal, setCategoryModal] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schemaValidation),
  });
  const handleCurrent = (type: "up" | "down") => {
    if (type === "down") setCurrent("down");
    else setCurrent("up");
  };

  const validateForm = () => {
    if (category.key === "category") {
      return { error: "Selecione a categoria" };
    } else if (!current) {
      return { error: "Selecione um tipo" };
    }

    return {};
  };

  const handleRegister = (form: RegisterForm) => {
    const isValidForm = validateForm();

    if (isValidForm?.error) {
      Alert.alert("Ops!", isValidForm.error);
    } else {
      const data = {
        name: form.name,
        amount: form.amount,
        category: category.key,
        current,
      };

      console.log(data);
    }
  };

  const onSubmit = () => handleSubmit(handleRegister);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <Container>
        <Header>
          <Title>Cadastro</Title>
        </Header>
        <Form>
          <Fields>
            <InputForm
              control={control}
              autoCorrect={false}
              autoCapitalize="words"
              name="name"
              placeholder="Nome"
              error={errors.name && errors.name.message}
            />
            <InputForm
              control={control}
              name="amount"
              keyboardType="numeric"
              placeholder="Valor"
              error={errors.amount && errors.amount.message}
            />
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
            <CategorySelect
              title={category.name}
              onPress={() => setCategoryModal(true)}
            />
          </Fields>
          <Button
            title="Salvar"
            onPress={onSubmit}
            rippleColor={"grey"}
          />
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
    </TouchableWithoutFeedback>
  );
};

export default Register;
