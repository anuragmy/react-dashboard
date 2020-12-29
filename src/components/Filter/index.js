import React from "react";
import { Dropdown } from "semantic-ui-react";
import { InputGroup, Input, Icon, Button, Divider } from "rsuite";

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
  return (
    <div>
      <div>
        <div
          style={{
            display: "flex",
            justifyContent: "flex-end",
            padding: 10,
            marginLeft: 30,
            marginRight: 30,
          }}
        >
          <span style={{ fontSize: 28, marginRight: "auto" }}>Tasks</span>
          <Button color="orange" style={{ marginRight: 10 }}>
            Start Queue
          </Button>
          <Button
            color="orange"
            style={{ padding: 10 }}
            onClick={open}
            appearance="ghost"
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
    </div>
  );
};

export default Filter;
