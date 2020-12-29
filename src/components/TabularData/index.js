/* eslint-disable no-unused-vars */
import React from "react";
import { Table, Checkbox } from "rsuite";
import { data } from "./data";

const TabularData = () => {
  const { Column, HeaderCell, Cell } = Table;
  const [state, setState] = React.useState({
    data,
    sortColumn: "",
    loading: false,
    sortType: "",
  });

  const getData = () => {
    const { data, sortColumn, sortType } = state;

    if (sortColumn && sortType) {
      return data.sort((a, b) => {
        let x = a[sortColumn];
        let y = b[sortColumn];
        if (typeof x === "string") {
          x = x.charCodeAt();
        }
        if (typeof y === "string") {
          y = y.charCodeAt();
        }
        if (sortType === "asc") {
          return x - y;
        } else {
          return y - x;
        }
      });
    }
    return data;
  };

  const handleSortColumn = (sortColumn, sortType) => {
    setState({
      loading: true,
    });

    setTimeout(() => {
      setState({
        sortColumn,
        sortType,
        loading: false,
      });
    }, 500);
  };
  return (
    <Table
      style={{ marginTop: 10 }}
      height={420}
      data={data}
      sortColumn={state.sortColumn}
      sortType={state.sortType}
      onSortColumn={handleSortColumn}
      loading={state.loading}
      onRowClick={(data) => {
        console.log(data);
      }}
    >
      <Column width={70} align="center" fixed sortable>
        <HeaderCell>
          <Checkbox />
        </HeaderCell>
        <Cell dataKey="id" />
      </Column>

      <Column width={130} fixed sortable>
        <HeaderCell>First Name</HeaderCell>
        <Cell dataKey="firstName" />
      </Column>

      <Column width={130} sortable>
        <HeaderCell>Last Name</HeaderCell>
        <Cell dataKey="lastName" />
      </Column>

      <Column width={200} sortable>
        <HeaderCell>City</HeaderCell>
        <Cell dataKey="city" />
      </Column>

      <Column width={200}>
        <HeaderCell>Company Name</HeaderCell>
        <Cell dataKey="companyName" />
      </Column>
    </Table>
  );
};

export default TabularData;
