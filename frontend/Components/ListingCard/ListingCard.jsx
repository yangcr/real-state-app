import React from "react";
import { Card } from "antd";
import styles from "./ListingCard.module.css";
import CardCharacteristics from "./CardCharacteristics";

const CardListing = ({ sku, characteristics, cardLocation, cardTitle, imageSource, cardPrice, productDescription, squareMeters }) => (
    <Card
      sku={sku}
      hoverable
      className={styles.container}
      cover={
        <img
          alt="image of the living room of a house"
          src={imageSource}
        />
      }
    >
      <div className={styles.content}>
        <div>
          <p className={styles.subtitle}>
            {cardLocation}
          </p>
          <div className={styles.header}>
            <h2 className={styles.title}>
              {cardTitle}
            </h2>
            <p className={styles.price}>{cardPrice}</p>
          </div>
        </div>
        <h3 className={styles.squareMeters}>{squareMeters}</h3>
        <p>
          {productDescription}
        </p>
        <CardCharacteristics characteristics={characteristics} />
      </div>
    </Card>
);

export default CardListing;
