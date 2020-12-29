import React from "react";
import { Drawer, Button } from "rsuite";
import FormSection from "../FormSection";

const SideDrawer = ({ close }) => {
  return (
    <Drawer backdrop show onHide={close}>
      <Drawer.Header>
        <Drawer.Title>Create Task</Drawer.Title>
      </Drawer.Header>
      <Drawer.Body>
        <FormSection />
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

export default SideDrawer;
