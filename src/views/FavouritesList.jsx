import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart as solidHeart } from '@fortawesome/free-solid-svg-icons';
import { faHeart as regularHeart } from '@fortawesome/free-regular-svg-icons';
import styles from './favouritesview.module.css';

export default function FavouritesList({ articles, handleEdit, handleDelete, handleLike }) {
    return (
        <ul className={styles.favouritesList}>
            {articles.map((article, index) => (
                <li key={index} className={styles.articleItem}>
                    <h3 className={styles.articleTitle}>{article.title}</h3>
                    {article.image && (
                        <img
                            src={article.image}
                            alt={article.title}
                            className={styles.articleImage}
                        />
                    )}
                    <p className={styles.timeDetails}>Preparation Time: {article.prepTime} minutes</p>
                    <p className={styles.timeDetails}>Cooking Time: {article.cookTime} minutes</p>
                    <p className={styles.timeDetails}>Total Time: {article.totalTime} minutes</p>

                    <p className={styles.ingredients}>
                        <strong>Ingredients:</strong>
                        <br />
                        {article.ingredients}
                    </p>

                    <p className={styles.instructions}>
                        <strong>Instructions:</strong>
                        <br />
                        {article.instructions}
                    </p>

                    
                    <p className={styles.tips}>
                        <strong>Tips:</strong>
                        <br />
                        {article.tips}
                    </p>

                    <p className={styles.likes}>Likes: {article.likes || 0}</p>
                    <div className={styles.actions}>
                        <span
                            onClick={() => handleLike(index)}
                            className={styles.heartIcon}
                            style={{
                                cursor: 'pointer',
                                color: article.isLiked ? 'red' : 'black',
                                fontSize: '24px',
                            }}
                        >
                            <FontAwesomeIcon icon={article.isLiked ? solidHeart : regularHeart} />
                        </span>
                        <button onClick={() => handleEdit(index)} className={styles.editButton}>Edit</button>
                        <button onClick={() => handleDelete(index)} className={styles.deleteButton}>Delete</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}1