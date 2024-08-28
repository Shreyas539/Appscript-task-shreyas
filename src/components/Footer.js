// src/components/Footer.js
import Image from 'next/image';
import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footerContainer}>
      <div className={styles.footerTop}>
          
          <div className={styles.footerTopLeft}>
            <h3 className={styles.h3}>BE THE FIRST TO KNOW</h3>
            <p className={styles.p}>Sign up for updates from mettā muse.</p>

            <div className={styles.emailSubscribe}>
              <input type="text" placeHolder="Enter your e-mail" className={styles.input}/>
              <button className={styles.button}>SUBSCRIBE</button>
            </div>
          </div>

          <div className={styles.footerTopRight}>
            <h3 className={styles.h3}>CONTACT US</h3>
            <p>+44 3439348548935</p>
            <p>customercare@mettret.com</p>
            <h3>CURRENCY</h3>
            <div className={styles.country}>
              <Image src="/us.png" alt="search-icon" width={15} height={15} />
              <h4>USD</h4>
            </div>
            <p className={styles.p}>Transactions will be completed in Euros and a currency reference is available on hover.</p>
          </div>
      </div>

      <div className={styles.footerBottom}>
          <div>
            <h3>metta mouse</h3>
            <ul className={styles.footerLinks}>
              <li >About us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutique</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div>
            <h3>metta mouse</h3>
            <ul className={styles.footerLinks}>
              <li>About us</li>
              <li>Stories</li>
              <li>Artisans</li>
              <li>Boutique</li>
              <li>Contact us</li>
            </ul>
          </div>

          <div className={styles.footerBottomRight}>
            <div className={styles.followMedia}>
              <h3>FOLLOW US</h3>
              <Image src="/Frame2.png" alt="search-icon" width={100} height={50} />
            </div>

            <div className={styles.paymentsAccept}>
              <h4>metta mouse ACCEPTS</h4>
              <Image src="/Frame.png" alt="search-icon" width={400} height={45} />
            </div>
          </div>
      </div>
    </footer>
  );
}
