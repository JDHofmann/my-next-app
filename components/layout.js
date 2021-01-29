import Navbar from '../components/navbar.js'
import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        
        <div className={styles.container}>
            <Navbar />
            {children}
            {/* <style jsx>{`
                div {
                    background: #ffa000;
                } 
            }
            `}</style> */}
        </div>
    )
}