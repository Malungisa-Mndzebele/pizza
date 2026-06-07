// Pizza Builder options for Mabe's Pizza.
// Sizes, crusts, and toppings mirror the real menu (see menuData.js).
// Size base prices are the cheese-pizza starting point, derived from the menu's
// "Regular" pizza ($11.45/$16.45/$19.45/$23.45 = cheese + sausage + pepperoni)
// minus the two standard meats at the builder's $1.50/meat rate.
export const pizzaOptions = {
    sizes: [
        { id: 'special', name: 'Special', price: 8.45, inches: 9 },
        { id: 'small', name: 'Small', price: 13.45, inches: 12 },
        { id: 'medium', name: 'Medium', price: 16.45, inches: 14 },
        { id: 'large', name: 'Large', price: 20.45, inches: 16 },
    ],
    crusts: [
        { id: 'thin', name: 'Original Thin Crust (Square Cut)', price: 0.00 },
        { id: 'double', name: 'Double Crust', price: 3.00 },
        { id: 'gluten_free', name: 'Gluten-Free Crust (10")', price: 3.00 },
    ],
    sauces: [
        { id: 'classic_red', name: 'Classic Red Sauce', price: 0.00 },
        { id: 'bbq', name: 'BBQ Sauce', price: 0.00 },
        { id: 'alfredo', name: 'Creamy Alfredo', price: 0.00 },
        { id: 'buffalo', name: 'Buffalo', price: 0.00 },
    ],
    cheeses: [
        { id: 'regular', name: 'Regular Cheese', price: 0.00 },
        { id: 'double', name: 'Double Cheese', price: 2.00 },
        { id: 'light', name: 'Light Cheese', price: 0.00 },
        { id: 'none', name: 'No Cheese', price: 0.00 },
    ],
    meats: [
        { id: 'sausage', name: 'Sausage', price: 1.50 },
        { id: 'pepperoni', name: 'Pepperoni', price: 1.50 },
        { id: 'canadian_bacon', name: 'Canadian Bacon', price: 1.50 },
        { id: 'hamburger', name: 'Hamburger', price: 1.50 },
        { id: 'chicken', name: 'Chicken', price: 2.00 },
    ],
    veggies: [
        { id: 'onions', name: 'Onions', price: 1.00 },
        { id: 'green_peppers', name: 'Green Peppers', price: 1.00 },
        { id: 'mushrooms', name: 'Mushrooms', price: 1.00 },
        { id: 'green_olives', name: 'Green Olives', price: 1.00 },
        { id: 'black_olives', name: 'Black Olives', price: 1.00 },
        { id: 'pineapple', name: 'Pineapple', price: 1.00 },
        { id: 'jalapenos', name: 'Jalapeño Peppers', price: 1.00 },
        { id: 'sauerkraut', name: 'Sauerkraut', price: 1.00 },
        { id: 'garlic', name: 'Garlic', price: 1.00 },
    ]
};
