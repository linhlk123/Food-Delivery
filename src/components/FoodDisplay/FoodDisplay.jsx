import React from 'react'
import { StoreContext } from '../../context/StoreContext';
import FoodItem from '../FoodItem/FoodItem';
import './FoodDisplay.css'
import AddFood from '../AddFood/AddFood';
const FoodDisplay = () => {

    const { food_list } = React.useContext(StoreContext);

    const handleAddFood = async (formData) => {
        try {
            const response = await fetch('http://localhost:8080/food-delivery/foods', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                const newFood = await response.json();
                console.log('New food added:', newFood);
                // Optionally, you can update the local state or context to reflect the new food item
            } else {
                console.error('Failed to add food item');
            }
        } catch (error) {
            console.error('Error adding food item:', error);
        }
    };
  return (
    <div className='food-display' id='food-display'>
      <h2>Top dishes near you</h2>
      <AddFood onAddFood={handleAddFood} />
      <div className="food-display-list">
        {food_list.map((food_item, index) => (
            <FoodItem key={index} id={food_item._id} name={food_item.name} price={food_item.price} description={food_item.description} image={food_item.image}/>
        ))}
      </div>
    </div>
  )
}

export default FoodDisplay