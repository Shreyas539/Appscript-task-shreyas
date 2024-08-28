// src/app/page.js

import Head from 'next/head';
import Image from 'next/image';
import styles from '../app/page.module.css'
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Sidebar from '@/components/Sidebar';
import DiscoverProduct from '@/components/DiscoverProduct';
import ItemRow from '@/components/ItemRow';

export default async function Home() {
  const res = await fetch('https://fakestoreapi.com/products');
  const products = await res.json();

  return (
    <>
      <div className={styles.MainContainer}>
      <Header className={styles.MainContainer} />
      <DiscoverProduct className={styles.MainContainer} />
      <ItemRow className={styles.MainContainer}/>
      <main className={styles.main}>
        <div className={styles.container}>
          {/* Sidebar */}
          <Sidebar className={styles.MainContainer} />

          {/* Product Grid */}
          <section className={styles.productGrid}>
            

            <div className={styles.grid}>
              {products.map((product) => (
                <div key={product.id} className={styles.card}>
                  {/* Apply the productImage class here */}
                  <div className={styles.productImageContainer}>
                    <img src={product.image} alt={product.title} className={styles.productImage} />
                  </div>
                  
                  <div >
                    <div className={styles.productDescription}>
                        <h2 >{product.title}</h2>
                        {/* <p className={styles.productDescription}>{product.description}</p> */}
                        <p >Sign in or Create an account to see pricing</p>
                    </div>
                    <div>
                      <Image src="/heart-blank.png" alt="logo-image" width={10} height={10} />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>
      </main>
      <Footer  />
      </div>

    </>
  );
}
