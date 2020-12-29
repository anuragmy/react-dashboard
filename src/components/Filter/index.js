import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useMediaQuery } from "@material-ui/core";
import {
  InputGroup,
  Input,
  Icon,
  Button,
  Divider,
  ButtonToolbar,
} from "rsuite";
import TabularData from "../TabularData";

const friendOptions = [
  {
    key: "Jenny Hess",
    text: "Jenny Hess",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Elliot Fu",
    value: "Elliot Fu",
  },
];

const types = [
  {
    key: "Jenny Hess",
    text: "Type 1",
    value: "Jenny Hess",
  },
  {
    key: "Elliot Fu",
    text: "Type 1",
    value: "Elliot Fu",
  },
];

const Filter = ({ open }) => {
  const sm = useMediaQuery("(min-width:650px)");
  console.log(sm);
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            flexDirection: sm ? "row" : "column",
            padding: 10,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <span style={{ fontSize: 28, marginRight: "auto" }}>Tasks</span>
          <ButtonToolbar style={{ marginLeft: 10, marginTop: 10 }}>
            <Button appearance="subtle" active>
              Table
            </Button>
            <Button appearance="subtle">Board</Button>
          </ButtonToolbar>
          <Button
            color="orange"
            style={{
              marginRight: 10,
              width: "fit-content",
              marginTop: sm && 10,
              marginBottom: sm && 10,
            }}
          >
            Start Queue
          </Button>
          <Button
            color="orange"
            style={{
              marginRight: 10,
              width: "fit-content",
              marginTop: sm && 10,
              marginBottom: sm && 10,
            }}
            onClick={open}
          >
            Create Task
          </Button>
        </div>
        <Divider style={{ margin: 0 }} />
      </div>
      <div
        style={{
          marginTop: 20,
          display: "flex",
          justifyContent: "space-around",
          fontSize: 17,
        }}
      >
        <span>Filter By</span>
        <Dropdown
          inline
          style={{ marginLeft: 20 }}
          options={friendOptions}
          defaultValue={friendOptions[0].value}
        />

        <Dropdown
          inline
          options={types}
          style={{ marginLeft: 20 }}
          defaultValue={types[0].value}
        />

        <Dropdown
          inline
          style={{ marginLeft: 20 }}
          options={friendOptions}
          defaultValue={friendOptions[0].value}
        />
        <InputGroup style={{ width: 200 }}>
          <Input placeholder="Search for a task" />
          <InputGroup.Addon>
            <Icon icon="search" />
          </InputGroup.Addon>
        </InputGroup>
      </div>
      <TabularData />
    </div>
  );
};

export default Filter;
