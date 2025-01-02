import React, {useState} from 'react';

function MenuSystem(){
    
    const [orders, setOrders] = useState([]);
    const [mainCourse, setMainCourse] = useState("");
    const [drinks, setDrinks] = useState("");
    const [desserts, setDesserts] = useState("");

    function handleAddOrder(){

        const newOrder = {  orderedMainCourse: mainCourse,
                            orderedDrinks: drinks,
                            orderedDesserts: desserts};

        setOrders(o => [...o, newOrder]);
        setMainCourse("")
    }

    function handleRemoveOrder(index){
        setOrders(o => o.filter((_, i) => i !== index));
    }

    function handleMainCourseChange(event){
        setMainCourse(event.target.value);
    }

    function handleDrinksChange(event){
        setDrinks(event.target.value);
    }

    function handleDessertsChange(event){
        setDesserts(event.target.value);
    }

    return(<>
        <div>
            <h2>List of Orders</h2>
            <ul>
                {orders.map((order, index) => 
                <li key = {index} onClick = {() => handleRemoveOrder(index)}>
                    {order.orderedMainCourse}
                </li>)}
            </ul>
            <p>Main Courses: {mainCourse}</p>
            <select value = {mainCourse} onChange = {handleMainCourseChange}>
                <option value = "">Select your main course</option>
                <option value = "6 pcs Chicken Nuggets">6 pcs Chicken Nuggets</option>
                <option value = "Burger">Burger</option>
                <option value = "Burger Steak">Burger Steak</option>
                <option value = "ChickenJoy">ChickenJoy</option>
                <option value = "Fries">Fries</option>
                <option value = "Palabok">Palabok</option>
                <option value = "Spaghetti">Spaghetti</option>
                <option value = "">None</option>
            </select>
            <button onClick = {handleAddOrder}>Add Order</button>

            <p>Drinks: {drinks}</p>
            <select value = {drinks} onChange = {handleDrinksChange}>
                <option value = "">Select your drinks</option>
                <option value = "Coke">Coke</option>
                <option value = "Coke Zero">Coke Zero</option>
                <option value = "Hot Chocolate">Hot Chocolate</option>
                <option value = "Hot Fresh Brew">Hot Fresh Brew</option>
                <option value = "Iced Latte">Iced Latte</option>
                <option value = "Iced Mocha">Iced Mocha</option>
                <option value = "Iced Mocha Float">Iced Mocha Float</option>
                <option value = "Iced Tea">Iced Tea</option>
                <option value = "Minute Maid">Minute Maid</option>
                <option value = "Pineapple Juice">Pineapple Juice</option>
                <option value = "Royal">Royal</option>
                <option value = "Soda Float">Soda Float</option>
                <option value = "Sprite">Sprite</option>
                <option value = "">None</option>
            </select>
            <button onClick = {handleAddOrder}>Add Order</button>

            <p>Desserts: {desserts}</p>
            <select value = {desserts} onChange = {handleDessertsChange}>
                <option value = "">Select your desserts</option>
                <option value = "Chocolate Sundae">Chocolate Sundae</option>
                <option value = "Cookies & Cream Sundae">Cookies & Cream Sundae</option>
                <option value = "Mini Chocolate Sundae">Mini Chocolate Sundae</option>
                <option value = "Peach Mango Pie">Peach Mango Pie</option>
                <option value = "Tuna Pie">Tuna Pie</option>
            </select>
            <button onClick = {handleAddOrder}>Add Order</button>
        </div>
    </>);
}

export default MenuSystem