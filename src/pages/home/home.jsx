
import '../../index.css'
import './components/nav.css'
function Home() {
    return (
        <nav className="container">
        <div className="options">Options</div>
        <div className="search-group">
        <div className="home-icon">Home Icon</div>
        <div className="search">Search Bar</div>
        </div>
        <div className="social-group">
        <div className="bell">Bell</div>
        <div className="friend">Friends</div>
        <div className="profile">Profile</div>
        </div>
        </nav>
    )
}
export default Home