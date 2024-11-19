import React, { useState } from 'react';
import './App.css';

// Define the shopping items (same as before)
const shoppingItems = [
  { id: 1, name: "Soup of the Day", price: 6, category: "Lunch" },
  { id: 2, name: "Grilled Cheese", price: 6.5, category: "Lunch" },
  { id: 3, name: "Turkey and Cheddar ON 3 Grain French Country Bread", price: 7.5, category: "Lunch" },
  { id: 4, name: "Herbed Tuna Salad Sandwich on Marble Rye", price: 7.5, category: "Lunch" },
  { id: 5, name: "Moroccan Chickpea Wrap", price: 7.5, category: "Lunch" },
  { id: 6, name: "Tuscan Pasta Salad", price: 4, category: "Lunch" },
  { id: 7, name: "Egg Salad", price: 4, category: "Lunch" },
  { id: 8, name: "Herbed Tuna Salad", price: 5, category: "Lunch" },
  { id: 9, name: "Fresh Fruit Medley", price: 4.5, category: "Lunch" },
  { id: 10, name: "Roast Beef Onion Dip Sandwich", price: 8, category: "Lunch" },
  { id: 11, name: "Chef Salad", price: 7.5, category: "Lunch" },
  { id: 12, name: "Caesar Salad w/ Grilled Chicken", price: 7.5, category: "Lunch" },
  { id: 13, name: "Green Goddess Chicken Salad and Soup Combo", price: 10, category: "Lunch" },
  { id: 14, name: "Chocolate Chip Cookie", price: 1.5, category: "Pastry" },
  { id: 15, name: "Oatmeal Apple Cranberry Cookie", price: 1.5, category: "Pastry" },
  { id: 16, name: "Muffin", price: 3.25, category: "Pastry" },
  { id: 17, name: "Danish", price: 4, category: "Pastry" },
  { id: 18, name: "Chocolate Croissant", price: 4, category: "Pastry" },
  { id: 19, name: "Almond Croissant", price: 4.25, category: "Pastry" },
  { id: 20, name: "Lemon Bar", price: 2.25, category: "Sweets" },
  { id: 21, name: "Cheesecake", price: 5, category: "Sweets" },
  { id: 22, name: "Strawberries", price: 3, category: "Sweets" },
  { id: 23, name: "Espresso, 4oz", price: 2.5, category: "Specialty Coffee" },
  { id: 24, name: "Double Espresso, 4oz", price: 3.25, category: "Specialty Coffee" },
  { id: 25, name: "Macchiato, 4oz", price: 4, category: "Specialty Coffee" },
  { id: 26, name: "Cortado, 4oz", price: 4, category: "Specialty Coffee" },
  { id: 27, name: "Cappuccino, 12oz", price: 4.25, category: "Specialty Coffee" },
  { id: 28, name: "Cappuccino, 16oz", price: 4.75, category: "Specialty Coffee" },
  { id: 29, name: "Americano, 12oz", price: 3.75, category: "Specialty Coffee" },
  { id: 30, name: "Americano, 16oz", price: 4.25, category: "Specialty Coffee" },
  { id: 31, name: "Latte, 12oz", price: 4.5, category: "Specialty Coffee" },
  { id: 32, name: "Latte, 16oz", price: 5, category: "Specialty Coffee" },
  { id: 33, name: "Mocha, 12oz", price: 5, category: "Specialty Coffee" },
  { id: 34, name: "Mocha, 16oz", price: 5.5, category: "Specialty Coffee" },
  { id: 35, name: "Cold Brew, 16oz", price: 4, category: "Specialty Coffee" },
  { id: 36, name: "Harney and Sons Hot Tea, 12oz", price: 2.5, category: "Teas" },
  { id: 37, name: "Harney and Sons Hot Tea, 16oz", price: 3, category: "Teas" },
  { id: 38, name: "Iced Tea, 16oz", price: 3, category: "Teas" },
  { id: 39, name: "Matcha Latte, 12oz", price: 4.5, category: "Teas" },
  { id: 40, name: "Matcha Latte, 16oz", price: 5, category: "Teas" },
  { id: 41, name: "Chai Latte, 12oz", price: 4.5, category: "Teas" },
  { id: 42, name: "Chai Latte, 16oz", price: 5, category: "Teas" },
  { id: 43, name: "Red Eye Chai Latte, 12oz", price: 5.5, category: "Teas" },
  { id: 44, name: "Red Eye Chai Latte, 16oz", price: 6, category: "Teas" },
  { id: 45, name: "One World Roasters - Yale Blend, 12oz", price: 2.5, category: "House" },
  { id: 46, name: "One World Roasters - Yale Blend, 16oz", price: 3, category: "House" },
  { id: 47, name: "Iced Coffee, 16oz", price: 3, category: "House" },
  { id: 48, name: "Red Eye, 12oz", price: 3.5, category: "House" },
  { id: 49, name: "Red Eye, 16oz", price: 4, category: "House" },
  { id: 50, name: "Deep River Chips, Zesty Jalapeño", price: 2.25, category: "Snacks" },
  { id: 51, name: "Deep River Chips, Salt and Cracked Pepper", price: 2.25, category: "Snacks" },
  { id: 52, name: "Deep River Chips, Sour Cream and Onion", price: 2.25, category: "Snacks" },
  { id: 53, name: "Cape Cod Chips", price: 1.5, category: "Snacks" },
  { id: 54, name: "Pirate's Booty", price: 1, category: "Snacks" },
  { id: 55, name: "Rold Gold Minis", price: 1.5, category: "Snacks" },
  { id: 56, name: "Lesser Evil Popcorn", price: 1.5, category: "Snacks" },
  { id: 57, name: "Sun Chips, Original", price: 2.25, category: "Snacks" },
  { id: 58, name: "Terra Chips, Sweet Potato", price: 2.25, category: "Snacks" },
  { id: 59, name: "Good Crisp, Original", price: 2.5, category: "Snacks" },
  { id: 60, name: "Good Crisp, Sour Cream and Onion", price: 2.5, category: "Snacks" },
  { id: 61, name: "Clif Bar, Chocolate Brownie", price: 3, category: "Snacks" },
  { id: 62, name: "Clif Bar, Blueberry Almond Crisp", price: 3, category: "Snacks" },
  { id: 63, name: "Clif Bar, Crunchy Peanut Butter", price: 3, category: "Snacks" },
  { id: 64, name: "Clif Bar, Chocolate Chip", price: 3, category: "Snacks" },
  { id: 65, name: "RX Bar, Coconut Chocolate", price: 3.5, category: "Snacks" },
  { id: 66, name: "RX Bar, Vanilla Oat", price: 3.5, category: "Snacks" },
  { id: 67, name: "RX Bar, Honey Cinnamon Peanut Butter", price: 3.5, category: "Snacks" },
  { id: 68, name: "RX Bar, Peanut Butter Chocolate", price: 3.5, category: "Snacks" },
  { id: 69, name: "Swoffle, French Vanilla", price: 2.8, category: "Snacks" },
  { id: 70, name: "Swoffle, Caramel", price: 2.8, category: "Snacks" },
  { id: 71, name: "Justin's, Milk Chocolate", price: 2.8, category: "Snacks" },
  { id: 72, name: "Justin's, Dark Chocolate", price: 2.8, category: "Snacks" },
  { id: 73, name: "Biscoff", price: 1, category: "Snacks" },
  { id: 74, name: "Nature's Bakery, Original Fig", price: 2.5, category: "Snacks" },
  { id: 75, name: "Nature's Bakery, Blueberry", price: 2.5, category: "Snacks" },
  { id: 76, name: "Nature's Bakery, Raspberry", price: 2.5, category: "Snacks" },
  { id: 77, name: "Albanese True to Fruit Exotic Fruits, Gummy Bears", price: 1.2, category: "Snacks" },
  { id: 78, name: "Awake Caramel", price: 1, category: "Snacks" },
  { id: 79, name: "Sahale Snacks, Honey Almonds Glazed Mix", price: 2.8, category: "Snacks" },
  { id: 80, name: "Sahale Snacks, Classic Fruit + Nut Trail Mix", price: 2.8, category: "Snacks" },
  { id: 81, name: "Sahale Snacks, Mango Tango Almond Trail Mix", price: 2.8, category: "Snacks" },
  { id: 82, name: "Sahale Snacks, Large Pomegranate Vanilla flavored Cashews Trail Mix", price: 7.3, category: "Snacks" },
  { id: 83, name: "Quinn Peanut Butter Filled Pretzel Nuggets", price: 3, category: "Snacks" },
  { id: 84, name: "Biscotti Bites, Lemon", price: 3, category: "Snacks" },
  { id: 85, name: "Biscotti Bites, Chocolate", price: 3, category: "Snacks" },
  { id: 86, name: "Krispy Treat", price: 3, category: "Snacks" },
  { id: 87, name: "Trail Mix", price: 5.8, category: "Snacks" },
  { id: 88, name: "OVH, Chocolate Almonds", price: 2.5, category: "Snacks" },
];

