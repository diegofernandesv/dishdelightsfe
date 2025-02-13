import styles from "./aboutview.module.css";

export default function AboutView() {
  return (
    <div className={styles.about}>
      {/* Main Heading */}
      <h1 className={styles.heading}>About DishDelights</h1>

      {/* Introduction Section */}
      <section className={styles.section}>
        <p className={styles.paragraph}>
          Welcome to <strong>DishDelights</strong> 🎉, a vibrant online community that brings food lovers 🍕🥗🥘 together from around the world!  
          Whether you're a seasoned chef 👨‍🍳 or a home cook 🏡 looking for inspiration, our platform offers a vast collection of recipes  
          to suit every taste and dietary preference.  
        </p>
        <p className={styles.paragraph}>
          Our easy-to-use interface lets you browse <strong>detailed recipes 📜</strong>, filter dishes by category 🍜🍰,  
          and even manage your own <strong>personal favorite recipes ❤️</strong>.  
          We aim to make meal preparation effortless and fun for everyone! 🎊  
        </p>
      </section>

      {/* What We Offer Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>What We Offer</h2>
        <ul className={styles.offerList}>
          <li className={styles.offerItem}>
            <strong>🍴 Extensive Recipe Collection:</strong> Explore thousands of recipes from cuisines around the world.
          </li>
          <li className={styles.offerItem}>
            <strong>📂 Recipe Categories:</strong> Easily filter recipes by category, such as nationalities and more.
          </li>
          <li className={styles.offerItem}>
            <strong>❤️ Save Favorites:</strong> Create your own collection of favorite recipes for quick access.
          </li>
          <li className={styles.offerItem}>
            <strong>👩‍🍳 Step-by-Step Instructions:</strong> Each recipe comes with detailed, easy-to-follow instructions.
          </li>
          <li className={styles.offerItem}>
            <strong>🌱 Dietary Filters:</strong> Find recipes tailored to your dietary needs, such as vegan, gluten-free, or keto.
          </li>
          <li className={styles.offerItem}>
            <strong>📱 Mobile-Friendly:</strong> Access DishDelights on any device, anytime, anywhere.
          </li>
        </ul>
      </section>

      {/* Mission Statement Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Our Mission</h2>
        <p className={styles.paragraph}>
          At DishDelights, our mission is to inspire creativity in the kitchen and bring people together through the joy of cooking.  
          We believe that food is more than just sustenance—it's a way to connect, share, and celebrate life.  
        </p>
      </section>

      {/* Team Section */}
      <section className={styles.section}>
        <h2 className={styles.subheading}>Meet the Team</h2>
        <p className={styles.paragraph}>
          DishDelights is powered by a passionate team of food enthusiasts, developers, and designers who are dedicated to making your cooking experience delightful.  
          From recipe curators to tech wizards, we work together to bring you the best platform for culinary exploration.  
        </p>
      </section>
    </div>
  );
}