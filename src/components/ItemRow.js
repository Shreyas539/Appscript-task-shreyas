import styles from './ItemRow.module.css'
import Image from 'next/image'
import Sidebar from './Sidebar'
import { getDisplayName } from 'next/dist/shared/lib/utils'
export default function ItemRow(){

    
    return(
        <div className={styles.itemRowContainer}>
            <div>
                <h3>3425 ITEMS</h3>
        
                <div className={styles.hideContainer}>
                    <Image className={styles.arrowRight} src="/arrow-left-1.png" alt="search-icon" width={16} height={16} />
                    <button  className={styles.button}>Hide Filter</button>
                </div>
            </div>

            <div>
                <h3>RECOMENDED</h3>
                <Image className={styles.arrowDown} src="/arrow-left-1.png" alt="search-icon" width={16} height={16} />
            </div>
        </div>
    


    )
}