function App() {
  // State to hold the selected shopping items with quantity
  const [selectedItems, setSelectedItems] = useState([]);

  // Function to add an item to the shopping list
  const addItem = (item) => {
    setSelectedItems((prevItems) => {
      const existingItem = prevItems.find((i) => i.id === item.id);
      if (existingItem) {
        // Increment quantity if item already exists
        return prevItems.map((i) =>
          i.id === item.id ? { ...i, quantity: i.quantity + 1 } : i
        );
      } else {
        // Add new item with quantity 1
        return [...prevItems, { ...item, quantity: 1 }];
      }
    });
  };

  // Function to remove an item from the shopping list
  const removeItem = (itemId) => {
    setSelectedItems((prevItems) => prevItems.filter((item) => item.id !== itemId));
  };

  // Function to increment item quantity
  const incrementItem = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems.map((item) =>
        item.id === itemId ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  // Function to decrement item quantity
  const decrementItem = (itemId) => {
    setSelectedItems((prevItems) =>
      prevItems
        .map((item) =>
          item.id === itemId ? { ...item, quantity: item.quantity - 1 } : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  // Calculate total price
  const totalPrice = selectedItems.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="App">
      <h1>Yale Steep Shopping</h1>
      
      {/* Wrapper for the two sections */}
      <div className="lists-container">
        <div className="item-list">
          <h2>Available Items</h2>
          <table>
            <thead>
              <tr>
                <th>Category</th>
                <th>Item Name</th>
                <th>Price ($)</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              {shoppingItems.map((item) => (
                <tr key={item.id}>
                  <td>{item.category}</td>
                  <td>{item.name}</td>
                  <td>{item.price.toFixed(2)}</td>
                  <td>
                    <button onClick={() => addItem(item)}>Add</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        
        <div className="shopping-list">
          <h2>My Shopping List</h2>
          {selectedItems.length === 0 ? (
            <p>No items selected.</p>
          ) : (
            <table>
              <thead>
                <tr>
                  <th>Category</th>
                  <th>Item Name</th>
                  <th>Price ($)</th>
                  <th>Quantity</th>
                  <th>Subtotal ($)</th>
                  <th>Action</th>
                </tr>
              </thead>
              <tbody>
                {selectedItems.map((item) => (
                  <tr key={item.id}>
                    <td>{item.category}</td>
                    <td>{item.name}</td>
                    <td>{item.price.toFixed(2)}</td>
                    <td>
                      <div className="plus-minus-container">
                        <button onClick={() => decrementItem(item.id)}>-</button>
                        <span className="quantity">{item.quantity}</span>
                        <button onClick={() => incrementItem(item.id)}>+</button>
                      </div>
                    </td>
                    <td>{(item.price * item.quantity).toFixed(2)}</td>
                    <td>
                      <button onClick={() => removeItem(item.id)}>Remove</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          <div className="total-price">
            <strong>Total Price: ${totalPrice.toFixed(2)}</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
