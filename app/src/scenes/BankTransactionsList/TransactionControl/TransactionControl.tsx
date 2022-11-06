import styled from "styled-components";
import { Input } from "../../../components/atoms/Input/Input";
import { ColorPistachio } from "../../../styles/colors";
import { AddTransactionForm } from "./AddTransactionFrom/AddTransactionForm";

const StyledTransactionControl = styled.div`
  display: flex;
  flex-direction: row;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
  background-color: ${ColorPistachio};
  justify-content: space-between;
  width: 90vw;
  & > * {
    margin: 0.5rem 5rem;
  }
`;

const StyledTransactionControler = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.75rem 0.75rem;
  hight: 100%;
`;

interface Props {
  onFilterChange: Function;
  handleSubmit: Function;
  refresh: Function;
}

export const TransactionControl = ({ onFilterChange, handleSubmit }: Props) => {
  return (
    <StyledTransactionControl>
      <StyledTransactionControler>
        <div>Balance</div>
        <Input
          placeholder={"Search by beneficiary..."}
          onChange={(event) => onFilterChange(event.target.value)}
        />
      </StyledTransactionControler>

      <StyledTransactionControler>
        Add Transaction
        <AddTransactionForm
          onSubmit={async (values: any) => {
            handleSubmit({
              id: 0,
              amount: values.amount,
              beneficiary: "-",
              account: values.account,
              address: values.address || "-",
              date: new Date().toLocaleString("en-US") + "",
              description: values.description || "-",
            });
          }}
        />
      </StyledTransactionControler>
    </StyledTransactionControl>
  );
};
