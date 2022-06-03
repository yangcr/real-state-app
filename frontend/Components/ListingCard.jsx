import React from "react";
import { Button, Card } from "antd";
import ListingCardStyles from "./ListingCard.module.css";
import CardCharacteristics from "./CardCharacteristics";

const CardListing = () => (
  <>
    <Card
      hoverable
      style={{
        width: 350,
      }}
      cover={
        <img
          alt="example"
          src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170"
        />
      }
    >
      <div className={ListingCardStyles.cardContent}>
        <div >
          <p className={ListingCardStyles.headerSubtitle}>
            Ciudad Autónoma de Buenos Aires
          </p>
          <div className={ListingCardStyles.cardHeader}>
            <h2 className={ListingCardStyles.headerTitle}>Departamento 3 ambientes</h2>
            <p className={ListingCardStyles.cardPrice}>$135.000</p>
          </div>
        </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim quo, ex
            aliquid eum blanditiis et fuga officia reiciendis totam dolorem
            cupiditate maiores maxime provident voluptates! Ab amet possimus
            deserunt facere?.
          </p>
<CardCharacteristics/>
      </div>
    </Card>
  </>
);

export default CardListing;
