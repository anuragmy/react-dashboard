import React from "react";
import { Dropdown } from "semantic-ui-react";
import { useMediaQuery, Grid } from "@material-ui/core";
import {
  InputGroup,
  IconButton,
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
    key: "Elliot Fu1",
    text: "Type 2",
    value: "Elliot Fu1",
  },
];

const Filter = ({ open, openSmallerSidebar, closeSmallerSidebar }) => {
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

          <IconButton
            icon={<Icon icon="bars" />}
            onClick={openSmallerSidebar}
            close={closeSmallerSidebar}
            style={{ marginRight: 'auto', display: sm && "none", width: 'min-content' }}
          />
          <span style={{ fontSize: 28, marginRight: "auto", float: 'left' }}>Tasks</span>

          <ButtonToolbar style={{ marginLeft: 10, marginTop: 10 }}>
            <Button appearance="subtle" active>
              Table
            </Button>
            <Button appearance="subtle">Board</Button>
          </ButtonToolbar>
          <Button color="orange" style={{ margin: 10 }}>
            Start Queue
          </Button>
          <Button color="orange" style={{ margin: 10 }} onClick={open}>
            Create Task
          </Button>
        </div>
        <Divider style={{ margin: 0 }} />
      </div>
      <br />
      <span>Filter By</span>
      <Grid
        item
        container
        spacing={2}
        style={{
          marginTop: 20,
          fontSize: 14,
        }}
      >
        <Grid item xs={6} sm={4} md={3}>
          <Dropdown
            inline
            style={{ marginLeft: 20 }}
            options={friendOptions}
            defaultValue={friendOptions[0].value}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Dropdown
            inline
            options={types}
            style={{ marginLeft: 20 }}
            defaultValue={types[0].value}
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <Dropdown
            inline
            style={{ marginLeft: 20 }}
            options={friendOptions}
            defaultValue={friendOptions[0].value}
          />
        </Grid>
        <Grid
          item
          xs={6}
          sm={4}
          md={3}

          style={{ marginRight: 'auto', marginLeft: 'auto' }}
        >
          <InputGroup>
            <Input placeholder="Search for a task" />
            <InputGroup.Addon>
              <Icon icon="search" />
            </InputGroup.Addon>
          </InputGroup>
        </Grid>
      </Grid>
      <TabularData />
    </div>
  );
};

export default Filter;
