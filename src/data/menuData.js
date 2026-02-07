// Complete menu data from Mabe's Pizza
// Updated to match live site: https://mabespizza.com/menu

export const menuData = {
    kidsAndSenior: {
        title: "Kids/Senior Specials",
        description: "For Kids 10 & Under and Adults 65 & Over",
        items: [
            { name: "Boneless Chicken Wings with Sauce", description: "Quantity of (6) wings", price: "$7.95" },
            { name: "Chicken Strips with French Fries", description: "Crispy chicken strips served with fries", price: "$7.95" },
            { name: "Macaroni & Cheese", description: "Classic comfort food", price: "$6.95" }
        ]
    },
    appetizers: {
        title: "Appetizers",
        description: "Perfect for sharing (or keeping all to yourself)",
        items: [
            { name: "Garlic Toast with Sauce", description: "Crispy, buttery, garlic perfection", price: "$4.50" },
            { name: "Cheesebread with Sauce", description: "Warm bread topped with melted cheese", price: "$6.95" },
            { name: "Cheese Sticks with Sauce", description: "Golden fried mozzarella sticks", price: "$8.95" },
            { name: "Bread Sticks with Sauce", description: "Served with marinara sauce", price: "$5.80" },
            { name: "Onion Rings", description: "Crispy battered onion rings", price: "$6.95" },
            { name: "Breaded Mushrooms", description: "Golden fried mushrooms", price: "$7.95" },
            { name: "Cheddar Cheese Nuggets", description: "Breaded cheddar bites", price: "$7.95" },
            { name: "Jalapeno Poppers", description: "Spicy cream cheese filled peppers", price: "$8.95" },
            { name: "Combo Basket", description: "A variety of our fried favorites", price: "$12.95" },
            { name: "Nacho Supreme", description: "Cheese nachos topped with tomato, onion, black olive, jalapenos, salsa and your choice of beef, chicken or chili. Served with sour cream.", price: "$12.95" },
            { name: "Bone-In Wings", description: "6 or 12 piece. Served with your choice of sauce: Ranch, Buffalo, BBQ or Sweet Chili", price: "$11.95/$19.95" }
        ]
    },
    beverages: {
        title: "Beverages",
        description: "Refreshing drinks to complement your meal",
        items: [
            { name: "Coffee", description: "Hot brewed coffee", price: "$2.50" },
            { name: "Hot Tea", description: "Assorted tea selection", price: "$2.50" },
            { name: "Hot Chocolate", description: "Rich and creamy (In Season)", price: "$2.75" },
            { name: "Iced Tea", description: "Freshly brewed", price: "$2.75" },
            { name: "Lemonade", description: "Fresh squeezed flavor", price: "$2.75" },
            { name: "Milk", description: "White or chocolate", price: "$2.50" },
            { name: "Soda", description: "Pepsi products", price: "$2.75" },
            { name: "1919 Rootbeer", description: "Can / Glass / Pitcher", price: "$3.50/$4.50/$9.95" }
        ]
    },
    beerAndWine: {
        title: "Beer & Wine",
        description: "Local and craft selections",
        items: [
            { name: "Domestic Tap Beer", description: "Ask about our current selection", price: "$4.00" },
            { name: "Bottle Beer", description: "Variety of domestic and imports", price: "$4.50" },
            { name: "Craft Beer", description: "16oz / Glass / Pitcher", price: "$5.50/$6.50/$14.95" },
            { name: "Wine", description: "Glass / Bottle - Ask for selection", price: "$6.00/$24.00" }
        ]
    },
    burgersAndSandwiches: {
        title: "Burgers & Sandwiches",
        description: "One-third pound, hand-formed and cooked to perfection. Served with choice of side.",
        items: [
            { name: "Swiss Burger", description: "1/3 lb patty with melted Swiss cheese", price: "$12.00" },
            { name: "Hamburger", description: "Classic 1/3 lb hand-formed patty", price: "$10.50" },
            { name: "Cheese Burger", description: "With American cheese", price: "$11.00" },
            { name: "Bacon Cheeseburger", description: "Melted cheese and crisp bacon", price: "$12.50" },
            { name: "Western Burger", description: "Covered with bacon, sauteed onions, pepper jack cheese and our own BBQ sauce", price: "$13.00" },
            { name: "Chicken Breast Sandwich", description: "Four ounce broiled chicken, topped with mushroom and cheese. Served on garlic toast", price: "$12.50" },
            { name: "Chicken Filet", description: "Breaded or grilled chicken breast", price: "$11.50" },
            { name: "Double Burger", description: "Make any burger a double!", price: "+$4.00" },
            { name: "Add Fried Egg", description: "Add to any sandwich or burger", price: "+$1.50" }
        ],
        sideNote: "Choice of Sides: French Fries, Curly Fries, Baked Potato, Broasted Potato, Sweet Potato Fries, Onion Rings, Cheese Curds or Side Salad."
    },
    pizza: {
        title: "Mabe's Famous Pizza",
        description: "Our signature thin crust, square-cut masterpieces. Special 9\" | Small 12\" | Medium 14\" | Large 16\"",
        items: [
            { name: "Regular", description: "Sausage, Pepperoni and Cheese", price: "$11.45/$16.45/$19.45/$23.45" },
            { name: "Deluxe", description: "Sausage, Pepperoni, Onion, Green Pepper, Mushroom and Cheese", price: "$13.85/$18.85/$21.85/$25.85" },
            { name: "Around the Garden", description: "Sausage, Pepperoni, Onion, Green Pepper, Mushroom, Canadian Bacon and Cheese", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Four Meats", description: "Sausage, Pepperoni, Canadian Bacon, Ground Beef and Cheese", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "BBQ Pizza", description: "Choice of Chicken or Beef, our own BBQ Sauce and a Blend of Cheeses", price: "$13.85/$18.85/$21.85/$25.85" },
            { name: "Vegetarian", description: "Mushroom, Green Pepper, Onion, Black Olive, Tomato and Cheese", price: "$13.85/$18.85/$21.85/$25.85" },
            { name: "Bacon Cheeseburger", description: "Ketchup and Mustard Sauce, Seasoned Ground Beef, Bacon, Pickle and a blend of Cheeses", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Chicken Cordon Bleu", description: "Diced Ham, Crispy Chicken, Bleu Cheese Sauce and a blend of Cheeses", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Taco Supreme", description: "Seasoned Beef, Onion, Black Olive and Cheese, topped with Sour Cream, Lettuce, Tomato and Taco Chips", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Taco", description: "Seasoned Meat, Taco Chips, Lettuce, Tomato and Cheese", price: "$13.85/$18.85/$21.85/$25.85" },
            { name: "Philly Cheese Steak", description: "Creamy Cheese Sauce, Tender Steak Pieces, Onion, Green Pepper and Cheese", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Chicken Mushroom Alfredo", description: "Creamy Alfredo Sauce, Chicken, Mushroom, Garlic and blend of cheeses", price: "$14.85/$19.85/$22.85/$26.85" },
            { name: "Breakfast Pizza", description: "Creamy Cheese Sauce Served with Scrambled Eggs and a blend of Cheeses", price: "$13.85/$18.85/$21.85/$25.85" },
            { name: "Double Crust", description: "Add a second layer of crust", price: "+$3.00" },
            { name: "Create Your Own", description: "Choose from: Sausage, Pepperoni, Canadian Bacon, Hamburger, Chicken, Sauerkraut, Jalapeno Peppers, Onions, Green Peppers, Mushrooms, Green Olives, Black Olives, Pineapple, Garlic and Double Cheese", price: "Varies" }
        ],
        specialNote: "10\" Gluten Free Crust Available (+$3.00)"
    },
    halfBaked: {
        title: "Half-Baked Pizzas \"To Go\"",
        description: "Perfect for taking home!",
        instructions: [
            "Preheat oven to 375 degrees",
            "Cook on a pizza stone or right on the oven racks",
            "Allow approximately 10 to 15 minutes to cook (Cook to a golden brown on top and bottom)",
            "Allow extra time for frozen pizzas",
            "Any questions please call (563) 382-4297"
        ]
    },
    dinners: {
        title: "Dinners",
        description: "Includes lettuce salad, coleslaw or cottage cheese; choice of side and rolls and butter.",
        items: [
            { name: "One-Fourth Broasted Chicken", description: "Quarter chicken, crispy broasted", price: "$13.95" },
            { name: "One-Half Broasted Chicken", description: "Half chicken, crispy broasted", price: "$16.95" },
            { name: "Chicken Strips", description: "Crispy breaded chicken strips", price: "$13.95" }
        ],
        sideNote: "Side Choices: French Fries, Curly Fries, Baked Potato, Broasted Potato, Sweet Potato Fries, Onion Rings, Cheese Curds or Side Salad."
    },
    pastas: {
        title: "Pastas",
        description: "Includes lettuce salad, coleslaw or cottage cheese. Served with garlic toast.",
        items: [
            { name: "Lasagna", description: "Layers of pasta, meat, cheese and sauce", price: "$14.95" },
            { name: "Spaghetti", description: "Choice of meat or marinara sauce", price: "$12.95" },
            { name: "Fettuccini Alfredo", description: "Creamy alfredo sauce over fettuccini", price: "$13.95" },
            { name: "Fettuccini Alfredo with Chicken", description: "Add grilled chicken", price: "$16.95" }
        ]
    },
    salads: {
        title: "Salads",
        description: "Fresh and crisp",
        items: [
            { name: "Lettuce Salad", description: "Fresh iceberg lettuce with toppings", price: "$4.95" },
            { name: "Chef Salad", description: "Ham, turkey, cheese on fresh greens", price: "$12.95" },
            { name: "Taco Salad", description: "Seasoned beef, cheese, tomatoes, lettuce in a crispy shell", price: "$12.95" },
            { name: "Chicken Salad", description: "Grilled chicken on fresh greens", price: "$12.95" }
        ]
    },
    chickenToGo: {
        title: "Chicken To Go",
        description: "Perfect for family meals",
        items: [
            { name: "8-Piece Chicken", description: "Broasted to perfection", price: "$19.95" },
            { name: "12-Piece Chicken", description: "Great for sharing", price: "$27.95" },
            { name: "16-Piece Chicken", description: "Family feast size", price: "$34.95" }
        ]
    }
};

export default menuData;
