import styles from './favouritesview.module.css';

export default function FavouritesForm({
    currentFavorite,
    handleChange,
    handleSubmit,
    isEditing,
    handleDeleteImage,
}) {
    return (
        <form onSubmit={handleSubmit} className={styles.form}>
            <input
                type="text"
                name="title"
                placeholder="Title"
                value={currentFavorite.title}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="prepTime"
                placeholder="Preparation Time (minutes)"
                value={currentFavorite.prepTime}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="cookTime"
                placeholder="Cooking Time (minutes)"
                value={currentFavorite.cookTime}
                onChange={handleChange}
                required
            />
            <input
                type="text"
                name="ingredients"
                placeholder="Ingredients"
                value={currentFavorite.ingredients}
                onChange={handleChange}
                required
            />
            <textarea
                name="instructions"
                placeholder="Instructions"
                value={currentFavorite.instructions}
                onChange={handleChange}
                required
            />
            <textarea
                name="tips"
                placeholder="Tips (optional)"
                value={currentFavorite.tips}
                onChange={handleChange}
            />

            {/* Custom Upload Button */}
            <div className={styles.fileUploadContainer}>
                <label className={styles.fileUploadLabel}>
                    Upload Image
                    <input
                        type="file"
                        name="image"
                        accept="image/*"
                        onChange={handleChange}
                        className={styles.fileInput}
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
                            className={styles.deletePreviewButton}
                        >
                            Delete Image
                        </button>
                    </div>
                )}
            </div>

            <button type="submit" className={styles.submitButton}>
                {isEditing ? 'Update Recipe' : 'Add Recipe'}
            </button>
        </form>
    );
}