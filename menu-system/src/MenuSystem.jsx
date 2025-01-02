import React, {useState} from 'react';

function MenuSystem(){
    
    const [selectedCategory, setSelectedCategory] = useState(null);

    const categories = [{id: 1, name: "Main Courses"}, 
                        {id: 2, name: "Desserts"},
                        {id: 3, name: "Drinks"}
    ];

    return(<>
    <div className = "menuSystem">
        <h1>Menu System</h1>
        <div className = "menuContainer">
            <div className = "categories">
                <h2>Categories</h2>

            </div>

        </div>

    </div>
    
    </>);
}

export default MenuSystem