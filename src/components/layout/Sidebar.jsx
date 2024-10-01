import { useDispatch, useSelector } from "react-redux"
import { logout, selectUsername } from "../../store/slices/user"
import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import HomeRoundedIcon from '@mui/icons-material/HomeRounded'
import ShowChartIcon from '@mui/icons-material/ShowChart'
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';

const Sidebar = () => {
    const [selected, setSelected] = useState('stats')
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
                <HomeRoundedIcon />
                <p>خانه</p>
            </button>
            <button className={"sidebar-item " + (selected === 'stats' && 'selected')}>
                <ShowChartIcon />
                <p>لیست کاربران</p>
            </button>
            <div className="divider" />
            <button className="sidebar-item logout" onClick={handleLogout}>
                <LogoutRoundedIcon />
                <p>خروج</p>
            </button>
        </aside>
    )
}

export default Sidebar