import React from "react";
import { getBottomSpace } from "react-native-iphone-x-helper";
import HightligthCard from "../../components/HightligthCard";
import TransactionCard, {
  TransactionCardProps,
} from "../../components/TransactionCard";

import {
  Container,
  Header,
  UserWrapper,
  UserInfo,
  Photo,
  User,
  UserGreeting,
  UserName,
  Icon,
  HightligthCards,
  Transactions,
  Title,
  TransactionList,
  LogoutButton,
} from "./styles";

export interface DataListProps extends TransactionCardProps {
  id: number;
}

const Dashboard: React.FC = () => {
  const data: DataListProps[] = [
    {
      id: 1,
      title: "Desenvolvimento de site",
      type: "positive",
      amount: "R$ 12.000,00",
      category: {
        name: "Vendas",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: 2,
      title: "Alimentação",
      type: "negative",
      amount: "R$ 2.000,00",
      category: {
        name: "Alimentação",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
    {
      id: 3,
      title: "Aluguel",
      type: "positive",
      amount: "R$ 12.000,00",
      category: {
        name: "Casa",
        icon: "dollar-sign",
      },
      date: "13/04/2020",
    },
  ];
  return (
    <Container>
      <Header>
        <UserWrapper>
          <UserInfo>
            <Photo
              source={{
                uri: "https://avatars.githubusercontent.com/u/49960885?v=4",
              }}
            />
            <User>
              <UserGreeting>Olá,</UserGreeting>
              <UserName>Humberto</UserName>
            </User>
          </UserInfo>
          <LogoutButton onPress={() => {}}>
            <Icon name="power" />
          </LogoutButton>
        </UserWrapper>
      </Header>
      <HightligthCards>
        <HightligthCard
          title="Entradas"
          type="up"
          amount={"R$ 17.400,00"}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HightligthCard
          title="Saídas"
          type="down"
          amount={"R$ 17.400,00"}
          lastTransaction="Última entrada dia 13 de abril"
        />
        <HightligthCard
          title="Total"
          type="total"
          amount="R$ 17.400,00"
          lastTransaction="Última entrada dia 13 de abril"
        />
      </HightligthCards>
      <Transactions>
        <Title>Listagem</Title>
        <TransactionList
          data={data}
          keyExtractor={(item) => `${item.id}`}
          renderItem={({ item }) => <TransactionCard data={item} />}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{ paddingBottom: getBottomSpace() || 20 }}
        />
      </Transactions>
    </Container>
  );
};

export default Dashboard;
