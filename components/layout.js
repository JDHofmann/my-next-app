import Navbar from '../components/navbar.js'
import Footer from './footer.js'

export default function Layout({ children }) {
    return (
        
        <div className="container">
            <Navbar />
            {children}
            <Footer />
        </div>
    )
}