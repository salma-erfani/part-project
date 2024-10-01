import { useDispatch, useSelector } from "react-redux"
import { logout, selectUsername } from "../../store/slices/user"
import { useEffect } from "react"
import { useNavigate } from "react-router-dom"

const Sidebar = () => {
    let selected = 'home'
    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = () => {
        dispatch(logout())
        console.log('logging out...')
        navigate('/sign-in')
    }

    return (
        <aside className="sidebar">
            <button className={"sidebar-item " + (selected === 'home' && 'selected')}>
                <img src="assets/images/Home.svg" alt="home icon" />
                <p>خانه</p>
            </button>
            <button className={"sidebar-item " + (selected === 'stats' && 'selected')}>
                <img src="assets/images/Statistics.svg" alt="statistics icon" />
                <p>لیست کاربران</p>
            </button>
            <div className="divider" />
            <button className="sidebar-item" onClick={handleLogout}>
                <img src="assets/images/Logout.svg" alt="logout icon" />
                <p>خروج</p>
            </button>
        </aside>
    )
}

export default Sidebar