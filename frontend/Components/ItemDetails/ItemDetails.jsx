import React from "react";
import CardCharacteristics from "../ListingCard/CardCharacteristics";
import ItemDetailsGallery from "./ItemDetailsGallery";

function ItemDetails() {
  return (
    <>
      <ItemDetailsGallery />

      <div>
        <h1>property title</h1>
        <CardCharacteristics />
        <h4>Description:</h4>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi, accusamus deserunt doloribus quo fugit itaque ratione. Id dicta molestias suscipit quis? Atque hic cumque ducimus expedita assumenda, beatae enim maxime.
        Nesciunt unde, aut aspernatur sint repellat cum neque eius quisquam iste praesentium eos similique, ipsum vitae alias rem pariatur expedita maiores sunt! Modi possimus dolore quidem, saepe maxime eaque laboriosam!
        Mollitia ad aperiam provident laudantium rem fugit cumque molestiae? Debitis corrupti optio quasi consectetur, ratione hic temporibus, quaerat obcaecati expedita commodi possimus magni voluptatibus tempore cumque ad, nam unde quam!</p>
      </div>
    </>
  );
}

export default ItemDetails;