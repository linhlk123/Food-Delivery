import React from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'
const FoodDisplay = () => {

    const { food_list } = React.useContext(StoreContext);

  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <div className="food-display-list">
        {food_list.map((food_item, index) => (
            <FoodItem key={index} id={food_item._id} name={food_item.name} price={food_item.price} description={food_item.description} image={food_item.image}/>
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay