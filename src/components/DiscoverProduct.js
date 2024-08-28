import styles from './Discover.module.css';
import PageStyles from '../app/page.module.css'

export default function(){
    return(
        <>
        <div className={styles.discoverContainer}>
            <div>
                <h1>
                    DISCOVER OUR PRODUCTS
                </h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus scelerisque. Dolor integer scelerisque nibh amet mi ut elementum dolor.
                </p>
            </div>
        </div>
        <div className={PageStyles.Line}></div>
        </>
    )
}