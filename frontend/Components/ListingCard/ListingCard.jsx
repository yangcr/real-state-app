import React from "react";
import { Card } from "antd";
import styles from "./ListingCard.module.css";
import CardCharacteristics from "./CardCharacteristics";

const CardListing = ({ sku, characteristics, cardLocation, cardTitle, imageSource, cardPrice, productDescription, squareMeters }) => (
    <Card
      sku={sku}
      hoverable
      className={styles.cardContainer}
      cover={
        <img
          alt="image of the living room of a house"
          src={imageSource}
        />
      }
    >
      <div className={styles.cardContent}>
        <div>
          <p className={styles.headerSubtitle}>
            {cardLocation}
          </p>
          <div className={styles.cardHeader}>
            <h2 className={styles.headerTitle}>
              {cardTitle}
            </h2>
            <p className={styles.cardPrice}>{cardPrice}</p>
          </div>
        </div>
        <h3 className={styles.cardSquareMeters}>{squareMeters}</h3>
        <p>
          {productDescription}
        </p>
        <CardCharacteristics characteristics={characteristics} />
      </div>
    </Card>
);

export default CardListing;
