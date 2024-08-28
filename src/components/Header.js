// src/components/Header.js

import Link from 'next/link';
import styles from './Header.module.css'
import Image from 'next/image';

export default function Header() {
  return (
    <header className={styles.header}>
      <nav className={styles.navbar}>
        
        <div className={styles.logo}>
          <Image src="/Logo-1.png" alt="logo-image" width={40} height={40} />
        </div>
        
        <div className={styles.LOGO}>
          LOGO
        </div>
        
        <ul className={styles.navLinks}>
          <li>
            <Image src="/search-normal.png" alt="search-icon" width={15} height={15} />
          </li>
          <li>
            <Image src="/heart-blank.png" alt="search-icon" width={15} height={15} />
          </li>
          <li>
            <Image src="/bag.png" alt="search-icon" width={18} height={18} />
          </li>
          <li>
            <Image src="/user.png" alt="search-icon" width={16} height={16} />
          </li>
          <li>
            <div className={styles.languageContainer}>
              <div>
                ENG
              </div>
              <Image className={styles.arrowDown} src="/arrow-left-1.png" alt="search-icon" width={16} height={16} />
            </div>
          </li>
        </ul>
      </nav>
      
      <div className={styles.navLinks2}>

        <ul >
            <li>
              SHOP
            </li>
            <li>
              SKILLS
            </li>
            <li>
              STORIES
            </li>
            <li>
              ABOUT
            </li>
            <li>
              CONTACT US
            </li>
          </ul>
      </div>

      <div className={styles.Line}>

      </div>
    </header>
  );
}
