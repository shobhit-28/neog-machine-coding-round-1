import { useNavigate } from 'react-router-dom'
import './navBar.css'

export const NavBar = () => {
    const navigate = useNavigate()

    return (
        <div className="navbar">
            <div className="navigator" onClick={() => navigate('/')}>
                <p>Home</p>
            </div>
            <div className="navigator" onClick={() => navigate('/search')}>
                <p>Search</p>
            </div>
        </div>
    )
}