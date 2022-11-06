import styled from "styled-components";
import { ColorMalachite, ColorPistachio } from "../../../styles/colors";
import { format } from "date-fns";
import TransactionService, { Transaction } from "../../../api/request";
import { useState } from "react";
import { Paginator } from "./Paginator/Paginator";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash } from "@fortawesome/free-solid-svg-icons";

const StyledTable = styled.table`
  width: 80%;

  border-collapse: collapse;
  font-size: 0.75rem;
  th,
  td {
    padding: 1rem;
    text-align: left;
    border: 1px solid ${ColorPistachio};
  }
  tr:nth-child(even) {
    background-color: ${ColorPistachio}80;
  }
  tr:hover {
    background-color: ${ColorPistachio};
  }
  th {
    background-color: ${ColorMalachite};
    color: white;
  }
`;

interface Props {
  firstPageData: Transaction[];
  data: Transaction[];
  refresh: Function;
  deleteRow: Function;
  rowsPerPage: number;
}

export const Table = ({
  firstPageData,
  data,
  deleteRow,
  rowsPerPage,
  refresh,
}: Props) => {
  const [page, setPage] = useState(1);
  const [slicedData, setSlicedData] = useState<Transaction[]>([]);

  const onPageChange = (value: number) => {
    setPage(value);
    setSlicedData(data.slice((page - 1) * rowsPerPage, page * rowsPerPage));
  };
  return (
    <>
      <Paginator
        onChange={onPageChange}
        pageSize={rowsPerPage}
        total={data.length}
        current={page}
        range={rowsPerPage}
      />
      <StyledTable>
        <thead>
          <tr id="header">
            <th>#</th>
            <th>Amount</th>
            <th>Beneficiary</th>
            <th>Account</th>
            <th>Address</th>
            <th>Date</th>
            <th>Description</th>
            <th></th>
          </tr>
        </thead>

        <tbody>
          {(page === 1 ? firstPageData : slicedData).map(
            ({
              id,
              amount,
              beneficiary,
              account,
              address,
              date,
              description,
            }: Transaction) => (
              <tr id={id.toString()}>
                <td>{id + 1}</td>
                <td>{amount}</td>
                <td>{beneficiary}</td>
                <td>{account}</td>
                <td>{address}</td>
                <td>{format(new Date(date), "dd-MM-yyyy HH:mm")}</td>
                <td>{description}</td>
                <td>
                  <button
                    onClick={async () => {
                      try {
                        await TransactionService.remove(id);
                        alert("Transaction had been deleted");
                        refresh();
                      } catch (e) {
                        deleteRow(id);
                      }
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            )
          )}
        </tbody>
      </StyledTable>
    </>
  );
};
