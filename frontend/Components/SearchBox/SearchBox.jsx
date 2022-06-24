import React from "react";
import { Input, Select, Form } from "antd";
import styles from "./SearchBox.module.css";
const { Option } = Select;

function SearchBox() {
  return (
    <>
      <Form layout="vertical" className={styles.formContainer}>
        <div className={styles.formGroup}>
          <Form.Item label="Operation type">
            <Select
              defaultValue="all"
              className={styles.formSelect}
            >
              <Option value="all">All</Option>
              <Option value="buy">Buy</Option>
              <Option value="rent">Rent</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Property type">
            <Select
              defaultValue="all"
              className={styles.formSelect}
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

          <Form.Item label="Max. price">
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
    </>
  );
}

export default SearchBox;
