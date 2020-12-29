/* eslint-disable no-unused-vars */
import React from "react";
import {
  FormGroup,
  Form,
  HelpBlock,
  ControlLabel,
  FormControl,
  SelectPicker,
  DatePicker,
} from "rsuite";

const FormSection = () => {
  const data = [
    {
      value: "todo",
      label: "Todo",
      key: 1,
    },
  ];

  const dataAssignedTo = [
    {
      value: "abc",
      label: "ABC abc@abc.com",
      key: 1,
    },
  ];

  const dueDateData = [
    {
      value: "Tomorrow",
      label: "Tomorrow",
      key: 1,
    },
  ];
  const [type, setType] = React.useState(data.label);
  const [text, setText] = React.useState("");
  const [assignedTo, setAssignedTo] = React.useState(dataAssignedTo.label);
  const [dueDate, setDueDate] = React.useState(dueDateData.label);

  const changeType = (value) => setType(value);
  const changeTypeAssignedGroup = (value) => setAssignedTo(value);
  const changeDueDate = (value) => setDueDate(value);
  const changeTitle = (value) => {
    if (
      !value.includes("1234567890") ||
      !value.includes("/?.,><!@#$%^&*()_+=-")
    )
      setText(value);
    console.log(typeof value);
  };

  return (
    <Form>
      <FormGroup>
        <ControlLabel>Title</ControlLabel>
        <FormControl
          name="name"
          style={{ width: "-webkit-fill-available" }}
          value={text}
          onChange={changeTitle}
        />
        <HelpBlock>Required</HelpBlock>
      </FormGroup>
      <FormGroup>
        <ControlLabel>Type</ControlLabel>
        <SelectPicker
          defaultValue={type}
          data={data}
          style={{ width: "-webkit-fill-available" }}
          onChange={changeType}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Associate Goup</ControlLabel>
        <SelectPicker
          defaultValue={type}
          data={data}
          style={{ width: "-webkit-fill-available" }}
          onChange={changeType}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Assigned To</ControlLabel>
        <SelectPicker
          defaultValue={assignedTo}
          data={dataAssignedTo}
          style={{ width: "-webkit-fill-available" }}
          onChange={changeTypeAssignedGroup}
        />
      </FormGroup>
      <FormGroup>
        <ControlLabel>Queue</ControlLabel>
        <SelectPicker
          defaultValue={type}
          data={data}
          style={{ width: "-webkit-fill-available" }}
          onChange={changeTypeAssignedGroup}
        />
      </FormGroup>

      <FormGroup>
        <ControlLabel>Due Date</ControlLabel>
        <div>
          <SelectPicker
            defaultValue={dueDate}
            data={dueDateData}
            style={{ width: 150 }}
            onChange={changeTypeAssignedGroup}
          />
          <span>@</span>
          <DatePicker
            format="HH:mm:ss"
            ranges={[
              {
                label: "Now",
                value: new Date(),
              },
            ]}
          />
        </div>
      </FormGroup>
    </Form>
  );
};

export default FormSection;
