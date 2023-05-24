import { Link } from 'react-router-dom'

function Header () {
    return(
        <>
            <nav>
                <Link to='/'>Home</Link>
                <Link to='/recommendations'>The List</Link>
            </nav>
            <h1>SF Restaurant Recommendation List!</h1>
        </>
    )
}

export default Header;