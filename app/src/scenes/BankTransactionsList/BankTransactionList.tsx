import { useEffect, useState } from "react";
import TransactionService, { Transaction } from "../../api/request";
import { Table } from "./Table/Table";
import { MainLayout } from "../../layout/MainLayout/MainLayout";
import { TransactionControl } from "./TransactionControl/TransactionControl";

export const BankTransactionsList = () => {
  const [transactions, setTransactions] = useState<[] | Transaction[]>([]);
  const [filteredTransactions, setFilteredTransactions] = useState<
    [] | Transaction[]
  >([]);

  useEffect(() => {
    (async () => {
      const bankTransactions = await TransactionService.getAll();
      setTransactions(bankTransactions);
      setFilteredTransactions(bankTransactions);
    })();
  }, []);

  const filterTransactionByBeneficient = (value: string) => {
    if (value) {
      const filteredBankTransactions = transactions.filter((transaction) =>
        transaction.beneficiary.toLowerCase().includes(value.toLowerCase())
      );
      setFilteredTransactions(filteredBankTransactions);
    } else {
      setFilteredTransactions(transactions);
    }
  };

  const refresh = async () => {
    setFilteredTransactions(await TransactionService.getAll());
  };

  const addTransaction = async (values: any) => {
    try {
      setFilteredTransactions([
        ...filteredTransactions,
        {
          ...values,
          id: filteredTransactions[filteredTransactions.length - 1].id + 1,
        },
      ]);

      alert("Transaction added");
    } catch (e) {
      alert("Adding transaction error");
    }
  };

  const deleteTransaction = (id: number) => {
    try {
      const transactionsafterDeleting =
        filteredTransactions.filter((transaction) => transaction.id !== id) ||
        [];
      setFilteredTransactions([...transactionsafterDeleting]);

      alert("Transaction deleted");
    } catch (e) {
      alert("Deleting transaction error");
    }
  };

  return (
    <MainLayout>
      <TransactionControl
        onFilterChange={filterTransactionByBeneficient}
        refresh={refresh}
        handleSubmit={addTransaction}
      />
      <Table
        data={filteredTransactions}
        firstPageData={filteredTransactions.slice(0, 20)}
        rowsPerPage={20}
        refresh={refresh}
        deleteRow={deleteTransaction}
      />
    </MainLayout>
  );
};
