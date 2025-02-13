import styles from './homeview.module.css';
import hamburguerImage from "../assets/hamburguer.png";
import { Link } from 'react-router-dom';

export default function HomeView (){
    return (
        <div className={styles.container}>
          <div className={styles.content}>
            {/* Text Content */}
            <div className={styles.greeting}>Welcome to Dish Delights🍴</div>
            <div className={styles.headline}>
                Explore, Create, and Savor <br />
                Delicious Recipes from <br />
                Around the World!
            </div>
            <div className={styles.description}>
            Explore our delicious collection of  <br />
            recipes and find your next favorite dish!
            </div>
            <div className={styles.contactButton}>
            <div>
            <Link to="./recipesView" className={styles.buttonText} style={{ textDecoration: "none" }}>
                Discover new Recipes
            </Link>
            </div>

            </div>
          </div>
                  {/* Image Section */}
                  <div className={styles.imageContainer}>
              <img 
                src={hamburguerImage} 
                alt="Hamburguer" 
                className={styles.image}
              />
            </div>
        </div>
      );
}