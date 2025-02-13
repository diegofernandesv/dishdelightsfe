import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import pizzaImage from '../assets/pizza.png';
import sushiImage from '../assets/sushi.png';
import burgerImage from '../assets/hamburguer2.png';
import pastaImage from '../assets/pasta.png';
import saladImage from '../assets/salad.png';
import tacoImage from '../assets/taco.png';
import dimsumImage from '../assets/dimsum.png';
import bacalhauImage from '../assets/bacalhau.png';
import styles from './recipesview.module.css'; // Import the CSS Module

export default function RecipesView() {
    const foodItems = [
        { foodid: "1", foodtext: "Pizza", uid: "1", category: "Italian", image: pizzaImage },
        { foodid: "1", foodtext: "Pasta", uid: "2", category: "Italian", image: pastaImage },
        { foodid: "1", foodtext: "Bacalhau", uid: "3", category: "Portuguese", image: bacalhauImage },
        { foodid: "1", foodtext: "Burger", uid: "4", category: "American", image: burgerImage },
        { foodid: "2", foodtext: "Sushi", uid: "5", category: "Japanese", image: sushiImage },
        { foodid: "2", foodtext: "Dimsum", uid: "6", category: "Chinese", image: dimsumImage },
        { foodid: "2", foodtext: "Salad", uid: "7", category: "Healthy", image: saladImage },
        { foodid: "2", foodtext: "Taco", uid: "8", category: "Mexican", image: tacoImage }
    ];

    const { foodId } = useParams(); // Get foodId from the link
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('all');

    // Filter food items by category and search term
    const filteredItems = foodItems.filter(food => {
        const matchesSearch = food.foodtext.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'all' || food.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className={styles.recipesContainer}>
            <h1>Look our amazing recipes!</h1>

            {/* Search and filter inputs */}
            <div className={styles.filters}>
                <div>
                    <label htmlFor="search">Search by food name:</label>
                    <input
                        type="text"
                        id="search"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for a recipe"
                    />
                </div>
                <div>
                    <label htmlFor="category">Filter by category:</label>
                    <select
                        id="category"
                        value={selectedCategory}
                        onChange={(e) => setSelectedCategory(e.target.value)}
                    >
                        <option value="all">All</option>
                        <option value="Italian">Italian</option>
                        <option value="Chinese">Chinese</option>
                        <option value="Portuguese">Portuguese</option>
                        <option value="American">American</option>
                        <option value="Japanese">Japanese</option>
                        <option value="Healthy">Healthy</option>
                        <option value="Mexican">Mexican</option>
                    </select>
                </div>
            </div>

            {/* Display filtered food items */}
            <div className={styles.recipeList}>
                {filteredItems.map((food) => (
                    <Link to={`/dishdelightsfe/detailpage/${food.uid}`} key={food.uid} className={styles.recipeCard}>
                        <img src={food.image} alt={food.foodtext} />
                        <div>{food.foodtext}</div>
                    </Link>
                ))}
            </div>
        </div>
    );
}