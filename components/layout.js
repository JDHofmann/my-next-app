import Navbar from '../components/navbar.js'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        
        <div className={styles.container}>
            <Navbar />
            {children}
            <style jsx global>
                {`
                    h1 {
                        color: #0000a0;
                    }
                `}
            </style>
        </div>
    )
}