import React from "react";
import ListingCard from "../ListingCard/ListingCard.jsx"
import styles from "./ListingContainerStyles.module.css";
import PropertiesArray from "./PropertiesMock.js";

function ListingContainer() {
  const [properties, setProperties] = React.useState([...PropertiesArray]);
  return (
    <>
      <div className={styles.listingContainer}>
        {properties.map((property) => {
          return <>
            <ListingCard
              sku={property.sku}
              characteristics={property.characteristics}
              property={property}
              cardLocation={property.cardLocation}
              cardTitle={property.cardTitle}
              imageSource={property.imageSource}
              cardPrice={property.price}
              productDescription={property.productDescription}
              squareMeters={property.squareMeters} />;
          </>
        })}
      </div>
    </>
  );
}

export default ListingContainer;
