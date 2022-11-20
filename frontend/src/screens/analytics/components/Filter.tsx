import "./Filter.less";
import { FC, useState } from "react";

import { Slider, Checkbox, Divider } from "antd";

const CheckboxGroup = Checkbox.Group;

const plainOptions = ["Male", "Female", "Unknown"];
const defaultCheckedList = ["Male", "Female", "Unknown"];

type Props = {
    changeIncludedGender: any;
    changeGreaterThenAge: any;
}

const Filter:FC<Props> = ({ changeIncludedGender, changeGreaterThenAge }) => {
  const [checkedList, setCheckedList] = useState(defaultCheckedList);
  const [indeterminate, setIndeterminate] = useState(true);
  const [checkAll, setCheckAll] = useState(false);

  const onChangeCheckbox = (checkedList: any) => {
    setCheckedList(checkedList)
    setIndeterminate(!!checkedList.length && checkedList.length < plainOptions.length)
    setCheckAll(checkedList.length === plainOptions.length)

    changeIncludedGender(checkedList);
  };

  const onCheckAllChange = (e: any) => {
    const checkedList = e.target.checked ? plainOptions : [];
    setCheckedList(checkedList)
    setIndeterminate(false)
    setCheckAll(e.target.checked)

    changeIncludedGender(checkedList);
  };

  const onChangeSilder = (value: any) => {
    changeGreaterThenAge(value);
  };

  return (
    <div className="filter_container pane">
      <div className="header">Filter</div>
      <h3>Gender</h3>
      <div style={{ width: 275, margin: 5 }}>
        <Checkbox
          indeterminate={indeterminate}
          onChange={onCheckAllChange}
          checked={checkAll}
        >
          Check all
        </Checkbox>
      </div>
      <br />
      <div style={{ width: 275, margin: 5 }}>
        <CheckboxGroup
          options={plainOptions}
          value={checkedList}
          onChange={onChangeCheckbox}
        />
      </div>
      <Divider />
      <h3>Age</h3>
      <Slider defaultValue={0} onChange={onChangeSilder} />
    </div>
  );
};

export default Filter;