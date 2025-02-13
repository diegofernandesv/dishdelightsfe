import { useParams, Link } from "react-router-dom";
import styles from "./detailpage.module.css"; // Import CSS Module for styling
import pizzaImage from '../assets/pizza.png';
import sushiImage from '../assets/sushi.png';
import burgerImage from '../assets/hamburguer2.png';
import pastaImage from '../assets/pasta.png';
import saladImage from '../assets/salad.png';
import tacoImage from '../assets/taco.png';
import dimsumImage from '../assets/dimsum.png';
import bacalhauImage from '../assets/bacalhau.png';

export default function DetailPage() {
    const recipes = [
        {
            uid: "1",
            title: "Classic Margherita Pizza",
            image: pizzaImage,
            category: "Italian",
            ingredients: [
                "2 1/4 cups all-purpose flour",
                "1 tsp salt",
                "1 tsp sugar",
                "1 tbsp active dry yeast",
                "3/4 cup warm water",
                "2 tbsp olive oil",
                "1 cup tomato sauce",
                "2 cups fresh mozzarella cheese",
                "Fresh basil leaves",
                "Salt and pepper to taste"
            ],
            instructions: [
                "In a bowl, mix flour, salt, sugar, and yeast.",
                "Add warm water and olive oil, then knead into a dough.",
                "Let the dough rise for 1 hour.",
                "Preheat the oven to 475°F (245°C).",
                "Roll out the dough and spread tomato sauce on top.",
                "Add mozzarella cheese and fresh basil leaves.",
                "Bake for 12-15 minutes or until the crust is golden.",
                "Season with salt and pepper, then serve."
            ],
            prepTime: "30 minutes",
            cookTime: "15 minutes",
            totalTime: "45 minutes",
            servings: "4",
            difficulty: "Easy",
            nutritionalInfo: {
                calories: "285 kcal",
                carbs: "36g",
                protein: "12g",
                fat: "10g"
            },
            tips: ["Use fresh mozzarella for the best flavor.", "Add a drizzle of olive oil before baking for extra richness."]
        },
        {
            uid: "2",
            title: "Spaghetti Carbonara",
            image: pastaImage,
            category: "Italian",
            ingredients: [
                "400g spaghetti",
                "200g pancetta or bacon",
                "2 large eggs",
                "1 cup grated Parmesan cheese",
                "2 cloves garlic, minced",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Cook spaghetti according to package instructions.",
                "In a pan, cook pancetta or bacon until crispy.",
                "In a bowl, whisk eggs and Parmesan cheese.",
                "Add cooked spaghetti to the pan with pancetta.",
                "Remove from heat and quickly stir in the egg mixture.",
                "Season with salt, pepper, and minced garlic.",
                "Garnish with fresh parsley and serve immediately."
            ],
            prepTime: "15 minutes",
            cookTime: "15 minutes",
            totalTime: "30 minutes",
            servings: "4",
            difficulty: "Medium",
            nutritionalInfo: {
                calories: "550 kcal",
                carbs: "45g",
                protein: "20g",
                fat: "30g"
            },
            tips: ["Use freshly grated Parmesan for better texture.", "Do not overcook the eggs to avoid scrambling."]
        },

        {
            uid: "3",
            title: "Bacalhau à Brás",
            image: bacalhauImage,
            category: "Portuguese",
            ingredients: [
                "500g salted cod (bacalhau)",
                "4 medium potatoes",
                "1 large onion",
                "3 eggs",
                "2 tbsp olive oil",
                "Black olives",
                "Salt and pepper to taste",
                "Fresh parsley for garnish"
            ],
            instructions: [
                "Soak the salted cod in water overnight, changing the water a few times.",
                "Boil and shred the cod into small pieces.",
                "Peel and cut potatoes into thin strips, then fry until golden.",
                "Sauté onions in olive oil until soft.",
                "Add the shredded cod and stir well.",
                "Mix in the fried potatoes and beaten eggs, stirring quickly.",
                "Season with salt and pepper.",
                "Garnish with black olives and fresh parsley."
            ],
            prepTime: "12 hours (soaking time)",
            cookTime: "20 minutes",
            totalTime: "12 hours 20 minutes",
            servings: "4",
            difficulty: "Hard",
            nutritionalInfo: {
                calories: "350 kcal",
                carbs: "40g",
                protein: "25g",
                fat: "12g"
            },
            tips: [
                "Use fresh parsley for a vibrant flavor.",
                "Don't overcook the eggs to keep the dish creamy."
            ]
        },
        {
            uid: "4",
            title: "Classic Cheeseburger",
            image: burgerImage,
            category: "American",
            ingredients: [
                "500g ground beef",
                "4 burger buns",
                "4 slices cheddar cheese",
                "1 tomato, sliced",
                "1 onion, sliced",
                "Lettuce leaves",
                "Salt and pepper to taste",
                "2 tbsp mayonnaise",
                "2 tbsp ketchup",
                "1 tbsp mustard"
            ],
            instructions: [
                "Season the ground beef with salt and pepper, then form into patties.",
                "Grill the patties over medium heat until fully cooked.",
                "Place a slice of cheddar cheese on each patty to melt.",
                "Toast the burger buns lightly.",
                "Assemble the burgers with lettuce, tomato, onion, and condiments.",
                "Serve hot with fries or a side salad."
            ],
            prepTime: "10 minutes",
            cookTime: "15 minutes",
            totalTime: "25 minutes",
            servings: "4",
            difficulty: "Easy",
            nutritionalInfo: {
                calories: "650 kcal",
                carbs: "40g",
                protein: "35g",
                fat: "35g"
            },
            tips: [
                "Use high-quality beef for the juiciest burgers.",
                "Toast the buns for added crunch."
            ]
        },
        {
            uid: "5",
            title: "Traditional Sushi Rolls",
            image: sushiImage,
            category: "Japanese",
            ingredients: [
                "2 cups sushi rice",
                "2 tbsp rice vinegar",
                "4 sheets nori (seaweed)",
                "200g fresh salmon or tuna",
                "1 cucumber, sliced",
                "1 avocado, sliced",
                "Soy sauce for dipping",
                "Wasabi and pickled ginger"
            ],
            instructions: [
                "Cook sushi rice and mix with rice vinegar.",
                "Lay out a nori sheet on a bamboo mat.",
                "Spread a thin layer of rice on the nori.",
                "Place fish, cucumber, and avocado on top.",
                "Roll tightly using the bamboo mat.",
                "Slice into pieces and serve with soy sauce, wasabi, and pickled ginger."
            ],
            prepTime: "20 minutes",
            cookTime: "10 minutes",
            totalTime: "30 minutes",
            servings: "4",
            difficulty: "Medium",
            nutritionalInfo: {
                calories: "300 kcal",
                carbs: "50g",
                protein: "20g",
                fat: "5g"
            },
            tips: [
                "Use a sharp knife to slice the sushi rolls cleanly.",
                "Keep your hands wet to prevent rice from sticking."
            ]
        },
        {
            uid: "6",
            title: "Steamed Dimsum",
            image: dimsumImage,
            category: "Chinese",
            ingredients: [
                "300g ground pork",
                "1/2 cup chopped shrimp",
                "1/4 cup chopped water chestnuts",
                "2 tbsp soy sauce",
                "1 tbsp sesame oil",
                "1 tsp grated ginger",
                "1 pack wonton wrappers"
            ],
            instructions: [
                "Mix pork, shrimp, water chestnuts, soy sauce, sesame oil, and ginger in a bowl.",
                "Place a small amount of filling in the center of each wonton wrapper.",
                "Fold and seal the edges.",
                "Steam for 10-12 minutes until fully cooked.",
                "Serve hot with soy sauce or chili sauce."
            ],
            prepTime: "20 minutes",
            cookTime: "12 minutes",
            totalTime: "32 minutes",
            servings: "4",
            difficulty: "Medium",
            nutritionalInfo: {
                calories: "250 kcal",
                carbs: "20g",
                protein: "15g",
                fat: "10g"
            },
            tips: ["Use fresh shrimp for better texture.", "Do not overfill the wrappers to prevent breaking."]
        },
        {
            uid: "7",
            title: "Healthy Green Salad",
            image: saladImage,
            category: "Healthy",
            ingredients: [
                "2 cups mixed greens (lettuce, spinach, arugula)",
                "1/2 cup cherry tomatoes, halved",
                "1/4 cup sliced cucumbers",
                "1/4 cup shredded carrots",
                "1/4 cup sliced almonds",
                "2 tbsp olive oil",
                "1 tbsp balsamic vinegar",
                "Salt and pepper to taste"
            ],
            instructions: [
                "Wash and dry the greens.",
                "In a bowl, mix the greens, tomatoes, cucumbers, and carrots.",
                "Drizzle with olive oil and balsamic vinegar.",
                "Toss gently and season with salt and pepper.",
                "Top with sliced almonds and serve immediately."
            ],
            prepTime: "10 minutes",
            cookTime: "0 minutes",
            totalTime: "10 minutes",
            servings: "2",
            difficulty: "Easy",
            nutritionalInfo: {
                calories: "180 kcal",
                carbs: "10g",
                protein: "5g",
                fat: "12g"
            },
            tips: ["Use fresh greens for the best taste.", "Add grilled chicken for extra protein."]
        },
        {
            uid: "8",
            title: "Classic Beef Tacos",
            image: tacoImage,
            category: "Mexican",
            ingredients: [
                "500g ground beef",
                "1 packet taco seasoning",
                "8 small taco shells",
                "1/2 cup shredded lettuce",
                "1/2 cup diced tomatoes",
                "1/2 cup shredded cheese",
                "1/4 cup sour cream",
                "Salsa (optional)"
            ],
            instructions: [
                "Cook ground beef in a pan over medium heat until browned.",
                "Add taco seasoning and stir well.",
                "Warm the taco shells according to package instructions.",
                "Fill each taco with seasoned beef, lettuce, tomatoes, and cheese.",
                "Top with sour cream and salsa if desired.",
                "Serve immediately."
            ],
            prepTime: "10 minutes",
            cookTime: "15 minutes",
            totalTime: "25 minutes",
            servings: "4",
            difficulty: "Easy",
            nutritionalInfo: {
                calories: "350 kcal",
                carbs: "30g",
                protein: "20g",
                fat: "18g"
            },
            tips: ["Use corn tortillas for a more authentic flavor.", "Add guacamole for extra creaminess."]
        }
    ];

    
    const { recipeId } = useParams();
    console.log("Recipe ID from URL:", recipeId);
    const recipe = recipes.find((recipe) => recipe.uid === String(recipeId));

    if (!recipe) {
        return (
            <div className={styles.notFound}>
                <h2>Recipe not found!</h2>
                <p>Check the URL or go back to the homepage.</p>
                <Link to="/">Return to Homepage</Link>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <div className={styles.card}>
                <img src={recipe.image} alt={recipe.title} className={styles.image} />
                <h1 className={styles.title}>{recipe.title}</h1>

                {/* Recipe Details */}
                <div className={styles.details}>
                    <p><strong>Preparation Time:</strong> {recipe.prepTime}</p>
                    <p><strong>Cooking Time:</strong> {recipe.cookTime}</p>
                    <p><strong>Total Time:</strong> {recipe.totalTime}</p>
                    <p><strong>Servings:</strong> {recipe.servings}</p>
                    <p><strong>Difficulty:</strong> {recipe.difficulty}</p>
                </div>

                {/* Ingredients */}
                <div className={styles.section}>
                    <h2>Ingredients</h2>
                    <ul>
                        {recipe.ingredients.map((ingredient, index) => (
                            <li key={index}>{ingredient}</li>
                        ))}
                    </ul>
                </div>

                {/* Instructions */}
                <div className={styles.section}>
                    <h2>Instructions</h2>
                    <ol>
                        {recipe.instructions.map((step, index) => (
                            <li key={index}>{step}</li>
                        ))}
                    </ol>
                </div>

                {/* Nutritional Information */}
                <div className={styles.section}>
                    <h2>Nutritional Information</h2>
                    <p><strong>Calories:</strong> {recipe.nutritionalInfo.calories}</p>
                    <p><strong>Carbs:</strong> {recipe.nutritionalInfo.carbs}</p>
                    <p><strong>Protein:</strong> {recipe.nutritionalInfo.protein}</p>
                    <p><strong>Fat:</strong> {recipe.nutritionalInfo.fat}</p>
                </div>

                {/* Tips */}
                <div className={styles.section}>
                    <h2>Tips</h2>
                    <ul>
                        {recipe.tips.map((tip, index) => (
                            <li key={index}>{tip}</li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
}
