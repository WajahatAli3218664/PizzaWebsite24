import React from 'react';

const FloatImageContentBlock = () => {
    return (
        <section className="container mx-auto py-10 flex flex-col md:flex-row items-center">
            <div className="md:w-1/2 md:pr-10">
                <h2 className="text-3xl font-bold mb-4 text-white">Artisan Pizzas</h2>
                <p className="text-white mb-4">
                Savor the finest pizzas in town, crafted with premium ingredients and baked to perfection in our authentic stone oven and grilled to perfection.
                </p>
                <button className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition duration-200">
                    Order Now
                </button>
                <h3 className="text-2xl font-semibold mt-6 mb-2 text-center text-white">Coming Soon: Our New Pizza Launches</h3>
                <ul className="list-disc list-inside text-white">
                    <li><strong>Truffle Mushroom Supreme:</strong> A luxurious blend of exotic mushrooms, truffle oil, and creamy mozzarella cheese.</li>
                    <br />
                    <li><strong>Mediterranean Delight:</strong> Topped with feta cheese, olives, sun-dried tomatoes, and fresh Mediterranean herbs.</li>
                    <br />
                    <li><strong>Spicy Mexican Fiest:</strong> A zesty combination of jalapeños, spicy beef, bell peppers, and Mexican spices.</li>
                    <br />
                    <li><strong>Four Cheese Garden:</strong> A vegetarian delight featuring four premium cheeses and garden-fresh vegetables.</li>
                    <br />
                    <li><strong>BBQ Chicken Ranch:</strong> Grilled chicken, smoky BBQ sauce, and ranch dressing with fresh vegetables.</li>
                </ul>
            </div>
            <div className="md:w-1/2 mt-6 md:mt-0">
                <img
                    src="types.jpg" 
                    alt="Delicious Pizzas"
                    className="w-full h-auto rounded-lg shadow-lg transition-transform duration-500 ease-in-out transform hover:scale-105 mr-7" // Added animation class
                />
            </div>
        </section>
    );
};

export default FloatImageContentBlock;
