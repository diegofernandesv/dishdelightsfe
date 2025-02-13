import styles from './favouritesview.module.css';

export default function FavouritesForm({ currentFavorite, handleChange, handleSubmit, isEditing }) {
    const handleDeleteImage = () => {
        handleChange({ target: { name: 'image', value: '' } }); // Clear the image
    };

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                handleChange({ target: { name: 'image', value: reader.result } });
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <div>
                <label>Title:</label>
                <input
                    type="text"
                    name="title"
                    value={currentFavorite.title || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Preparation Time (in minutes):</label>
                <input
                    type="number"
                    name="prepTime"
                    value={currentFavorite.prepTime || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Cooking Time (in minutes):</label>
                <input
                    type="number"
                    name="cookTime"
                    value={currentFavorite.cookTime || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Total Time (in minutes):</label>
                <input
                    type="number"
                    name="totalTime"
                    value={currentFavorite.totalTime || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Ingredients:</label>
                <textarea
                    name="ingredients"
                    value={currentFavorite.ingredients || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Instructions:</label>
                <textarea
                    name="instructions"
                    value={currentFavorite.instructions || ''}
                    onChange={handleChange}
                    required
                />
            </div>
            <div>
                <label>Tips:</label>
                <textarea
                    name="tips"
                    value={currentFavorite.tips || ''}
                    onChange={handleChange}
                />
            </div>
            <div className={styles.fileUploadContainer}>
                <label className={styles.fileUploadLabel}>
                    Upload Image
                    <input
                        type="file"
                        name="image"
                        onChange={handleFileChange}
                        accept="image/*"
                    />
                </label>
                {currentFavorite.image && (
                    <div className={styles.imagePreviewContainer}>
                        <img
                            src={currentFavorite.image}
                            alt="Preview"
                            className={styles.imagePreview}
                        />
                        <button
                            type="button"
                            onClick={handleDeleteImage}
                            className={styles.deleteImageButton}
                        >
                            Delete Image
                        </button>
                    </div>
                )}
            </div>
            <button type="submit">{isEditing ? 'Update' : 'Create'} Recipe</button>
        </form>
    );
}
