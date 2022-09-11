import React, {useState} from "react";
import { Input, Select, Form, Radio } from "antd";
import styles from "./SearchBox.module.css";
const { Option } = Select;

function SearchBox() {

  const options = [
    {
      label: 'ALL',
      value: 'all',
    },
    {
      label: 'BUY',
      value: 'buy',
    },
    {
      label: 'RENT',
      value: 'rent',
    },
  
  ];

  const [operationType, setOperationType] = useState("all");

  return (
    <div className={styles.searchBoxComponent}>
      <Radio.Group
        options={options}
        optionType="button"
        buttonStyle="solid"
        onChange={(e) => setOperationType(e.target.value)}
        className={styles.operationRadioGroup}
      />
      <Form layout="vertical" className={[styles.formContainer, operationType == "buy" ? styles.containerBuy : operationType == "rent" ? styles.containerRent : styles.containerAll]}>
        <div className={styles.formGroup}>
          <Form.Item label="Property type">
            <Select
              defaultValue="all"
              className={styles.select}
            >
              <Option value="all">All</Option>
              <Option value="house">House</Option>
              <Option value="apartment">Apartment</Option>
            </Select>
          </Form.Item>
        </div>
        <div className={styles.formGroup}>
          <Form.Item label="Min. price">
            <Input
              placeholder="e.g: 50.000"
              allowClear
              type="number"
              className={styles.searchInput}
            />
          </Form.Item>

          <Form.Item label="Max. price" className={styles.formLabel}>
            <Input
              placeholder="e.g: 500.000"
              allowClear
              type="number"
              className={styles.searchInput}
            />
          </Form.Item>
        </div>

        <Form.Item label="Min. floor area (in m2)">
          <Input
            placeholder="e.g: 75"
            allowClear
            type="number"
            className={styles.searchInput}
          />
        </Form.Item>
      </Form>
    </div>
  );
}

export default SearchBox;
