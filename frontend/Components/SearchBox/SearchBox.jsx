import React from "react";
import { Input, Select, Form, Button } from "antd";
import styles from "./SearchBox.module.css";
import { useState } from "react";
const { Option } = Select;

function SearchBox() {

  function selectTransactionType(value) {
    setTransactionType(value);
  }
  const [operationType, setOperationType] = useState("all");

  return (
    <>
      <Button className={[styles.buttonForm, styles.buttonBuy]}>
        Buy
      </Button>
      <Button className={[styles.buttonForm, styles.buttonRent]}>
        Rent
      </Button>
      <Button className={[styles.buttonForm, styles.buttonAll]}>
        All
      </Button>
      <Form layout="vertical" className={[styles.container, operationType == "buy" ? styles.containerBuy : operationType == "rent" ? styles.containerRent : styles.containerAll]}>
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
