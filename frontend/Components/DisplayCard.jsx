import React from 'react'
import DisplayCardStyles from "./DisplayCard.module.css"
import Button from '@mui/material/Button';

function DisplayCard() {
  return (
    <div className={DisplayCardStyles.displayCard__container}>
<div className={DisplayCardStyles.displayCard__image__container}><img src="https://images.unsplash.com/photo-1613545325278-f24b0cae1224?crop=entropy&cs=tinysrgb&fm=jpg&ixlib=rb-1.2.1&q=80&raw_url=true&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170" className={DisplayCardStyles.displayCard__image}/></div>

<div className={DisplayCardStyles.displayCard__header}>
  <div className={DisplayCardStyles.displayCard__title}>
    <h4>
      LOREM IPSUM
    </h4>
    <p>
      Ciudad Autónoma de Buenos Aires
    </p>
  </div>

  <div className={DisplayCardStyles.displayCard__price}>
    <p>$135.000</p>
  </div>
</div>

<div className={DisplayCardStyles.displayCard__body}>
  <p>
    lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
  </p>
  <div className={DisplayCardStyles.displayCard__characteristics}>
    <p>2-5 rooms</p>
    <p>exclusive location</p>
    <p>105 m2</p>
    <p>1 kitchen</p>
    <p>Swimming pool</p>
    <p>2 bathrooms</p>
  </div>
</div>
<Button variant="text">View Property</Button>

</div>
  )
}

export default DisplayCard