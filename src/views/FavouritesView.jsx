import { useState, useEffect } from 'react';
import FavouritesForm from './FavouritesForm';
import FavouritesList from './FavouritesList';
import styles from './favouritesview.module.css';

export default function FavouritesView() {
    const [articles, setArticles] = useState(() => {
        const savedArticles = localStorage.getItem('articles');
        return savedArticles ? JSON.parse(savedArticles) : [];
    });

    const [currentArticle, setCurrentArticle] = useState({
        title: '',
        content: '',
        image: '', // Store the base64 image string
        prepTime: '',
        cookTime: '',
        totalTime: '',
        ingredients: '',
        instructions: '',
        tips: '',
    });

    const [isEditing, setIsEditing] = useState(false);
    const [editIndex, setEditIndex] = useState(null);

    useEffect(() => {
        localStorage.setItem('articles', JSON.stringify(articles));
    }, [articles]);

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            if (files && files[0]) {
                const file = files[0];
                const reader = new FileReader();

                reader.onloadend = () => {
                    setCurrentArticle((prevArticle) => ({
                        ...prevArticle,
                        image: reader.result, // Store the base64 image
                    }));
                };

                reader.readAsDataURL(file); // Read the file as a data URL
            } else {
                setCurrentArticle((prevArticle) => ({
                    ...prevArticle,
                    image: '', // Clear the image if no file is selected
                }));
            }
        } else {
            setCurrentArticle((prevArticle) => ({
                ...prevArticle,
                [name]: value, // Update other fields
            }));
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (isEditing) {
            const updatedArticles = articles.map((article, index) =>
                index === editIndex ? currentArticle : article
            );
            setArticles(updatedArticles);
            setIsEditing(false);
            setEditIndex(null);
        } else {
            setArticles([...articles, { ...currentArticle, likes: 0, isLiked: false }]);
        }
        setCurrentArticle({
            title: '',
            content: '',
            image: '',
            prepTime: '',
            cookTime: '',
            totalTime: '',
            ingredients: '',
            instructions: '',
            tips: '',
        }); // Reset the form
    };

    const handleDelete = (index) => {
        const updatedArticles = articles.filter((_, i) => i !== index);
        setArticles(updatedArticles);
    };

    const handleEdit = (index) => {
        setCurrentArticle(articles[index]);
        setIsEditing(true);
        setEditIndex(index);
    };

    const handleLike = (index) => {
        const updatedArticles = articles.map((article, i) => {
            if (i === index) {
                return {
                    ...article,
                    likes: article.isLiked ? article.likes - 1 : article.likes + 1,
                    isLiked: !article.isLiked,
                };
            }
            return article;
        });
        setArticles(updatedArticles);
    };

    const handleDeleteImage = () => {
        setCurrentArticle((prevArticle) => ({
            ...prevArticle,
            image: '', // Clear the image
        }));
    };

    return (
        <div className={styles.container}>
            <h1>Create your Recipe Book🍽️✨</h1>
            <div className={styles.content}>
                <FavouritesForm
                    currentFavorite={currentArticle}
                    handleChange={handleChange}
                    handleSubmit={handleSubmit}
                    isEditing={isEditing}
                    handleDeleteImage={handleDeleteImage}
                />
                <h2>My Recipes</h2>
                <FavouritesList
                    articles={articles}
                    handleEdit={handleEdit}
                    handleDelete={handleDelete}
                    handleLike={handleLike}
                />
            </div>
        </div>
    );
}