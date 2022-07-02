import React from 'react'
import styles from "./CardCharacteristics.module.css";

function CardCharacteristics({ characteristics }) {
  return (
      <div className={styles.cardCharacteristics}>
        {characteristics.map((characteristic) => {
          return <p className={styles.characteristics}>{characteristic}</p>
        })}
      </div>

  )
}

export default CardCharacteristics