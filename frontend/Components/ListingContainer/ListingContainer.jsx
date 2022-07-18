import React from "react";
import ListingCard from "../ListingCard/ListingCard.jsx"
import styles from "./ListingContainerStyles.module.css";
import propertiesMock from "../../utils/propertiesMock.json"

function ListingContainer() {
  return (
    
      <div className={styles.listingContainer}>
        {propertiesMock.map((property) => {
          return <>
            <ListingCard
              key={property.sku}
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
    
  );
}

export default ListingContainer;
