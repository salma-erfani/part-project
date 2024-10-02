import { Link } from "react-router-dom"

const NotFoundPage = () => {
    return (
        <div className="not-found">
            <p>This page was not found.</p>
            <Link to='/'>
                back to home
            </Link>
        </div>
    )
}

export default NotFoundPage