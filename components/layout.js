import Navbar from '../components/navbar.js'
// import styles from './layout.module.css'

export default function Layout({ children }) {
    return (
        
        <div className="container">
            <Navbar />
            {children}
            <style jsx>{`
                .container {
                    width: 90vw;
                    padding: 0 1vmin;
                    margin: 5vh auto;
                }
            `}</style>
            <style jsx global>
                {`
                    
                `}
            </style>
        </div>
    )
}