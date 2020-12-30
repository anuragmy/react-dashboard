import React from "react";
import { Dropdown, Menu, Divider, Header } from "semantic-ui-react";
import { Drawer, Button } from "rsuite";

const Sidebar = ({ open, close }) => {
  const [activeItem, setActiveItem] = React.useState("Open Tasks");

  const handleItemClick = (e) => setActiveItem(e.target.innerText);

  return (
    <Drawer backdrop show onHide={close}>
      <Drawer.Body>
        <Menu
          secondary
          vertical
          style={{ textAlign: "left", paddingLeft: 10, marginTop: 10 }}
        >
          <Menu.Item
            name="Open Tasks"
            active={activeItem === "Open Tasks"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Due today"
            active={activeItem === "Due today"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Due this week"
            active={activeItem === "Due this week"}
            onClick={handleItemClick}
          />
          <Menu.Item
            name="Overdue"
            active={activeItem === "Overdue"}
            onClick={handleItemClick}
          />
          <Dropdown item text="More">
            <Dropdown.Menu>
              <Dropdown.Header>Text Size</Dropdown.Header>
              <Dropdown.Item>Small</Dropdown.Item>
              <Dropdown.Item>Medium</Dropdown.Item>
              <Dropdown.Item>Large</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <Divider />
          <Header
            as="h4"
            style={{ cursor: "pointer", color: "#40a9ff", paddingLeft: 10 }}
          >
            + Add a queue
          </Header>
        </Menu>
      </Drawer.Body>
      <Drawer.Footer>
        <Button onClick={close} appearance="primary">
          Confirm
        </Button>
        <Button onClick={close} appearance="subtle">
          Cancel
        </Button>
      </Drawer.Footer>
      <style jsx="true">
        {`
          .rs-drawer-header {
            margin: 0px;
            padding: 20px;
          }
        `}
      </style>
    </Drawer>
  );
};

export default Sidebar;
