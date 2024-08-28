

import styles from './Sidebar.module.css';

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <h2 className="h2">Categories</h2>
      <ul className={styles.categoryList}>
        <li>Electronics</li>
        <li>Clothing</li>
        <li>Jewelry</li>
        <li>Home & Garden</li>
        <li>Sports & Outdoors</li>
      </ul>

      <h2 className="h2">Filters</h2>
      <ul className={styles.filterList}>
        <li>Price: Low to High</li>
        <li>Price: High to Low</li>
        <li>Best Sellers</li>
        <li>New Arrivals</li>
      </ul>
    </aside>
  );
}
